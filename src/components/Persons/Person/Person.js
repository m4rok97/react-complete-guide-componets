import classes from './Person.module.css';
import React, { Component, Fragment } from 'react';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../contexts/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log('Is authenticated ', this.contextType);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
        {this.context.isAuthenticated ? (
          <p> Authenticated </p>
        ) : (
          <p> Please Login </p>
        )}

        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          ref={this.inputElementRef}
          onChange={this.props.changed}
        />
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
