import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  const links = [
    { title: 'Hot Now', to: '/' },
    { title: 'Pizza Menu', to: '/pizzas' },
    { title: 'logo', to: '/' },
    { title: 'SliceMasters', to: '/slicemasters' },
    { title: 'Order Ahead!', to: '/order' },
  ];

  return (
    <nav>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.to}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
