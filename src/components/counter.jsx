import React, { Component, Fragment } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        console.log('Counter- Constructor')
    }
    componentDidMount(){
        console.log('Counter- Mounted')

    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value ? 'primary' : 'warning';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value || 'Zero'
    }

    // formatButtonDisabled(){
    //     const { value } = this.props.counter;
    //     if (value===0) return disabled
    // }

    render () {
        console.log('Counter-Rendered')

        return(
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter,1)} className="btn btn-secondary btn-sm m-2">+</button>
                    <button onClick={() => this.props.onIncrement(this.props.counter,-1)} className="btn btn-secondary btn-sm m-2" disabled={this.props.counter.value===0}>-</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">x</button>
                </div>
            </div>
        );  
    }    
}

export default Counter;
