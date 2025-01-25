import React from 'react';
import estilos from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';

const FeedPhotosItem = ({ photo }) => {
  return (
    <figure className={estilos.photo}>
      <Image src={photo.src} alt={photo.title} title={photo.title} />
      <span className={estilos.visualizacao}>{photo.acessos}</span>
    </figure>
  );
};

export default FeedPhotosItem;
