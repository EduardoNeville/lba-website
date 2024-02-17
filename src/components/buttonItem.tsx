// Button Item pipelined into a single component
import React from "react";
//import {
//  BrowserRouter as Router,
//  Switch,
//  Route,
//  Link
//} from "react-router-dom";
import Button from '@mui/material/Button';

interface ButtonItemProps {
  href: string;
  className: string;
  text: string;
  theme: string;
}

const ButtonItem: React.FC<ButtonItemProps> = (
  {
    href, className, text, theme
  }) => {
  return (
      <a 
        href={href}
        className={`${theme === 'dark' ? "hover:bg-light-blue" : ""}`}
      >
        <Button 
          variant="outlined" 
          color="inherit"
          size="large" 
          className={`rounded-none font-cocogothic tracking-tighter text-xl bg-transparent text-primary ${className}`}
        >
          {text} 
        </Button> 
      </a>
  );
}
export default ButtonItem;
