import React from 'react';

const GameModal = ({ isOpen, onClose, gameDetails }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className='p-2'>{gameDetails.name}</h2>
        {gameDetails.background_image && (
          <img
            src={gameDetails.background_image}
            alt={gameDetails.name}
            className="game-image"
          />
        )}
        <p>{gameDetails.description || 'No description available.'}</p>
        {/* Add more details about the game */}
        <button className='px-2 p-1 m-2' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default GameModal;
