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



ReactDOM.render(demo1(), document.getElementById('ReactControlLabelDemo1'));

