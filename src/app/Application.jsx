import React from "react";
import AjaxUtil from "../util/AjaxUtil";
import Arrays from "../util/Arrays";
import Todo from "./todo/Todo";


export default class Application extends React.Component {
    static propTypes = {
        idField: React.PropTypes.string.isRequired,
        backendUrl: React.PropTypes.string.isRequired
    };
    static ajax;
    constructor(props){
        super(props);
        this.ajax = new AjaxUtil(props);
        this.add = this.add.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            items: null
        }
    }
    render(){
        return (
            <div>
                <Todo idField={this.props.idField} add={this.add} delete={this.deleteItem} items={this.state.items} onChange={this.onChange} />
            </div>
        )
    }

    add() {
        let me = this;
        this.ajax
            .create("todoItems", {})
            .then(
                (item) => {
                    me.state.items.push(item);
                    me.setState(me.state);
                }
            ).catch((err) => {
            console.log(err);
        });
    }

    deleteItem(index){
        let me = this;
        console.log(index);
        this.ajax
            .delete("todoItems",  this.state.items[index][this.props.idField])
            .then(
                (item) => {
                    let items = this.state.items.slice(0);
                    items.splice(index, 1);
                    me.setState({
                        items: items
                    });
                }
            ).catch((err) => {
            console.log(err);
        });
    }

    onChange(item){
        let me = this;
        let itemIndex = Arrays.getItemIndexByKey(this.state.items, this.props.idField, item[this.props.idField]);
        if(itemIndex === -1) return false;
        this.ajax
            .update("todoItems", item, item[this.props.idField])
            .then(
                (item) => {
                    let items = me.state.items.slice(0);
                    items[itemIndex] = item;
                    me.setState({
                        items
                    });
                }
            ).catch((err) => {
            console.log(err);
        });
    }


    getUrl(url){
        return this.props.backendUrl + "/" + url;
    }

    componentDidMount(){
        let me = this;
        if(!me.state.items) {
            me.ajax
                .getAll("todoItems")
                .then(
                    (response) => {
                        me.setState({
                            items: response
                        });
                    }
                ).catch((err) => {
                console.log(err);
            });
        }
    }
}