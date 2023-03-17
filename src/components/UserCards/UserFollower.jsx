import React, { Component } from 'react';
import css from './UserFollower.module.css';

export class UserFollower extends Component {
  state = {
    numbers: '',
  };

  render() {
    return (
      <form className={css.form}>
        <img src="/src/img/Logo.png" className={css.logo} alt="no logo" />
        <div className={css.line}> </div>{' '}
        <div className={css.circle}>
          {' '}
          <div className={css.ellipce}></div>
          <div className={css.avatarBackground}></div>
          <div className={css.avatar}></div>
        </div>
        <div className={css.pictures}></div>
        <h2 className={css.text}> 777 tweets</h2>
        <h2 className={css.text2}>100,500 Followers</h2>
        <button type="button" className={css.button}>
          <h3 className={css.buttonText}>Follow</h3>
        </button>
      </form>
    );
  }
}
