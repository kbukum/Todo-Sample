import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem";

export default class Todo extends React.Component {
    static propTypes = {
        idField: React.PropTypes.string,
        items: React.PropTypes.arrayOf(React.PropTypes.object),
        add: React.PropTypes.func.isRequired,
        delete: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired
    };
    static defaultProps = {
        idField: "oid",
        items: []
    };

    constructor(props) {
        super(props);
        this.componentWillReceiveProps(props);
    }
    componentWillReceiveProps(nextProps){

    }

    render(){
        return (
            <div>
                <h2> Todo </h2>
                <table>
                    {this.generateItems(this.props.items)}
                    <tr>
                        <td> Add New Item </td>
                        <td> <button style={{backgroundColor: "blue"}} onClick={this.props.add}>+</button></td>
                    </tr>
                </table>
            </div>
        )
    }


    generateItems(items) {
        let elements = [];
        if(!items || items.length === 0) return elements;
        for(let i = 0 ; i < items.length; i++) {
            elements.push(
                <tr key={items[i][this.props.idField]}>
                    <td> <TodoItem {...items[i]} onChange={this.props.onChange} /></td>
                    <td> <button style={{backgroundColor: "red"}} onClick={this.props.delete.bind(undefined, i)}>-</button></td>
                </tr>
            );
        }
        return elements;
    }
}