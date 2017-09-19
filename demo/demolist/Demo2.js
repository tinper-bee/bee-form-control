/**
 * @title 不可用 Input
 * @description 
 */

import React, { Component } from 'react';
import FormControl from '../../src';

export default class Demo2 extends Component {
	constructor(props) {
      super(props);
      this.state = {
          formValue: "test"
      }
  	}
	onChange = (value) => {
		console.log(value);
	}
	render () {
		return (
			<FormControl placeholder="Enter text" defaultValue={this.state.formValue} onChange={this.onChange}/>	
		)
	}
}