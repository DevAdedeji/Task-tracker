import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, OnDelete }) => {
    return (
        <>
            {
                tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={OnDelete}></Task>
                ))

            }
        </>
    )
}

export default Tasks