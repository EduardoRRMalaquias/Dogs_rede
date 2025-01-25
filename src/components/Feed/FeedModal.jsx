import React from 'react';
import estilos from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Erro from '../Helper/Erro';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setPhotoModal }) => {
  const { data, erro, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setPhotoModal(null);
  }

  return (
    <article className={estilos.modal} onClick={handleOutsideClick}>
      {erro && <Erro erro={erro} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </article>
  );
};

export default FeedModal;
