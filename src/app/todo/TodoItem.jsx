import React from "react";

const style = {
    backgroundColor: "#333"
};

export default class TodoItem extends React.Component {
    static propTypes = {
        text: React.PropTypes.string
    };
    static defaultProps = {
        text: "Yazı"
    }
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            text: this.props.text
        };
    }
    render(){
        return (
            <div style={style} >
                <input onChange={this.onChange} value={this.state.text} />
            </div>
        )
    }
    onChange(e){
        this.setState({
            text: e.target.value
        });
    }
}
