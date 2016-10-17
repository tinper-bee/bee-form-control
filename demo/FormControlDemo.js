import { FormControl } from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Demo extends Component {
	constructor(props) {
		super(props);
		this.HanderChange = this.HanderChange.bind(this);
	}
	HanderChange () {
		console.log("handerChange");
	}
	render(){
		return( 
			<div>
				<FormControl/>				
				<br/>
				<FormControl defaultValue="FormControl test" placeholder="Enter text" onChange={this.HanderChange} /> 
            </div>
        )
	}

}
export default Demo;