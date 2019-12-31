import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-panel';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    header: PropTypes.element
  };

  static defaultProps = {};

  render() {
    const { className, header, children, ...props } = this.props;
    return (
      <section
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <header className={`${CLASS_NAME}__header`}>{header}</header>
        <div className={`${CLASS_NAME}__body`}>{children}</div>
      </section>
    );
  }
}
