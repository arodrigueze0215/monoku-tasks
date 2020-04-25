
import React from 'react'

export default class ItemList extends React.Component {
    render() {
        const {task} = this.props;
        const icDelete = { backgroundImage: `url(/ic-del.png)`, width:'32px', height:'32px' };
        return(
            <div className="list-item">
                <input className="Radio" type="radio"/>
                <span className="item-content-task">{task.text}</span>
                <span style={icDelete}></span>
                <style jsx>{`
                    .list-item {
                        height:56px;
                        display:flex;
                        flex-direction:row;
                        justify-content:space-between;
                        align-items: center;
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