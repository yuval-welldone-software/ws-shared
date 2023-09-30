import { Checkbox, FormControlLabel } from "@mui/material";
import { useState, ChangeEvent } from "react";

type WSCheckboxProps = { label?: string, onChange?: (checked: boolean)=>void };

export const WSCheckbox = ({ label = "Check", onChange }: WSCheckboxProps) => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = useCallback(() => {
  //   if (!stopMove) {
  //     const buttonWidth = 100; // Adjust to match button's width
  //     const buttonHeight = 50; // Adjust to match button's height

  //     const maxX = window.innerWidth - buttonWidth;
  //     const maxY = window.innerHeight - buttonHeight;

  //     const randomX = Math.random() * maxX;
  //     const randomY = Math.random() * maxY;

  //     setPosition({ x: randomX, y: randomY });
  //   }
  // },[stopMove]);

  // useEffect(() => {
  //   window.addEventListener('resize', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('resize', handleMouseMove);
  //   };
  // }, [stopMove, handleMouseMove]);

  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange && onChange(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox defaultChecked checked={checked} onChange={handleChange} />
      }
      label={label}
    />
  );
};

export default WSCheckbox;
