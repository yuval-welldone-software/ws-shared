import React, { useState,useEffect, useCallback } from "react";
import Button from '@mui/material/Button';


type WSMoveButtonProps  =  { stopMove: boolean, label?: string };

export const WSMoveButton = ({ stopMove, label="Move" }: WSMoveButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(() => {
    if (!stopMove) {
      const buttonWidth = 100; // Adjust to match button's width
      const buttonHeight = 50; // Adjust to match button's height

      const maxX = window.innerWidth - buttonWidth;
      const maxY = window.innerHeight - buttonHeight;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      setPosition({ x: randomX, y: randomY });
    }
  },[stopMove]);

  useEffect(() => {
    window.addEventListener('resize', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleMouseMove);
    };
  }, [stopMove, handleMouseMove]);

  return (
    <Button variant="contained"
      className="moving-button"
      onMouseMove={handleMouseMove}
      style={{ position: 'absolute', left: `${position.x}px`, top: `${position.y}px`, backgroundColor: 'blue' }}
    >
      {label}
    </Button>
  );
};

export default WSMoveButton;

