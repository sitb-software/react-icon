import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class ReactIcon extends Component {
    static propTypes = {
        faStyle: PropTypes.string,
        className: PropTypes.string,
        size: PropTypes.oneOf([1, 2, 3, 4, 5, '1', '2', '3', '4', '5']),
        fixed: PropTypes.bool,
        list: PropTypes.bool,
        border: PropTypes.bool,
        pullLeft: PropTypes.bool,
        pullRight: PropTypes.bool,
        animate: PropTypes.oneOf(['spin', 'pulse']),
        rotate: PropTypes.number,
        flipHorizontal: PropTypes.bool,
        flipVertical: PropTypes.bool,
        inverse: PropTypes.bool,
        stack: PropTypes.oneOf([1, 2, '1', '2']),
        children: PropTypes.node
    };

    static defaultProps = {
        faStyle: undefined,
        className: undefined,
        size: undefined,
        fixed: false,
        list: false,
        border: false,
        pullLeft: false,
        pullRight: false,
        animate: undefined,
        rotate: undefined,
        flipHorizontal: false,
        flipVertical: false,
        inverse: false,
        stack: undefined,
        children: undefined
    };

    render() {

        let props = this.props;
        let cls = {};
        cls['fa'] = true;
        cls['fa-' + props.faStyle] = props.faStyle !== undefined;
        cls['fa-fw'] = props.fixed;
        cls['fa-li'] = props.list;
        cls['fa-border'] = props.border;
        cls['fa-pull-left'] = props.pullLeft;
        cls['fa-pull-right'] = props.pullRight;
        cls[`fa-${props.animate}`] = props.animate !== undefined;
        cls[`fa-rotate-${props.rotate}`] = props.rotate !== undefined;
        cls['fa-flip-horizontal'] = props.flipHorizontal;
        cls['fa-lip-vertical'] = props.flipVertical;
        cls['fa-inverse'] = props.inverse;
        cls[`fa-stack-${props.stack}x`] = props.stack !== undefined;

        if (props.size !== undefined) {
            if (props.size === 1 || props.size === '1') {
                cls['fa-lg'] = true;
            } else {
                cls[`fa-${props.size}x`] = true;
            }
        }

        if (props.children) {
            return (<span className={classNames('fa-stack', cls, props.className)}>{props.children}</span>);
        } else {
            return (<i {...props} className={classNames(cls, props.className)}/>);
        }
    }
}

export default ReactIcon;
