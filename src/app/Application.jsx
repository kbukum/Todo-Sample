import React from "react";
import Todo from "./todo/Todo";

const todoItems = [
    {
        text:"Deneme"
    },
    {
        text: "Deneme2"
    },
    {
        text: "Deneme3"
    }
]

export default class Application extends React.Component {
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            items: todoItems
        }
    }
    render(){
        return (
            <div>
                <Todo onClick={this.onClick} items={this.state.items} />
            </div>
        )
    }

    onClick() {
        this.state.items.push({});
        this.setState(this.state);
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
}