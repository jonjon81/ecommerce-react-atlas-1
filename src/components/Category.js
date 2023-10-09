import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Category = ({ thumbnail, title, category }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={thumbnail} alt={title} />
        <Link to={`/products/${category}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <Link to={`/products/${category}`}>
          <h5>{category}</h5>
        </Link>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  .container {
    position: relative;
    background: none;
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: contain;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      width: 55px;
      height: 50px;
      padding: 10px;
      border-radius: 50%;
      font-size: 1.25rem;
      color: var(--clr-white);
      background: var(--clr-primary-5);
    }
  }
  .container:hover img {
    opacity: 0.5;
    object-fit: cover;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: bold;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }

  footer a {
    color: var(--clr-primary-5);
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Category;
