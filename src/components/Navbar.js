import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';
import { useFilterContext } from '../context/filter_context';

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  const { clearFilters } = useFilterContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <Logo />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link onClick={clearFilters} to={url}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background: var(--clr-primary-0);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      color: var(--clr-yellow-dark);
    }
    h3 {
      color: #fff;
    }
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #fff;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: #fff;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        border: 2px solid transparent;
        &:hover {
          border-bottom: 2px solid var(--clr-yellow-dark);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Nav;
