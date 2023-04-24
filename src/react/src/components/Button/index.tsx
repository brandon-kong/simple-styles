import React, { Component } from 'react';

export interface ButtonProps {
  label: string;
  className: string;
}

export default class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    render () {
        return (
            <button className={"" + this.props.className}>
                {this.props.label}
            </button>
        )
    }
}