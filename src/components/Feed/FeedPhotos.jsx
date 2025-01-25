import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Erro from '../Helper/Erro';
import Loading from '../Helper/Loading';
import estilos from './FeedPhotos.module.css';
import useMedia from '../../Hooks/useMedia';

const FeedPhotos = ({ user, page, setPhotoModal, setInfinite }) => {
  const { data, loading, erro, request } = useFetch();
  const [layout, setLayout] = React.useState(null);
  const media = useMedia('(max-width: 40rem)');

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page]);

  React.useEffect(() => {
    if (!media) {
      const numeroLayot = Math.floor(Math.random() * 5) + 1;
      setLayout(numeroLayot);
    } else {
      setLayout(null);
    }
  }, [media]);

  if (erro) return <Erro erro={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${estilos.feed} animeLeft`}>
        {data.map((photo) => (
          <li
            className={`${estilos.itemPhoto} ${
              layout !== null ? estilos[`m${layout}`] : ''
            }`}
            key={photo.id}
            onClick={() => setPhotoModal(photo)}
          >
            <FeedPhotosItem photo={photo} />
          </li>
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
