"use client";
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });
const listOsc = [2, 3, 0.5];

const ManySinusPlot = () => {
  return (
    <div>
    <Plot
    data={listOsc.map((osc, index) => ({
              x: Array.from({ length: 100 }, (_, i) => i * 0.1), // De 0 à 10 avec un pas de 0.1
              y: Array.from({ length: 100 }, (_, i) => Math.sin(osc*(i * 0.1))), 
              type: 'scatter',
              mode: 'lines',
              marker: { color: `rgb(${(index * 50) % 255}, ${(index * 100) % 255}, 150)` }, // Choisir une couleur différente pour chaque courbe
            }
        ))}
      layout={{ title: 'Graphique des différentes fréquences' }}
    />
    </div>
  );
};

export default ManySinusPlot;