
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormControl from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 * @title 
 * @description 
 */
class Demo1 extends Component {
	render () {
		return (
			<div className="demo-form-control">
	        	<FormControl placeholder="Enter text"/>			
	        </div>
		)
	}
}/**
 * @title 
 * @description 
 */
class Demo2 extends Component {
	constructor(props) {
		super(props);
		this.HanderChange = this.HanderChange.bind(this);
		this.state = {
			value: 'test'
		}
	}
	HanderChange () {
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

}var DemoArray = [{"example":<Demo1 />,"title":" ","code":"/**\n * @title \n * @description \n */\nclass Demo1 extends Component {\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-form-control\">\n\t        \t<FormControl placeholder=\"Enter text\"/>\t\t\t\n\t        </div>\n\t\t)\n\t}\n}","desc":" "},{"example":<Demo2 />,"title":" ","code":"/**\n * @title \n * @description \n */\nclass Demo2 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.HanderChange = this.HanderChange.bind(this);\n\t\tthis.state = {\n\t\t\tvalue: 'test'\n\t\t}\n\t}\n\tHanderChange () {\n\t\tlet value = ReactDOM.findDOMNode(this.refs.demo2).value;\n\t\t\n\t\tthis.setState ({value: value});\n\t}\n\trender(){\n\t\treturn( \n\t\t\t<div className=\"demo-form-control\">\n\n\t\t\t\t<FormControl ref='demo2' defaultValue='test' onChange={this.HanderChange} /> \n\n\t\t\t\t<span>{this.state.value}</span>\n            </div>\n        )\n\t}\n\n}","desc":" "}]


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
