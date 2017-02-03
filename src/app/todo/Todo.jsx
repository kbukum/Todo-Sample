import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem";

export default class Todo extends React.Component {
    static propTypes = {
        items: React.PropTypes.arrayOf(React.PropTypes.object),
        onClick: React.PropTypes.func.isRequired
    }
    static defaultProps = {
        items: []
    }
    constructor(props) {
        super(props);
        this.componentWillReceiveProps(props);
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    render(){

        return (
            <div>
                <h2> Todo </h2>
                {this.generateItems(this.props.items)}
            </div>
        )
    }

    componentDidUpdate(){

    }
    componentDidMount(){
        if(this.state.isFaded) {
            ReactDOM.findDOMNode(this).className = ""
        }
    }

    click(){
        ReactDOM.findDOMNode(this).className = ""
    }
    generateItems(items) {
        let elements = [];

        for(let i = 0 ; i < items.length; i++) {
            elements.push(
                <TodoItem {...items[i]} />
            );
        }
        let lastIndex = elements.length -1;
        elements[lastIndex == -1 ? 0: lastIndex] = (<table>
            <tr>
                <td> { lastIndex == -1 ? null: elements[lastIndex]}</td>
                <td> <button onClick={this.props.onClick}>+</button></td>
            </tr>
        </table>
        )
        return elements;
    }
}