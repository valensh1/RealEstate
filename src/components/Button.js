import React from 'react';

function Button(props) {
  // Destructure props
  const { buttonText, buttonLink } = props;

  return (
    <a className="btn" href={buttonLink}>
      {buttonText}
    </a>
  );
}

export default Button;
