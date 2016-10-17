# bee-FormControl
[![npm version](https://img.shields.io/npm/v/bee-FormControl.svg)](https://www.npmjs.com/package/bee-FormControl)
[![Build Status](https://img.shields.io/travis/tinper-bee/generator-tinper-bee/master.svg)](https://travis-ci.org/tinper-bee/bee-FormControl)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-FormControl.svg)](https://david-dm.org/tinper-bee/bee-FormControl#info=devDependencies)


react bee-FormControl component for tinper-bee

#### setup develop environment

```sh
$ git clone https://github.com/tinper-bee/bee-FormControl
$ cd bee-FormControl
$ npm install
$ npm run dev
```

## 使用

### 使用单独的formControl包
#### 组件引入
先进行下载formControl包
```
npm install --save bee-formControl
```
组件调用
```js
import { FormControl } from 'bee-formControl';
React.render(<div>
    <div>
        <FormControl />
        <br>
        <FormControl placeholder="input placeholder" defaultValue="default value" />
        <br/>
        <FormControl type="checkbox" />
    </div>
</div>, document.getElementById('target'));
```
#### 样式引入
- 可以使用link引入dist目录下formControl.css
```
<link rel="stylesheet" href="./node_modules/build/bee-formControl.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/FormControl.scss"
//或是
import "./node_modules/build/bee-formControl.css"
```




## API
|参数|说明|类型|默认值|
|---|----|---|------|
|id|formControl id|string|''|
|type|类型(`text` `submit`,'checkbox',...详情http://www.w3school.com.cn/html5/att_input_type.asp)|string|'input'|
