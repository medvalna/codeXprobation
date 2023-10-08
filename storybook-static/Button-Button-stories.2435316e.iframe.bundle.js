"use strict";(self.webpackChunkcodex_enter=self.webpackChunkcodex_enter||[]).push([[228],{"./src/Button/Button.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Large:()=>Large,default:()=>Button_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_button=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/Button/button.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_button.Z,options);Button_button.Z&&Button_button.Z.locals&&Button_button.Z.locals;var _Default$parameters,_Default$parameters2,_Large$parameters,_Large$parameters2,__jsx=react.createElement,Button=function Button(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"solid":_ref$type,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,_ref$style=_ref.style,style=void 0===_ref$style?"primary":_ref$style,_ref$iconType=_ref.iconType,iconType=void 0===_ref$iconType?"none":_ref$iconType,_ref$state=_ref.state,state=void 0===_ref$state?"default":_ref$state;return __jsx("button",{type:"button",className:["button","button-size-".concat(size),"button-style-".concat(style),"button-type-".concat(type),"button-iconType-".concat(iconType),"button-state-".concat(state)].join(" ")},"none"==iconType?__jsx("div",null,"Button"):"leading"==iconType?__jsx("span",null,__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 -4 20 20",fill:"none"},__jsx("path",{stroke:"currentColor",d:"M10 5V10M10 15V10M15 10H10M10 10H5",strokeWidth:"1.6",strokeLinecap:"round"})),"Button"):"trailing"==iconType?__jsx("span",null,"Button"," ",__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",transform:"rotate(90)",fill:"none",viewBox:"0 1 20 20"},__jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 8L5 12L9 16"}),__jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 8L19 12L15 16"}))):"leadingTrailing"==iconType?__jsx("span",null,__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 -4 20 20",fill:"none"},__jsx("path",{d:"M10 5V10M10 15V10M15 10H10M10 10H5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})),"Button"," ",__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",transform:"rotate(90)",fill:"none",viewBox:"0 1 20 20"},__jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 8L5 12L9 16"}),__jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 8L19 12L15 16"}))):__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},__jsx("path",{d:"M10 5V10M10 15V10M15 10H10M10 10H5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})))};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'solid'",computed:!1},required:!1,tsType:{name:"union",raw:"'solid'| 'outline'| 'soft' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'ghost'"}]},description:""},size:{defaultValue:{value:"'medium'",computed:!1},required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},style:{defaultValue:{value:"'primary'",computed:!1},required:!1,tsType:{name:"union",raw:"'primary'| 'secondary'| 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"}]},description:""},iconType:{defaultValue:{value:"'none'",computed:!1},required:!1,tsType:{name:"union",raw:"'none' | 'leading' | 'trailing' | 'leadingTrailing' | 'standalone'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'leading'"},{name:"literal",value:"'trailing'"},{name:"literal",value:"'leadingTrailing'"},{name:"literal",value:"'standalone'"}]},description:""},state:{defaultValue:{value:"'default'",computed:!1},required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'disabled'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"solid"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'},{value:'"soft"'},{value:'"ghost"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},style:{defaultValue:{value:"primary"},description:"",name:"style",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},iconType:{defaultValue:{value:"none"},description:"",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"leading"'},{value:'"trailing"'},{value:'"leadingTrailing"'},{value:'"standalone"'}]}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"hover"'},{value:'"disabled"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var Button_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Button_stories={title:"Button",component:Button,argTypes:{type:{type:"string",description:"Set visual type of a button",defaultValue:"solid",options:["solid","outline","soft","ghost"],control:{type:"radio"}},size:{type:"string",description:"Set size of a button",defaultValue:"medium",options:["small","medium","large"],control:{type:"radio"}},style:{type:"string",description:"Set visual style of a button",defaultValue:"primary",options:["primary","secondary","danger"],control:{type:"radio"}},iconType:{type:"string",description:"Affects button paddings",defaultValue:"none",options:["none","leading","trailing","leadingTrailing","standalone"],control:{type:"radio"}},state:{type:"string",description:"Set current state of a button",defaultValue:"solid",options:["default","hover","disabled"],control:{type:"radio"}}}};var Template=function Template(arg){return Button_stories_jsx(Button,arg)};Template.displayName="Template";var Default=Template.bind({});Default.args={type:"solid",size:"medium",style:"primary",iconType:"none",state:"default"};var Large=Template.bind({});Large.args={type:"solid",size:"large",style:"danger",iconType:"none",state:"default"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"arg => <Button {...arg} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Large.parameters=_objectSpread(_objectSpread({},Large.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs),{},{source:_objectSpread({originalSource:"arg => <Button {...arg} />"},null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2=_Large$parameters2.docs)||void 0===_Large$parameters2?void 0:_Large$parameters2.source)})})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/Button/button.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button {\n    /*text*/\n    font-feature-settings: 'clig' off, 'liga' off;\n    font-family: Source Sans 3;\n    font-size: 14px;\n    font-style: bold;\n    font-weight: 500;\n    line-height: 143%; /* 20.02px */\n    letter-spacing: 0.28px;\n\n    \n    border: 0;\n    cursor: pointer;\n    position: relative;\n\n    \n    overflow: hidden;\n    box-sizing: border-box;\n    max-width: 100%;\n  }\n /*style*/\n .button-style-primary {\n  --solid-bg: #24A3FF;\n  --solid-bg-hover: #1C8CF2;\n  --solid-txt: white;\n  \n  --outline-bg: white;\n  --outline-bg-hover: #369FFF38;\n  --outline-txt: #24A3FF;\n\n  --soft-bg: #369FFF1F;\n  --soft-bg-hover: #369FFF38;\n  --soft-txt:#24A3FF;\n\n  --ghost-bg: white;\n  --ghost-bg-hover: #369FFF38;\n  --ghost-txt: #24A3FF;\n\n}\n.button-style-secondary {\n  --solid-bg: #EBEBEC;\n  --solid-bg-hover: #E7E7E9;\n  --solid-txt: #1A1B1C;\n\n  --outline-bg: white;\n  --outline-bg-hover: #E7E7E9;\n  --outline-txt: #1A1B1C;\n\n  --soft-bg: #EBEBEC78;\n  --soft-bg-hover: #EBEBECB2;\n  --soft-txt:#1A1B1C;\n\n  --ghost-bg: white;\n  --ghost-bg-hover: #EBEBEC78;\n  --ghost-txt: #1A1B1C;\n\n}\n.button-style-danger {\n  --solid-bg: #E32121;\n  --solid-bg-hover: #D43A3A;\n  --solid-txt: white;\n\n  --outline-bg: white;\n  --outline-bg-hover: #E3212124;\n  --outline-txt:#E32121;\n\n  --soft-bg: #E321211A;\n  --soft-bg-hover: #E3212124;\n  --soft-txt:#E32121;\n\n  --ghost-bg: white;\n  --ghost-bg-hover: #E3212124;\n  --ghost-txt: #E32121;\n}\n\n /*type*/\n .button-type-solid{\n  background-color: var(--solid-bg);\n  color: var(--solid-txt);\n  --hover-bg: var(--solid-bg-hover);\n}\n.button-type-outline{    \n  background-color: var(--outline-bg);\n  color: var(--outline-txt);\n  --hover-bg: var(--outline-bg-hover);\n\n  border-radius: var( 8px);\n  border: 1px solid var(--outline-txt);\n  \n\n  --disabled-border: #94979A;\n}\n.button-type-soft{\n  background-color: var(--soft-bg);\n  color: var(--soft-txt);\n  --hover-bg: var(--soft-bg-hover);\n\n}\n.button-type-ghost{\n  background-color: var(--ghost-bg);\n  color: var(--ghost-txt);\n  --hover-bg: var(--ghost-bg-hover);\n  \n}\n\n/*icon type*/\n.button-iconType-none{\n  \n}\n.button-iconType-leading{\ngap:  6px;\n}\n\n.button-iconType-trailing{\ngap:  6px;\n \n}\n.button-iconType-leadingTrailing{\ngap: 6px;\n \n}\n.button-iconType-standalone{\n  \n\nalign-items: center;\ngap:  6px;\n \n}\n \n\n  /*size*/\n.button-size-small {\n    display: inline-flex;\n    padding: 5px;\n    align-items: center;\n    border-radius: 8px; \n  }\n.button-size-medium {\n  \n    display: inline-flex;\n    align-items: center;\n    border-radius: 8px; \n    padding: 8px;\n  }\n.button-size-large {\n  \n    display: inline-flex;\n    align-items: center;\n    border-radius: 8px; \n    padding: 12px;\n  }\n \n\n\n/*state*/ \n.button-state-default {\n \n}\n.button-state-hover{\n  \n  background-color: var(--hover-bg);\n}\n.button-state-disabled {\n  \n  color: #787878;\n  background-color: #EBEBEC;\n  border-color: var(--disabled-border);\n}\n\n\n\n ","",{version:3,sources:["webpack://./src/Button/button.css"],names:[],mappings:"AAAA;IACI,OAAO;IACP,6CAA6C;IAC7C,0BAA0B;IAC1B,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB,EAAE,YAAY;IAC/B,sBAAsB;;;IAGtB,SAAS;IACT,eAAe;IACf,kBAAkB;;;IAGlB,gBAAgB;IAChB,sBAAsB;IACtB,eAAe;EACjB;CACD,QAAQ;CACR;EACC,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;;EAElB,mBAAmB;EACnB,6BAA6B;EAC7B,sBAAsB;;EAEtB,oBAAoB;EACpB,0BAA0B;EAC1B,kBAAkB;;EAElB,iBAAiB;EACjB,2BAA2B;EAC3B,oBAAoB;;AAEtB;AACA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,oBAAoB;;EAEpB,mBAAmB;EACnB,2BAA2B;EAC3B,sBAAsB;;EAEtB,oBAAoB;EACpB,0BAA0B;EAC1B,kBAAkB;;EAElB,iBAAiB;EACjB,2BAA2B;EAC3B,oBAAoB;;AAEtB;AACA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;;EAElB,mBAAmB;EACnB,6BAA6B;EAC7B,qBAAqB;;EAErB,oBAAoB;EACpB,0BAA0B;EAC1B,kBAAkB;;EAElB,iBAAiB;EACjB,2BAA2B;EAC3B,oBAAoB;AACtB;;CAEC,OAAO;CACP;EACC,iCAAiC;EACjC,uBAAuB;EACvB,iCAAiC;AACnC;AACA;EACE,mCAAmC;EACnC,yBAAyB;EACzB,mCAAmC;;EAEnC,wBAAwB;EACxB,oCAAoC;;;EAGpC,0BAA0B;AAC5B;AACA;EACE,gCAAgC;EAChC,sBAAsB;EACtB,gCAAgC;;AAElC;AACA;EACE,iCAAiC;EACjC,uBAAuB;EACvB,iCAAiC;;AAEnC;;AAEA,YAAY;AACZ;;AAEA;AACA;AACA,SAAS;AACT;;AAEA;AACA,SAAS;;AAET;AACA;AACA,QAAQ;;AAER;AACA;;;AAGA,mBAAmB;AACnB,SAAS;;AAET;;;EAGE,OAAO;AACT;IACI,oBAAoB;IACpB,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;EACpB;AACF;;IAEI,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;EACd;AACF;;IAEI,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;EACf;;;;AAIF,QAAQ;AACR;;AAEA;AACA;;EAEE,iCAAiC;AACnC;AACA;;EAEE,cAAc;EACd,yBAAyB;EACzB,oCAAoC;AACtC",sourcesContent:[".button {\r\n    /*text*/\r\n    font-feature-settings: 'clig' off, 'liga' off;\r\n    font-family: Source Sans 3;\r\n    font-size: 14px;\r\n    font-style: bold;\r\n    font-weight: 500;\r\n    line-height: 143%; /* 20.02px */\r\n    letter-spacing: 0.28px;\r\n\r\n    \r\n    border: 0;\r\n    cursor: pointer;\r\n    position: relative;\r\n\r\n    \r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    max-width: 100%;\r\n  }\r\n /*style*/\r\n .button-style-primary {\r\n  --solid-bg: #24A3FF;\r\n  --solid-bg-hover: #1C8CF2;\r\n  --solid-txt: white;\r\n  \r\n  --outline-bg: white;\r\n  --outline-bg-hover: #369FFF38;\r\n  --outline-txt: #24A3FF;\r\n\r\n  --soft-bg: #369FFF1F;\r\n  --soft-bg-hover: #369FFF38;\r\n  --soft-txt:#24A3FF;\r\n\r\n  --ghost-bg: white;\r\n  --ghost-bg-hover: #369FFF38;\r\n  --ghost-txt: #24A3FF;\r\n\r\n}\r\n.button-style-secondary {\r\n  --solid-bg: #EBEBEC;\r\n  --solid-bg-hover: #E7E7E9;\r\n  --solid-txt: #1A1B1C;\r\n\r\n  --outline-bg: white;\r\n  --outline-bg-hover: #E7E7E9;\r\n  --outline-txt: #1A1B1C;\r\n\r\n  --soft-bg: #EBEBEC78;\r\n  --soft-bg-hover: #EBEBECB2;\r\n  --soft-txt:#1A1B1C;\r\n\r\n  --ghost-bg: white;\r\n  --ghost-bg-hover: #EBEBEC78;\r\n  --ghost-txt: #1A1B1C;\r\n\r\n}\r\n.button-style-danger {\r\n  --solid-bg: #E32121;\r\n  --solid-bg-hover: #D43A3A;\r\n  --solid-txt: white;\r\n\r\n  --outline-bg: white;\r\n  --outline-bg-hover: #E3212124;\r\n  --outline-txt:#E32121;\r\n\r\n  --soft-bg: #E321211A;\r\n  --soft-bg-hover: #E3212124;\r\n  --soft-txt:#E32121;\r\n\r\n  --ghost-bg: white;\r\n  --ghost-bg-hover: #E3212124;\r\n  --ghost-txt: #E32121;\r\n}\r\n\r\n /*type*/\r\n .button-type-solid{\r\n  background-color: var(--solid-bg);\r\n  color: var(--solid-txt);\r\n  --hover-bg: var(--solid-bg-hover);\r\n}\r\n.button-type-outline{    \r\n  background-color: var(--outline-bg);\r\n  color: var(--outline-txt);\r\n  --hover-bg: var(--outline-bg-hover);\r\n\r\n  border-radius: var( 8px);\r\n  border: 1px solid var(--outline-txt);\r\n  \r\n\r\n  --disabled-border: #94979A;\r\n}\r\n.button-type-soft{\r\n  background-color: var(--soft-bg);\r\n  color: var(--soft-txt);\r\n  --hover-bg: var(--soft-bg-hover);\r\n\r\n}\r\n.button-type-ghost{\r\n  background-color: var(--ghost-bg);\r\n  color: var(--ghost-txt);\r\n  --hover-bg: var(--ghost-bg-hover);\r\n  \r\n}\r\n\r\n/*icon type*/\r\n.button-iconType-none{\r\n  \r\n}\r\n.button-iconType-leading{\r\ngap:  6px;\r\n}\r\n\r\n.button-iconType-trailing{\r\ngap:  6px;\r\n \r\n}\r\n.button-iconType-leadingTrailing{\r\ngap: 6px;\r\n \r\n}\r\n.button-iconType-standalone{\r\n  \r\n\r\nalign-items: center;\r\ngap:  6px;\r\n \r\n}\r\n \r\n\r\n  /*size*/\r\n.button-size-small {\r\n    display: inline-flex;\r\n    padding: 5px;\r\n    align-items: center;\r\n    border-radius: 8px; \r\n  }\r\n.button-size-medium {\r\n  \r\n    display: inline-flex;\r\n    align-items: center;\r\n    border-radius: 8px; \r\n    padding: 8px;\r\n  }\r\n.button-size-large {\r\n  \r\n    display: inline-flex;\r\n    align-items: center;\r\n    border-radius: 8px; \r\n    padding: 12px;\r\n  }\r\n \r\n\r\n\r\n/*state*/ \r\n.button-state-default {\r\n \r\n}\r\n.button-state-hover{\r\n  \r\n  background-color: var(--hover-bg);\r\n}\r\n.button-state-disabled {\r\n  \r\n  color: #787878;\r\n  background-color: #EBEBEC;\r\n  border-color: var(--disabled-border);\r\n}\r\n\r\n\r\n\r\n "],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);