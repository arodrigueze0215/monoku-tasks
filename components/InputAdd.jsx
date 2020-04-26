import React from 'react';
export default function InputAdd(props) {

    return(
        <React.Fragment>
            <div className="content-label">
                <span>Añade las tareas que quieres realizar</span>
            </div>
            <div className="content-input">
                <input name="text" 
                    className="input-addTask" 
                    placeholder="Eje: Compra material para trabajar" 
                    type="text"
                    onChange={props.onChange}/>
            </div>
            <div className="content-add-task">
                <button onClick={props.onClick} className="btn-add-task">Añadir</button>
            </div>
            <style jsx>{`

                .content-label{
                    width:50%
                    display:flex;
                    text-align:left;
                    justify-content:center;
                    margin-bottom: 48px;
                
                }
                .content-input {
                    width: 40%;                      
                }
                .content-add-task {
                    margin-top: 16px;
                    width: 40%;
                    display: flex;
                    justify-content: flex-end;                        
                }   
                .btn-add-task {
                    width: 137px;
                    height: 40px;                      
                    border-radius: 3px;                      
                    box-shadow: 0 7px 10px -4px rgba(53, 59, 155, 0.51);                      
                    background-image: linear-gradient(40deg, #6f70d7 18%, #81caff 107%);
                    color: white;
                    border: white;
                }

                .input-addTask {
                    border: white;
                    width: 99%;
                    height: 67px;
                    border-radius: 5px;
                    box-shadow: 0 18px 18px -6px rgba(11, 11, 11, 0.07), 0 -10px 16px 0 rgba(255, 255, 255, 0.44), 0 2px 4px 0 rgba(0, 0, 0, 0.07);
                    background-image: linear-gradient(to left, #fbfbfb, #f8f8f8 46%, #f6f6f6 2%);
                    padding-left: 1%;
                }

                .input-addTask:focus {
                    border-radius: 5px;
                    box-shadow: 0 18px 18px -6px rgba(11, 11, 11, 0.07), 0 -10px 16px 0 rgba(255, 255, 255, 0.44), 0 2px 4px 0 rgba(0, 0, 0, 0.07)             
                    border-style: solid;                  
                    border-width: 1px;                  
                    border-image-source: linear-gradient(to left, #6f77d7, rgba(116, 145, 233, 0.02) 74%);                  
                    border-image-slice: 1;                  
                    background-image: linear-gradient(to right, #fbfbfb, #f8f8f8 46%, #f6f6f6 2%), linear-gradient(to left, #6f77d7, rgba(116, 145, 233, 0.02) 74%);                  
                    background-origin: border-box;                  
                    background-clip: content-box, border-box;
                }                
            `}</style>
        </React.Fragment>

    );
};