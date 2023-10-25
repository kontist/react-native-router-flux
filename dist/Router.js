Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _deprecatedReactNativePropTypes=require("deprecated-react-native-prop-types");var _propTypes=_interopRequireDefault(require("prop-types"));var _Store=_interopRequireDefault(require("./Store"));var _defaultStore=_interopRequireDefault(require("./defaultStore"));var _pathParser=_interopRequireDefault(require("./pathParser"));var _jsxFileName="/Users/ugurgumushan/Code/kontist/react-native-router-flux/src/Router.js";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(Object(source));if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){if(!((typeof Symbol==="function"?Symbol.iterator:"@@iterator")in Object(arr)||Object.prototype.toString.call(arr)==="[object Arguments]")){return;}var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var App=function(_React$Component){function App(){var _getPrototypeOf2;var _temp,_this;_classCallCheck(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _possibleConstructorReturn(_this,(_temp=_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(App)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.onBackPress=function(){return _this.props.navigationStore.pop();},_this.handleDeepURL=function(e){return _this.parseDeepURL(e.url);},_this.parseDeepURL=function(url){if(!url){return;}var cleanUrl=_this.props.uriPrefix?url.split(_this.props.uriPrefix)[1]:url;if(!cleanUrl){return;}var allPaths=Object.values(_this.props.navigationStore.states).map(function(obj){return obj.path;}).filter(function(path){return path;});var parsedPath=(0,_pathParser.default)(cleanUrl,allPaths);if(!parsedPath){return;}var path=parsedPath.path,params=parsedPath.params;var actionKey=Object.entries(_this.props.navigationStore.states).filter(function(_ref){var _ref2=_slicedToArray(_ref,2),value=_ref2[1];return value.path===path;}).map(function(_ref3){var _ref4=_slicedToArray(_ref3,1),key=_ref4[0];return key;}).find(function(key){return key;});if(_this.props.onDeepLink){_this.props.onDeepLink({url:url,action:actionKey,params:params});}else if(actionKey&&_this.props.navigationStore[actionKey]){_this.props.navigationStore[actionKey](params);}},_temp));}_createClass(App,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;_reactNative.BackHandler.addEventListener('hardwareBackPress',this.props.backAndroidHandler||this.onBackPress);_reactNative.Linking.getInitialURL().then(function(url){return _this2.parseDeepURL(url);});_reactNative.Linking.addEventListener('url',this.handleDeepURL);}},{key:"componentWillUnmount",value:function componentWillUnmount(){_reactNative.BackHandler.removeEventListener('hardwareBackPress',this.props.backAndroidHandler||this.onBackPress);_reactNative.Linking.removeEventListener('url',this.handleDeepURL);}},{key:"render",value:function render(){var _this$props=this.props,dispatch=_this$props.dispatch,state=_this$props.state,AppNavigator=_this$props.navigator,navigationStore=_this$props.navigationStore;if(dispatch&&state){navigationStore.externalDispatch=dispatch;navigationStore.externalState=state;return _react.default.createElement(AppNavigator,{dispatch:navigationStore.dispatch,state:navigationStore.state,ref:function ref(navigatorRef){navigationStore.setTopLevelNavigator(navigatorRef);},__source:{fileName:_jsxFileName,lineNumber:92}});}return _react.default.createElement(AppNavigator,{onNavigationStateChange:navigationStore.onNavigationStateChange,ref:function ref(navigatorRef){navigationStore.setTopLevelNavigator(navigatorRef);},__source:{fileName:_jsxFileName,lineNumber:102}});}}]);_inherits(App,_React$Component);return App;}(_react.default.Component);App.propTypes={navigator:_propTypes.default.func,backAndroidHandler:_propTypes.default.func,uriPrefix:_propTypes.default.string,onDeepLink:_propTypes.default.func,navigationStore:_propTypes.default.instanceOf(_Store.default).isRequired};App.defaultProps={navigator:null,backAndroidHandler:null,uriPrefix:null,onDeepLink:null};var Router=function Router(_ref5){var createReducer=_ref5.createReducer,sceneStyle=_ref5.sceneStyle,onStateChange=_ref5.onStateChange,scenes=_ref5.scenes,uriPrefix=_ref5.uriPrefix,navigator=_ref5.navigator,getSceneStyle=_ref5.getSceneStyle,children=_ref5.children,onDeepLink=_ref5.onDeepLink,wrapBy=_ref5.wrapBy,store=_ref5.navigationStore,props=_objectWithoutProperties(_ref5,["createReducer","sceneStyle","onStateChange","scenes","uriPrefix","navigator","getSceneStyle","children","onDeepLink","wrapBy","navigationStore"]);var data=_objectSpread({},props);if(getSceneStyle){data.cardStyle=getSceneStyle(props);}if(sceneStyle){data.cardStyle=sceneStyle;}var navigationStore=store||_defaultStore.default;var AppNavigator=scenes||navigator||navigationStore.create(children,data,wrapBy);navigationStore.reducer=createReducer&&createReducer(props);if(onStateChange){navigationStore.onStateChange=onStateChange;}return _react.default.createElement(App,_extends({},props,{onDeepLink:onDeepLink,navigator:AppNavigator,uriPrefix:uriPrefix,navigationStore:navigationStore,__source:{fileName:_jsxFileName,lineNumber:128}}));};Router.propTypes={onStateChange:_propTypes.default.func,scenes:_propTypes.default.func,navigator:_propTypes.default.func,wrapBy:_propTypes.default.func,getSceneStyle:_propTypes.default.func,sceneStyle:_deprecatedReactNativePropTypes.ViewPropTypes.style,createReducer:_propTypes.default.func,children:_propTypes.default.element,uriPrefix:_propTypes.default.string,onDeepLink:_propTypes.default.func,navigationStore:_propTypes.default.instanceOf(_Store.default)};Router.defaultProps={onStateChange:null,scenes:null,navigator:null,wrapBy:function wrapBy(props){return props;},getSceneStyle:null,sceneStyle:null,children:null,uriPrefix:null,onDeepLink:null,navigationStore:null};var _default=Router;exports.default=_default;