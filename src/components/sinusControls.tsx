import { useState } from 'react';

const SinusControls = ({ setParams }: { setParams: (params: any) => void }) => {
  const [amplitude, setAmplitude] = useState(1);
  const [frequency, setFrequency] = useState(1);
  const [phase, setPhase] = useState(0);
  const [offset, setOffset] = useState(0);

  // Met à jour les paramètres et appelle la fonction parent
  const updateParams = () => {
    setParams({ amplitude, frequency, phase, offset });
  };

  return (
    <div>
      <h3>Paramètres de l'onde</h3>
      
      <label>Amplitude: </label>
      <input type="number" value={amplitude} onChange={(e) => setAmplitude(parseFloat(e.target.value))} />
      <br />

      <label>Fréquence: </label>
      <input type="number" value={frequency} onChange={(e) => setFrequency(parseFloat(e.target.value))} />
      <br />

      <label>Phase: </label>
      <input type="number" value={phase} onChange={(e) => setPhase(parseFloat(e.target.value))} />
      <br />

      <label>Offset: </label>
      <input type="number" value={offset} onChange={(e) => setOffset(parseFloat(e.target.value))} />
      <br />

      <button onClick={updateParams} style={{ marginTop: '10px', cursor: 'pointer' }}>Mettre à jour</button>
    </div>
  );
};

export default SinusControls;