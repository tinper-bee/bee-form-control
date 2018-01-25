
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 不同size Input","code":"/**\n * @title 不同size Input\n * @description\n */\n\nimport React, {Component} from 'react';\nimport { FormControl, Button } from 'tinper-bee';\n\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n    }\n\n    onChange = (e) => {\n        this.setState({value: e});\n    }\n\n    render() {\n        return (\n            <div className=\"demo1\">\n                <FormControl\n                    className=\"demo1-input\"\n                    value={this.state.value}\n                    onChange={this.onChange}\n                    size=\"sm\"\n                />\n                <FormControl\n                    className=\"demo1-input\"\n                    value={this.state.value}\n                    onChange={this.onChange}\n                />\n                <FormControl\n                    className=\"demo1-input\"\n                    value={this.state.value}\n                    onChange={this.onChange}\n                    size=\"lg\"\n                />\n            </div>\n\n        )\n    }\n}","desc":"","scss_code":".demo1 {\n    padding-bottom: 20px;\n    display: block;\n    .demo1-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"},{"example":<Demo2 />,"title":" 可控 Input","code":"/**\n * @title 可控 Input\n * @description\n */\n\nimport React, {Component} from 'react';\nimport { FormControl, Button } from 'tinper-bee';\n\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"我是这样\"\n        }\n    }\n\n    onChange = (value) => {\n        this.setState({value: value});\n    }\n\n    onHander = () => {\n        this.setState({value: \"我改变了\"})\n    }\n\n    render() {\n        return (\n            <div className=\"demo2\">\n                <Button colors=\"primary\" onClick={this.onHander}>修改输入框值</Button>\n                <FormControl className=\"demo2-input\" value={this.state.value} onChange={this.onChange}/>\n            </div>\n\n        )\n    }\n}","desc":"","scss_code":".demo2 {\n    padding-bottom: 20px;\n    display: block;\n    .demo2-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"},{"example":<Demo3 />,"title":" 获取Input对象句柄","code":"/**\n * @title 获取Input对象句柄\n * @description 获取对象句柄，两种方式。\n */\n\nimport React, {Component} from 'react';\nimport { FormControl, Button } from 'tinper-bee';\n\nclass Demo3 extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n    }\n\n    onHander = () => {\n        this.textInput.input.focus();\n    }\n\n    render() {\n        return (\n            <div className=\"demo3\">\n                <Button colors=\"primary\" onClick={this.onHander}>获取input对象句柄</Button>\n\n                <FormControl\n                    className=\"demo3-input\"\n                    value={this.state.value}\n                    ref={(input) => {this.textInput = input}}\n                />\n                <FormControl\n                    className=\"demo3-input\"\n                    value={this.state.value}\n                    ref=\"test\"\n                />\n            </div>\n\n        )\n    }\n}\n","desc":" 获取对象句柄，两种方式。","scss_code":".demo3 {\n    padding-bottom: 20px;\n    display: block;\n    .demo3-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"},{"example":<Demo4 />,"title":" 设置文本框焦点事件 autoFocus 属性","code":"/**\n * @title 设置文本框焦点事件 autoFocus 属性\n * @description 设置文本框焦点事件 autoFocus 属性\n */\n\nimport React, {Component} from 'react';\nimport { FormControl, Button } from 'tinper-bee';\n\nclass Demo4 extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n    }\n\n    render() {\n        return (\n            <div className=\"demo4\">\n                <FormControl\n                    className=\"demo4-input\"\n                    autoFocus\n                    value={this.state.value}\n                />\n            </div>\n        )\n    }\n}\n","desc":" 设置文本框焦点事件 autoFocus 属性","scss_code":".demo4 {\n    padding-bottom: 20px;\n    display: block;\n    .demo4-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"},{"example":<Demo5 />,"title":" 搜索框","code":"/**\n * @title 搜索框\n * @description 通过设置type=\"search\"属性，让FormControl组件有搜索功能\n */\n\nimport React, {Component} from 'react';\nimport { FormControl, Button } from 'tinper-bee';\n\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"test\"\n        }\n    }\n\n    onChange = (value) => {\n        this.setState({value: value});\n    }\n\n    onSearch = (value) => {\n        console.log(\"搜索\" + value);\n    }\n\n    render() {\n        return (\n            <div className=\"demo5\">\n                <FormControl\n                    className=\"demo5-input\"\n                    value={this.state.value}\n                    onSearch={this.onSearch}\n                    onChange={this.onChange}\n                    type=\"search\"\n                />\n            </div>\n\n        )\n    }\n}","desc":" 通过设置type=\"search\"属性，让FormControl组件有搜索功能","scss_code":".demo5 {\n    padding-bottom: 20px;\n    display: block;\n    .demo5-input{\n        margin-top: 10px;\n        width: 200px;\n        display: block;\n    }\n}"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
