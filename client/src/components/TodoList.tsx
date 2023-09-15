import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import Pagination from 'react-bootstrap/Pagination';


const TodoList: React.FC = () => {
    const {page, error, limit, loading, todos} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]
    useEffect(()=> {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>)}
            <div style={{display: "flex"}}>
            {/* {pages.map(p => 
                <div
                key={p} 
                onClick={() => setTodoPage(p)}
                style={{border: p === page ? "2px solid green" : '1px solid gray', padding: 10, cursor: "pointer"}}>{p}</div>)} */}
            </div> 
            <div>
            <Pagination>
                {pages.map( p => 
                <Pagination.Item  
                key={p}
                onClick={() => setTodoPage(p)}
                style={{backgroundColor: "#ABCCBB"}} 
                active={p === page}>
                {p}
                </Pagination.Item>
                 )}
            </Pagination>    
            </div> 
        </div>
    );
};

export default TodoList;