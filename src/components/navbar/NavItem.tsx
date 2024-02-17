// components/NavItem.tsx
//import { Link } from "react-router-dom";

interface NavItemProps {
  text: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, href }) => {
  return (
    <a href={href} className="text-primary text-xl font-zesta-regular hover:underline-offset-2">{text}</a>
  );
};

export default NavItem;

