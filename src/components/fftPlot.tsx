import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import calculateFFT from './calculateFFT'; 

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const FFTPlot = ({ signal }: { signal: number[] }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Calcul de la transformée de Fourier
    const { freqs, magnitudes } = calculateFFT(signal);

    // Mettre à jour l'état avec les données à afficher
    setData({
      fft: {
        x: freqs,
        y: magnitudes,
        type: 'scatter',
        mode: 'lines',
        name: 'Transformée de Fourier',
      }
    });
  }, [signal]);

  if (!data) return null;

  return (
    <Plot
      data={[data.fft]}
      layout={{
        title: 'Transformée de Fourier',
        xaxis: {
          title: { text: 'Fréquence (Hz)' },
          showgrid: true,
          zeroline: false,
          range: [-0.2, 0.5],
        },
        yaxis: {
          title: { text: 'Magnitude' },
          showgrid: true,
          zeroline: false,
          range: [0, 10000],
        },
        showlegend: true,
        margin: { t: 50, b: 50, l: 50, r: 50 },
      }}
      style={{ width: '80%', height: '500px' }}
    />
  );
};

export default FFTPlot;