import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

export const HookIceCreamContainer = () => {
  const numOfIce = useSelector(state => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Cream Hook - {numOfIce}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy cake</button>
    </div>
  )
}
