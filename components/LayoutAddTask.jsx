import React from 'react'

export default class LayoutAddTask extends React.Component {
    render() {
        return(
            <div className="content-addTask">{this.props.children}
             <style global jsx>{`
                .content-addTask{
                    margin-top: 48px;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    width:40%;
                 }

             `}</style>
            </div>
        );

    }
};