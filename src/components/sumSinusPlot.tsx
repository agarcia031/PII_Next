import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });
const listOsc = [2, 3, 0.5];

const SumSinusPlot = () => {
  // Générer l'axe X
  const xValues = Array.from({ length: 100 }, (_, i) => i * 0.1);

  // Calculer la somme des sinusoïdes
  const yValues = xValues.map(x => 
    listOsc.reduce((sum, osc) => sum + Math.sin(osc * x), 0)
  );

  return (
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: 'scatter',
          mode: 'lines',
          name: 'Somme des sinusoïdes',
          marker: { color: 'red' },
        },
      ]}
      layout={{ title: 'Somme des sinusoïdes' }}
    />
  );
};

export default SumSinusPlot;