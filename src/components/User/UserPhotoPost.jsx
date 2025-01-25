import React from 'react';
import estilos from './UserPhotoPost.module.css';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';
import Erro from '../Helper/Erro';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('numero');
  const idade = useForm('numero');
  const [img, setImg] = React.useState({});
  const { data, erro, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem('token');

    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${estilos.photoPost} animeLeft`}>
      <Head
        title="Poste sua foto"
        destiption="Adicione aqui uma foto que aparecera para todos no seu perfil"
      />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <label
          className={`${estilos.file} ${img.raw && estilos.cheio}`}
          htmlFor="img"
        >
          Escolher arquivo
          <input type="file" name="img" id="img" onChange={handleImgChange} />
        </label>
        {loading ? (
          <Button disabled>Postando...</Button>
        ) : (
          <Button>Postar</Button>
        )}
        <Erro erro={erro} />
      </form>
      <div>
        {img.preview && (
          <figure
            className={estilos.preview}
            style={{ background: `url('${img.preview}')` }}
          ></figure>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
