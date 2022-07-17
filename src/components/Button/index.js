import React from 'react'

const Button = ({onClick,btnName,children,btnStyle}) => {
  return (
    <button  className={`${btnStyle}`} onClick={() => onClick()}>
      {btnName?.toUpperCase()}
      {children}
    </button>
  );
}

export default Button