# react-icon
React component for font awesome


## Installation
[![sitb-react-icon](https://nodei.co/npm/sitb-react-icon.png "sitb-react-icon")](https://www.npmjs.com/package/sitb-react-icon)

    npm install sitb-react-icon
    
## Usage

### Dependencies
Depend on the style of the ``font-awesome`` library

```js
import '../../node_modules/font-awesome/less/font-awesome.less';
import Icon from 'sitb-react-icon';
import { render } from 'react-dom';

let node = <Icon faStyle='gg' />;
render(<node, container);
```

### Examples
The cloning project,install lib and start,
    
    npm install
    npm start 
    http://localhost:9000
    
then open ``http://localhost:9000`` in browser.

online example: 

## Api

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|faStyle  | the icon style. more style http://fortawesome.github.io/Font-Awesome/icons/|String    | undefined        |
|className|additional css class of root dom node|String |undefined|
|size|To increase icon sizes relative to their container|one of [1, 2, 3, 4, 5, '1', '2', '3', '4', '5']|undefined|
|fixed|fa-fw class|Boolean|false|
|list| fa-li class|Boolean|false|
|border|fa-border class|Boolean|false|
|pullLeft|fa-pull-left class|Boolean|false|
|pullRight|fa-pull-right class|Boolean|false|
|animate|Animated Icons `fa-spin` or `fa-pulse`|one of `spin`,`pulse`|undefined|
|rotate|fa-rotate-* 90 180 270|Number|undefined|
|flipHorizontal|fa-flip-horizontal|Boolean|false|
|flipVertical|fa-flip-vertical|Boolean|false|
|inverse|fa-inverse|Boolean|false|
|stack|fa-stack-*|one of [1, 2, '1', '2']|false|
    
### License
[![License](https://img.shields.io/npm/l/react-icon.svg)](LICENSE)
