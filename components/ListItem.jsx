
import React from 'react'

export default class ItemList extends React.Component {
    render() {
        const {task} = this.props;
        const icDelete = { backgroundImage: `url(/ic-del.png)`, width:'32px', height:'32px' };
        return(
            <div className="list-item">
                <input className="" type="checkbox"/>
                <span className="item-content-task">{task.text}</span>
                <span style={icDelete}></span>
                <style jsx>{`
                    .list-item {
                        height:56px;
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        align-items: center;
                        padding: 6px;
                    }
                    .list-item:hover {opacity: 0.5;                        
                        background-color: rgba(255,255,255,0.1);                        
                        border-radius: 1%;                        
                        cursor: pointer;
                        border-radius: 5px;
                        box-shadow: 0 18px 18px -6px rgba(11, 11, 11, 0.07), 0 -10px 16px 0 rgba(255, 255, 255, 0.44), 0 2px 4px 0 rgba(0, 0, 0, 0.07);
                        background-image: linear-gradient(to left, #fbfbfb, #f8f8f8 46%, #f6f6f6 2%);
                    }
                    .Radio {
                        width: 23px;
                        height: 23px;
                        box-shadow: 0 7px 11px -6px rgba(23, 28, 52, 0.23), 0 -6px 9px 0 rgba(255, 255, 255, 0.39), 0 2px 4px 0 rgba(0, 0, 0, 0.07), inset 0 1px 5px 0 rgba(0, 0, 0, 0.08);
                        border: solid 1px #cccccc;
                        background-color: #ededed;
                    }
                    .item-content-task {
                        font-family: AvenirNext;
                        font-size: 17px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: normal;
                        letter-spacing: normal;
                        color: #393943;
                    }             
                `}</style> 
            </div>
        );
    }
}