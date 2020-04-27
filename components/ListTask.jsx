import React from 'react'
import ItemList from './ListItem'

export default function ListTask(props) {
    const { tasks, onChange, onClickDel }= props;
    const listItems = tasks.map(task => <ItemList key ={task.id} task={task} onChange={onChange} onClickDel={onClickDel}/>)
    return(
        <div className="content-listTask">
            {listItems}
            <style jsx>{`
                .content-listTask{
                    margin-top: 48px;
                    width:40%;
                    display:flex;
                    flex-direction:column;
                }               
            `}</style>  
        </div>
    );
}