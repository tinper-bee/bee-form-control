/**
 * @title 不同size Input
 * @description
 */

import React, {Component} from 'react';
import Button from 'bee-button';
import FormControl from '../../src';

export default class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "test"
        }
    }

    onChange = (e) => {
        this.setState({value: e});
    }

    render() {
        return (
            <div className="demo1">
                <FormControl
                    className="demo1-input"
                    value={this.state.value}
                    onChange={this.onChange}
                    size="sm"
                />
                <FormControl
                    className="demo1-input"
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <FormControl
                    className="demo1-input"
                    value={this.state.value}
                    onChange={this.onChange}
                    size="lg"
                />
            </div>

        )
    }
}