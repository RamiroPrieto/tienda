import React, { useEffect, useState } from 'react';



function ItemCount({max = 20, min = 1, counter, setCounter} ) {

  
  function increment (){
      counter < max && setCounter(counter + 1)
  }
  function decrement (){
      counter > min && setCounter(counter - 1)
  }

  return (
    <div className='counterContainer' >
        <button className='' onClick={decrement}> - </button>
        <div className='contador'> {counter} </div>
        <button className='' onClick={increment}> + </button>

    </div>
  );
}

export default ItemCount;