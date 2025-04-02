import { useState } from 'react';
import Boite from './boite';
import AddButton from './addButton';

const ListBoite = () => {
  // État pour garder une liste de boîtes
  const [boites, setBoites] = useState<number[]>([0]); // Stocke un tableau de valeurs

  // Fonction pour ajouter une nouvelle boîte
  const addBoite = () => {
    setBoites([...boites, 1]); // Ajoute un 0 par défaut à la liste
  };

  // Supprimer une boîte
  const removeBoite = (index: number) => {
    setBoites(boites.filter((_, i) => i !== index));
  };

  return (
    <div className="flex items-center space-x-4">
      {boites.map((_, index) => (
        <Boite key={index} onRemove={() => removeBoite(index)} />
      ))}
      <AddButton onClick={addBoite} />
    </div>
  );
};

export default ListBoite;