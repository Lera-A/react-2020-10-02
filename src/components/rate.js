import React from 'react';

export default function Rate(props) {
  return (
    <div>
      <p>
        {props.isAverage ? 'Средний рейтинг' : 'Рейтинг'}-{props.rate}
      </p>
    </div>
  );
}
