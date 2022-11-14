import React from 'react';

function Button(props) {
  // Destructure props
  const { buttonText, buttonLink } = props;

  return (
    <div class="btn-border">
      <a className="btn" href={buttonLink}>
        {buttonText}
      </a>
    </div>
  );
}

export default Button;
