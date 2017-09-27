import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Progress extends Component {
  static propTypes = {
    completed: ((props, propName) => {
      if (typeof props[propName] !== 'number') {
        return Progress.throwError('Invalid Props:');
      }
    }),
    color: PropTypes.string,
    animation: PropTypes.number,
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }

  static defaultProps = {
    completed: 0,
    color: '#AC4A83',
    animation: 500,
    height: 20,
  }

  static throwError() {
    return new Error(...arguments);
  }

  render() {
    const { color, completed, animation, height, className, children, ...rest } = this.props;
    const style = {
      backgroundColor: color,
      width: completed + '%',
      transition: `width ${animation}ms`,
      height: height,
    };

    return (
      <div className={className || 'progressbar-container'} {...rest}>
        <div className="progressbar-progress" style={style}>{children}</div>
      </div>
    );
  }
}
