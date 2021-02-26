import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'react-panel';

export default class ReactPanel extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The header component.
     */
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
