
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 常用三种尺寸 Input","code":"/**\n * @title 常用三种尺寸 Input\n * @description \n */\n\nimport React, { Component } from 'react';\nimport FormControl from 'bee-form-control';\n\n\n\t\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-form-control\">\n\t\t\t\t<button onClick={this.onChange}></button>\n\t\t\t\t<span className=\"wraper\"><FormControl placeholder=\"Enter text\" size=\"sm\"/>\t</span>\n\t\t\t\t<span className=\"wraper\"><FormControl placeholder=\"Enter text\"/>\t</span>\n\t\t\t\t<span className=\"wraper\"><FormControl placeholder=\"Enter text\" size=\"lg\"/></span>\n\t\t\t\t<span className=\"wraper\"><FormControl placeholder=\"Enter text\" type=\"search\" size=\"lg\"/></span>\t\n\t\t\t</div>\n\t\t)\n\t}\n}","desc":" "},{"example":<Demo2 />,"title":" 不可用 Input","code":"/**\n * @title 不可用 Input\n * @description \n */\n\nimport React, { Component } from 'react';\nimport FormControl from 'bee-form-control';\n\n\n\tconstructor(props) {\n      super(props);\n      this.state = {\n          formValue: \"test\"\n      }\n  \t}\n\tonChange = (value) => {\n\t\tconsole.log(value);\n\t}\n\trender () {\n\t\treturn (\n\t\t\t<FormControl placeholder=\"Enter text\" defaultValue={this.state.formValue} onChange={this.onChange}/>\t\n\t\t)\n\t}\n}","desc":" "}]


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
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
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
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
