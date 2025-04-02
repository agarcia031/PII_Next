import { useState } from 'react';
import '../globals.css';

interface BoiteProps {
    onRemove: () => void;
    onValidate: (value: number) => void;
  }

const Boite: React.FC<BoiteProps> = ({ onRemove, onValidate }) => {

    const [value, setValue] = useState(1);
    const [isValidated, setIsValidated] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = Number(e.target.value);
    
        // On s'assure que la valeur reste dans la plage autorisée
        if (newValue < 0) newValue = 0;
        if (newValue > 40) newValue = 40;
    
        setValue(newValue);
      };

return (
<div className="w-32 h-32 bg-gray-200 border-4 border-black rounded-lg flex flex-col items-center justify-center text-xl font-semibold shadow-lg">
    <button
        onClick={onRemove}
        className="top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs shadow-md"
    >
        ❌
    </button>
      <span className="mb-2">Boite 👋</span>

      {isValidated ? (
        <span className="text-xl font-semibold">{value}</span>
      ) : (
        <input 
          type="number"
          value={value}
          onChange={handleChange}
          min="0"
          max="40"
          className="p-2 border rounded text-center w-16"
        />
      )}

      {!isValidated && (
        <button 
          onClick={() => {
            setIsValidated(true)
            onValidate(value);  // Envoie la valeur validée à ListeBoite
          }}
          className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
        >
          Valider
        </button>
      )}
    </div>
)};

export default Boite;