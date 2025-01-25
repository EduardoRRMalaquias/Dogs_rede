import React from 'react';
import estilos from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoading({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <figure className={estilos.wrapper}>
      {skeleton && <div className={estilos.skeleton}></div>}
      <img
        onLoad={handleLoading}
        className={estilos.img}
        alt={alt}
        {...props}
      />
    </figure>
  );
};

export default Image;
