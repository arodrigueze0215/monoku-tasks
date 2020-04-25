import React from 'react';
export default class InputAdd extends React.Component {

    render() {
        return(
            <React.Fragment>
                <div className="content-label">
                    <span>Añade las tareas que quieres realizar</span>
                </div>
                <div className="content-input">
                    <input className="input-addTask" placeholder="Eje: Compra material para trabajar" type="text"/>
                </div>
                <style jsx>{`

                      .content-label{
                        width:100%
                        display:flex;
                        text-align:left;
                        justify-content:center;
                        
                      }
                      .content-input{
                        width: 100%;
                      }
                      .input-addTask {
                        margin-top: 48px;
                        width: 100%;
                        height: 67px;
                        border-radius: 5px;
                        box-shadow: 0 18px 18px -6px rgba(11, 11, 11, 0.07), 0 -10px 16px 0 rgba(255, 255, 255, 0.44), 0 2px 4px 0 rgba(0, 0, 0, 0.07);
                        background-image: linear-gradient(to left, #fbfbfb, #f8f8f8 46%, #f6f6f6 2%);
                      }
                                    
                `}</style>
            </React.Fragment>

        );

    }
}