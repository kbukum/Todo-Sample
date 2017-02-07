import React from "react";

const style = {
    backgroundColor: "#333"
};

export default class TodoItem extends React.Component {
    static propTypes = {
        value: React.PropTypes.string,
        onChange: React.PropTypes.func.isRequired
    };
    static defaultProps = {
        value: ""
    };
    item;
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    render(){
        let {onChange, ...item} = this.props;
        this.item = item;
        return (
            <div style={style} >
                <input onChange={this.onChange} {...this.item} />
            </div>
        )
    }

    onChange(e){
        this.item.value = e.target.value;
        this.props.onChange(this.item);
    }
}
