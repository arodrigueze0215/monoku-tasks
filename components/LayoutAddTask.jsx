import React from 'react'
import 'isomorphic-fetch';
import ListTask from '../components/ListTask';
import InputAdd from '../components/InputAdd';
import api from '../api';

export default class LayoutAddTask extends React.Component {
    state = {
        task: { text: undefined },
        tasks: []
      }

      componentDidMount() {
          console.log('componentDidMount')
          this.setState({tasks: this.props.tasks})
          this.state.tasks
      }
    
      handleChange = e => {
            this.setState({...this.state, task: {[e.target.name]: e.target.value}});
      }
    
      handleAddTask =  async e => {
        e.preventDefault();
        try {
          await api.task.create(this.state.task)
          const tasks = await api.task.list();
          this.setState({...this.state, tasks: tasks})
        } catch (error) {
          console.log(error)
          
        }
      }
    render() {
        const { tasks } = this.state;
        return(
            <div className="content-addTask">
                <InputAdd onClick={this.handleAddTask} onChange={this.handleChange}/>            
                <ListTask tasks={tasks}/>
             <style global jsx>{`
                .content-addTask{
                    margin-top: 48px;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items: center;
                    width:100%;
                 }

             `}</style>
            </div>
        );

    }
};