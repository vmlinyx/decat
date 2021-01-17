import { useEffect, useState } from 'react';

import styles from './Card.module.css';
const Card = () => {
  // const [position, setPosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // const setInitialPosition = () => {
  //   const card = ReactDOM.findDOMNode(this);
  //   setPosition({
  //     x: Math.round((container.x - card.offsetWidth) / 2),
  //     y: Math.round((container.y - card.offsetHeight) / 2),
  //   });
  // }
  // useEffect(() => {
  //   setInitialPosition();
  //   return;
  // })
  return <div className={styles.Card}></div>;
};

export default Card;
