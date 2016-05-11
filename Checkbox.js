import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'underscore';

var BACKGROUND_COLOR, BORDER_RADIUS, BORDER_WIDTH, COLOR, MARGIN, PADDING, SIZE;

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: '#FFF',
            borderRadius: 0,
            borderWidth: 2,
            checked: false,
            color: '#000',
            margin: 2,
            padding: 0,
            name: '',
            onChange: null,
            size: 20
        };
    }

    componentDidMount() {
        this.setState(_.extend(this.props.style, _.omit(this.props, 'style')))
    }

    render() {
        BACKGROUND_COLOR = this.state.backgroundColor;
        BORDER_RADIUS = this.state.borderRadius;
        BORDER_WIDTH = this.state.borderWidth;
        MARGIN = this.state.margin;
        PADDING = this.state.padding;
        COLOR = this.state.color;
        SIZE = this.state.size;

        return (
            <TouchableHighlight underlayColor='transparent'
                onPress={() => { this._toggleCheck() }}
                style={{backgroundColor: BACKGROUND_COLOR, borderColor: COLOR,
                        borderRadius: BORDER_RADIUS, borderWidth: BORDER_WIDTH,
                        height: SIZE, margin: MARGIN, padding: PADDING, width: SIZE }}>
                <View>
                    { this.state.checked &&
                    <Icon name='check' size={SIZE - 5 } color={COLOR}/> }
                </View>
            </TouchableHighlight>
        );
    }

    _toggleCheck() {
        var checked = !this.state.checked;
        this.setState({ checked: checked });
        this.props.onChange && this.props.onChange(this.props.name, checked);
    }
}

module.exports = Checkbox;
