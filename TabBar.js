'use strict';

var React = require('react-native');
var {View, Text, StyleSheet} = React;
var Button = require('react-native-button');
import Actions from './actions';
var Tabs = require('react-native-tabs');

export default class TabBar extends React.Component {
    onSelect(el){
        if (!Actions[el.props.name]){
            throw new Error("No action is defined for name="+el.props.name);
        }
        Actions[el.props.name](el.props);
        return {selected: true};
    }
    render(){
        var children = [];
        React.Children.forEach(this.props.children, function(el){
            if (!el.props.name)
                console.error("No name is defined for element");
            var Icon = el.props.icon || console.error("No icon class is defined for "+el.name);
            children.push(<Icon key={el.props.name} {...el.props}/>);
        });

        return (
            <Tabs style={{backgroundColor:'white'}} onSelect={this.onSelect.bind(this)} {...this.props}>
                {children}
            </Tabs>
        );
    }
}
