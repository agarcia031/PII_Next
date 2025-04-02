
"use client"
import TemporalPlot from '../components/temporalPlot';
import FFTPlot from '@/components/fftPlot';
import Slider from '@/components/slider';
import SinusControls from '@/components/sinusControls';
import { useState } from 'react';
import Link from 'next/link';  
import './globals.css';

export default function Home() {

  // Création d'un signal sinusoïdal
  const [frequence, setFrequence] = useState(1); // État initial des fréquences
  const [amplitude, setAmplitude] = useState(1);
  const numEch = 8192; // Nombre d'échantillon doit être une puissance de 2 pour la fft
  const step = 10 / numEch; // Calcul du pas pour couvrir de 0 à 10
  const xValues = Array.from({ length: numEch }, (_, i) => i * step); // axe des absices pour le plot temporel
  const signal = Array.from({ length: numEch }, (_, i) => amplitude * Math.sin(frequence*(i * step)));

  return (
    <div >
      <h1>Onde sinusoïdale &#128526;</h1>

      <Slider value={frequence} onChange={setFrequence} horizontal={true}/>
      <Slider  value={amplitude} onChange={setAmplitude} horizontal={false}/>

      <TemporalPlot signal={signal} xValues={xValues}/>
      <FFTPlot signal={signal}/>

      <Link legacyBehavior href="/addWaves">
        <a>Continuer</a>
      </Link>
      <Link legacyBehavior href = "/controlWave">
        <a>Voir des boites</a>
      </Link>
    </div>
  );
}
