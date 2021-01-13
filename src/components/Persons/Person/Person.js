import classes from './Person.module.css';

const person = (props) => {
  const style = {
    '@media {min-width: 500px}': {
      width: '450px',
    },
  };

  return (
    <div className={classes.Person} style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;