import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
var webdriver = require('selenium-webdriver');
import { FormControl } from '../src/index';

describe('Enzyme Shallow', function () {
  it('FormControl should be exist', function () {
    let formControl = shallow(<FormControl/>);
    expect(formControl.hasClass('u-input')).to.equal(true);
  });

});

describe('测试FormControl页面', function () {
	let url="http://10.1.243.159:3000/";
	var driver;
	this.timeout(50000);
	afterEach(function(){
		driver.quit();
	})
	

  it('设置的默认值与浏览器显示的默认值一致', function () {
  	let mywidget,container;
  	let By = webdriver.By;
  	driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
  	return driver.get(url)
  	.then(function(){
  		return driver.findElements(By.css('input.u-input'));
  	})
  	.then(function(ele){
  		return ele[1].getAttribute("value");
  	})
  	.then(function(inputvalue){
  		expect(inputvalue).to.equal("FormControl test");
  	})
  });
});