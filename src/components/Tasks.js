import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, OnDelete, onToggle }) => {
    return (
        <>
            {
                tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={OnDelete} OnToggle={onToggle}></Task>
                ))

            }
        </>
    )
}

export default Tasks