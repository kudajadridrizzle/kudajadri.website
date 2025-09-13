import React from 'react';
import { AnimatedLink } from '../../curtain-scroll';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  headerColor?: 'white' | 'black';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  to, 
  children, 
  headerColor = 'black',
  className = '',
  onClick
}) => {
  return (
    <AnimatedLink
      to={to}
      className={`px-4 py-2 no-underline font-albertSans relative group/navlink ${className} ${
        headerColor === 'white' 
          ? 'text-white hover:text-white/90' 
          : 'text-primary hover:text-primary/90'
      }`}
      onClick={onClick}
    >
      <span className="relative inline-block">
        <span className="relative z-10">{children}</span>
        <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
          headerColor === 'white' ? 'bg-white' : 'bg-primary'
        } origin-left transform scale-x-0 group-hover/navlink:scale-x-100 transition-transform duration-300 ease-out`}></span>
      </span>
    </AnimatedLink>
  );
};

export default NavLink;
