import React from 'react';
import { connect } from "react-redux";
import { buyCookie } from '../redux/cookies/cookiesActions';

export function CookieContainer(props) {
    return (
    <div>
      <h2>Number of cookies {props.numOfcookies}</h2>
      <button onClick={props.buyCookie}>Buy cake</button>
    </div>
  )
}

const mapStateToProps = state=> {
  return {
    numOfcookies: state.cookie.numOfCookies,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCookie: () => dispatch(buyCookie()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookieContainer);
