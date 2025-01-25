import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api';
import Erro from '../Helper/Erro';
import Loading from '../Helper/Loading';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, erro, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem('token');
      const { url, options } = STATS_GET(token);
      const { response, json } = await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (erro) return <Erro erro={erro} />;
  if (data)
    return (
      <React.Suspense fallback={<Loading /> }>
        <Head
          title="Estatisticas"
          description="Confira aqui as estatisticas de postagens do seu perfil"
        />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
