import React, { Component } from 'react';

import '../../globals.css';

export interface ButtonProps {
    className: string;
    children: React.ReactNode;
}

export default class Button extends Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    render () {
        return (
            <button className={['ss-btn', this.props.className].join(' ')}>
                { this.props.children }
            </button>
        )
    }
}