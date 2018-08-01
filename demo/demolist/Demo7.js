/**
 * @title 清空按钮
 * @description 通过设置showClose={true}属性，让FormControl组件有清空功能
 */

import React, {Component} from 'react';
import Button from 'bee-button';
import FormControl from '../../src';
import Tooltip from 'bee-tooltip';

export default class Demo6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "test"
        }
    }

    onChange = (value) => {
        this.setState({value: value});
    }

    onSearch = (value) => {
        console.log(value);
    }

    render() {
        return (
            <div className="demo7">
                <Tooltip trigger="click" 
                inverse rootClose placement="bottom" 
                overlay={this.state.value}>
                    <FormControl
                        className="demo7-input"
                        value={this.state.value}
                        onSearch={this.onSearch}
                        onChange={this.onChange}
                    />
				</Tooltip>
               
            </div>

        )
    }
}