import React from 'react';
import PropTypes from 'prop-types'

const styles = {
  form:
    {
      marginTop: '2rem',
    },
  text:
    {
      color: '#000000',
      marginTop: '2rem'
    },
  input:
    {
      color: '#000000',
      width: '200px',
      marginTop: '0.5rem'
    },
  fieldset:
    {
      color: '#505050',
      background: '#fdfdfd',
      padding: '20px',
      borderColor: '#505050',
      borderWidth: '4px',
      borderRadius: '15px',
      boxShadow: '0 0 0 4px #DDDDDD',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '10em'
    }
}


export default function FormLogin() {
  return (

    <form style={styles.form} method="post">
      <fieldset style={styles.fieldset}>
        <legend>Authorization</legend>
        <label style={styles.text}> E-mail: <input style={styles.input} type="text" name="mail"/> </label> <br/>
        <label style={styles.text}> Password: <input style={styles.input} type="text" name="password"/> </label>
        <br/>
        <input style={styles.text} type="submit" value="Log In"/>
        <label style={styles.text}> Sign In </label>
      </fieldset>
    </form>


  );
};



