import React from 'react';

const Filtre = ({ titre, taux, setTitre, setTaux, onFiltrer }) => {
  return (
    <div>
      <label htmlFor="titre">Titre :</label>
      <input
        type="text"
        id="titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <label htmlFor="taux">Taux :</label>
      <input
        type="number"
        id="taux"
        min="1"
        max="5"
        value={taux}
        onChange={(e) => setTaux(e.target.value)}
      />
      <button onClick={onFiltrer}>Filtrer</button>
    </div>
  );
};

export default Filtre;
