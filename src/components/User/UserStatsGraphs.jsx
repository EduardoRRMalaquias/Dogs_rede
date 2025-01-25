import React from 'react';
import estilos from './UserStateGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (data.length) {
      const graphData = [];

      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b),
      );
      setGraph(graphData);
    }
  }, [data]);

  return (
    <section className={`animeLeft ${estilos.graph}`}>
      <div className={`${estilos.total} ${estilos.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={estilos.graphItem}>
        <VictoryPie
          data={[
            {
              x: 'Teste',
              y: '4',
            },
            {
              x: 'Carla',
              y: '3',
            },
            {
              x: 'Ellie',
              y: '5',
            },
            {
              x: 'Rayssa',
              y: '5',
            },
          ]}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={estilos.graphItem}>
        <VictoryChart>
          <VictoryBar
            alignment="start"
            data={[
              {
                x: 'Teste',
                y: '4',
              },
              {
                x: 'Carla',
                y: '3',
              },
              {
                x: 'Ellie',
                y: '5',
              },
              {
                x: 'Rayssa',
                y: '5',
              },
            ]}
          ></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
