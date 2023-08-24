import React, { useEffect, useState } from 'react';

const Json = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <div>
            {todos.map(todo => {
                return <p key={todo.id}>{todo.title}</p>
            })}
        </div>
    );
};

export default Json;