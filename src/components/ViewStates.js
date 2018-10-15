import React from 'react';

const Loading = ({ type }) => {
  const _type = type ? ' ' + type  : '';
  return <div>{`Loading${_type}...`}</div>
};

const Empty = ({ type }) => {
  const _type = type || 'data';
  return <div>{`No ${_type} at this time`}</div>;
};

const Errors = ({ err }) => {
  const { name, message } = Object.assign({}, {
    name: 'Oh no',
    message: 'Something bad happened',
  }, err);
  return (
    <div>
      <h1>{name}</h1>
      <p>{message}</p>
    </div>
  );
};

export {
  Loading,
  Empty,
  Errors,
}