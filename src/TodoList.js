import React, {useState} from 'react';


function TodoList({finalToDoListHandler, searchfor}) {

    const TASKS = ['Meditation', 'Study', 'Footbal Coaching', 'Read a book']

    const [listOfTodos, setListOfTodos] = useState(TASKS)
    const [completedTasks, setCompletedTasks] = useState([])
    const [searchedList, setSearchedList] = useState([])

    const completedHandler = (index) => {
        let tempArray = listOfTodos.filter((each, i) => {
            return i !== index
        })
        setListOfTodos(tempArray)
    }
    

    return (
        <>
            {listOfTodos.map((each, index) => {
                if(searchfor.length === 0){
                    return (
                        <div 
                            onClick={() => completedHandler(index)}
                            >
                            <h4>{index+1}. {each}</h4>
                        </div>
                        )
                } else {
                    return each.includes(searchfor) ? each : null
                }
                
            })}
            
        </>
    )
}

export default TodoList
