import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Icon extends Component {
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
        children: PropTypes.node
    };

    static defaultProps = {
        faStyle: 'circle',
        className: undefined,
        size: undefined,
        fixed: false,
        list: false,
        border: false,
        pullLeft: false,
        pullRight: false,
        animate: undefined,
        rotate: undefined,
        flipHorizontal: PropTypes.bool,
        flipVertical: PropTypes.bool,
        children: PropTypes.node
    };

    render() {

        let props = this.props;
        let cls = {};
        cls['fa'] = true;
        cls['fa-' + props.faStyle] = true;
        cls['fa-fw'] = props.fixed;
        cls[`fa-${props.size}-g`] = props.size !== undefined;
        cls['fa-li'] = props.list;
        cls['fa-border'] = props.border;
        cls['fa-pull-left'] = props.pullLeft;
        cls['fa-pull-right'] = props.pullRight;
        cls[`fa-${props.animate}`] = props.animate !== undefined;
        cls[`fa-rotate-${props.rotate}`] = props.rotate !== undefined;
        cls['fa-flip-horizontal'] = props.flipHorizontal;
        cls['fa-lip-vertical'] = props.flipVertical;

        if (props.children) {
            return (<span className={classNames('fa-stack', cls, props.className)}>{props.children}</span>);
        } else {
            return (<i {...props} className={classNames(cls, props.className)}/>);
        }
    }
}

export default Icon;
