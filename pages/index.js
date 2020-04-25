import React from 'react'
import 'isomorphic-fetch';
import ListTask from '../components/ListTask';
import InputAdd from '../components/InputAdd';
import LayoutAddTask from '../components/LayoutAddTask';

export default class Add extends React.Component {
  static async getInitialProps() {
    try {
      let req = await fetch('https://monoku-tasks.herokuapp.com/FXouHilAxLw1LT5ttZpa/all');
      let tasks = await req.json();
      return { tasks, statusCode:200 };            
    } catch (error) {
      return { channels:null, statusCode:503 };            
        
    }
  }

  render() {
    const { tasks } = this.props;
    return (
        <div className="Inicio">
            <div className="Image">
              <div className="Overlay">
                <div className="content-hora">
                  <span className="Viernes-6-de-diciem">Fecha</span>
                  <span className="am">Hora</span>
                  <span className="Qu-planeas-hacer-e">¿Qué quieres hacer hoy?</span>
                </div>
              </div>
            </div>
          <LayoutAddTask>
            <InputAdd/>            
            <ListTask tasks={tasks}/>
          </LayoutAddTask>
    
          <style global jsx>{`
              html, body {
                height: 100%;
                margin: 0;
                background-color: #e8e8e8;
              }
              
              :root {
                --indigo-blue:#3720b0;
              }
              .Inicio {
                display:flex;
                justify-content: center;
                align-items: center;
                flex-direction:column;
                margin-top:19px;
              }
              .Image {
                width: 50%;
                height: 275px;
                border-radius: 15px;
                box-shadow: 0 10px 13px 0 rgba(147, 163, 247, 0.52);
                background-image: url('https://blog.assets.traveltrivia.com/2019/01/Rocky-Mountains-Colorado-1.jpg');
                background-repeat: no-repeat;
                background-size: 100%;
                
              }
              
              .Overlay {
                width: 100%;
                height: 275px;
                opacity: 0.72;
                border-radius: 15px;
                background-image: linear-gradient(242deg, rgba(34, 102, 247, 0.79) 105%, var(--indigo-blue) 27%);
              }
              .content-hora {
                display:flex;
                flex-direction: column;
                padding-left: 10%;
                padding-top: 3%;
                height:100%;
    
              }
              .Viernes-6-de-diciem {
                width: 100%;         
                height: 19px;          
                opacity: 0.43;          
                font-family: AvenirNext;          
                font-size: 14px;          
                font-weight: 500;          
                font-stretch: normal;          
                font-style: normal;          
                line-height: normal;          
                letter-spacing: normal;          
                color: #ffffff;          
              }
              .am {
    
                width: 100%;          
                height: 87px;          
                font-family: AvenirNext;          
                font-size: 64px;          
                font-weight: 200;          
                font-stretch: normal;          
                font-style: normal;          
                line-height: normal;          
                letter-spacing: normal;          
                color: #ffffff;          
              }
              .Qu-planeas-hacer-e {
    
                width: 100%;          
                height: 50px;          
                font-family: AvenirNext;          
                font-size: 18px;          
                font-weight: normal;          
                font-stretch: normal;          
                font-style: normal;          
                line-height: normal;          
                letter-spacing: normal;          
                color: #ffffff;          
              }
              
              
              
              @media only screen and (max-width: 600px) {
                .Overlay {
                  width: 330px;
                  height: 275px;
                  opacity: 0.72;
                  border-radius: 15px;
                  background-image: linear-gradient(217deg, rgba(34, 102, 247, 0.79) 105%, var(--indigo-blue) 10%);
                  
                } 
                .Image {
                  width: 330px;        
                  height: 275px;        
                  border-radius: 15px;        
                  box-shadow: 0 10px 13px 0 rgba(147, 163, 247, 0.52);                     
                }
              }
          `}</style>
        </div>
    );
  }
}
