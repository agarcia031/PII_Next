import { useState } from 'react';
import '../globals.css';

const AddButton = ({ onClick }: { onClick: () => void }) => {
    return (
      <button onClick={onClick} className="flex items-center justify-center border-4 border-black-400 w-12 h-12 bg-grey-500 text-black rounded-full shadow-lg cursor-pointer">
        <span className="text-2xl">+</span>
      </button>
    );
  };
  
  export default AddButton;