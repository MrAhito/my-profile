import React, { Component } from 'react'
import { TypeAnimation } from 'react-type-animation';

class TextAnim extends Component {
    render() {
        return (
            <TypeAnimation
                sequence={this.props.text}
                wrapper="p"
                cursor={true}
                repeat={Infinity}
                style={this.props.styles}
            />
        );
    }
}

export default TextAnim