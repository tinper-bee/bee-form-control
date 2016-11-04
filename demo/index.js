import FormControl from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function demo1() {
    return (
        <div className="demo-form-control">
        	<FormControl placeholder="Enter text"/>			
        </div>
    );
}

class Demo2 extends Component {
	constructor(props) {
		super(props);
		this.HanderChange = this.HanderChange.bind(this);
		this.state = {
			value: 'test'
		}
	}
	HanderChange () {
		debugger;
		let value = ReactDOM.findDOMNode(this.refs.demo2).value;
		
		this.setState ({value: value});
	}
	render(){
		return( 
			<div className="demo-form-control">

				<FormControl ref='demo2' defaultValue='test' onChange={this.HanderChange} /> 

				<span>{this.state.value}</span>
            </div>
        )
	}

}

ReactDOM.render(demo1(), document.getElementById('ReactFormControlDemo1'));
ReactDOM.render(
	<Demo2 />, 
	document.getElementById('ReactFormControlDemo2')
);
