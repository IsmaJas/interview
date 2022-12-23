import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Card from '../Card';
import './index.css';
import { CardContext } from '../../Contexts/CardContext';

const CardList = () => {
  const { setLists, setShow, show, lists } = useContext(CardContext);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await axios.get(
        'https://s3.amazonaws.com/br-codingexams/restaurants.json'
      );
      console.log(res.data.restaurants);
      setLists(res.data.restaurants);
      setShow(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={() => setShow(!show)}>{!show ? 'Open' : 'Close'}</button>
      {show && (
        <ul>
          {lists.map((list, index) => (
            <Card list={list} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CardList;

{
  /* <div>
      <button onClick={() => setShow(!show)}>{show ? 'Close' : 'Open'}</button>
      {show && (
        <ul>
          {lists.map((list, index) => (
            <Card list={list} key={index} />
          ))}
        </ul>
      )}
    </div> */
}

{
  /* <button onClick={() => setShow(true)}>Open</button>
<button onClick={() => setShow(false)}>Close</button>
{show && (
  <ul>
    {lists.map((list, index) => (
      <Card list={list} key={index} />
    ))}
  </ul> */
}

// const getList = () => {
//   axios
//     .get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
//     .then((res) => {
//       console.log(res.data.restaurants);
//       setList(res.data.restaurants);
//       setShow(true);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// axios.get.then har biriga catch yozish kere
// };
