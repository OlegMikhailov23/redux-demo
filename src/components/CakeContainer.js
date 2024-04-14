import React, { useState } from 'react';
import { buyCake } from '../redux';
import { connect } from "react-redux";

export const CakeContainer = (props) => {
  const [num, setNum] = useState(1);
  return (
    <div>
      <h2>Number of cakes {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
      <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => props.buyCake(num)}>Byu {num} cakes</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
