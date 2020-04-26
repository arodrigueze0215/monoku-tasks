import React from 'react'
import ItemList from './ListItem'

export default class ListTask extends React.Component {
    render() {
        
        const { tasks }= this.props;
        const listItems = tasks.map(task => <ItemList key ={task.id} task={task}/>)
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
}