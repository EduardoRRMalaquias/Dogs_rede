import React from 'react';
import estilos from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar essa foto');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={estilos.delete}>
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className={estilos.delete}>
          Delete
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
