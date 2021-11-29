import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from './Logo';

const NavStyles = styled.nav`
  margin-bottom: 3rem;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  .logo-item {
    margin-top: 8rem;
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--red);
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
  @media (max-width: 600px) {
    --columns: 4;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--grey);
    padding-bottom: 2rem;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }
    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }
    .logo {
      transform: none;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
  }
`;

const Nav = () => {
  const links = [
    { title: 'Hot Now', to: '/' },
    { title: 'Pizza Menu', to: '/pizzas' },
    { title: 'logo', to: '/' },
    { title: 'SliceMasters', to: '/slicemasters' },
    { title: 'Order Ahead!', to: '/order' },
  ];

  return (
    <NavStyles>
      <ul>
        {links.map((link, i) => (
          <li key={i} className={link.title === 'logo' ? 'logo-item' : ''}>
            <Link to={link.to}>
              {link.title === 'logo' ? <Logo /> : link.title}
            </Link>
          </li>
        ))}
      </ul>
    </NavStyles>
  );
};

export default Nav;
