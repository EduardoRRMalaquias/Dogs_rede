import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Head from '../Helper/Head';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, erro, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, []);

  if (erro) return <Error erro={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} description="Faça login na rede social Dogs" />

        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
