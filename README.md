# bee-form-control
[![npm version](https://img.shields.io/npm/v/bee-form-control.svg)](https://www.npmjs.com/package/bee-form-control)
[![Build Status](https://img.shields.io/travis/tinper-bee/generator-tinper-bee/master.svg)](https://travis-ci.org/tinper-bee/bee-form-control)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-form-control.svg)](https://david-dm.org/tinper-bee/bee-form-control#info=devDependencies)

用 `<FormControl>` 来代替 `<input>`, `<textarea>`, and `<select>`


#### 安装步骤

```sh
$ git clone https://github.com/tinper-bee/bee-form-control
$ cd bee-form-control
$ npm install
$ npm run dev
```

## 使用

使用单独的bee-form-control包
#### 组件引入
先进行下载bee-form-control包
```
npm install --save bee-form-control
```
组件调用
```js
import form-control from 'bee-form-control';
React.render(<div>
    <div>
        <form-control />
        <br>
        <form-control placeholder="input placeholder" defaultValue="default value" />
        <br/>
        <form-control type="checkbox" />
    </div>
</div>, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下bee-form-control.css
```
<link rel="stylesheet" href="./node_modules/build/bee-form-control.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/FormControl.scss"
//或是
import "./node_modules/build/bee-form-control.css"
```




## API
|参数|说明|类型|默认值|
|---|----|---|------|
|id|form-control id|string|''|
|type|类型(`text` `submit`,'checkbox',...详情http://www.w3school.com.cn/html5/att_input_type.asp)|string|'input'|
