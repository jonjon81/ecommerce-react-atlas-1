import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Deal = ({ thumbnail, title, price, id, category, discountPercentage }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={thumbnail} alt={title} />
        <Link to={`/products/${category}/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{title}</h5>
        <h4>{discountPercentage}% off</h4>
        <p>{formatPrice(price)}</p>
        <p> NEW PRICE</p>
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
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    * {
      color: #fff;
    }
    h4 {
      background: var(--clr-red-dark);
      padding: 5px;
    }
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: #fff;
    letter-spacing: var(--spacing);
  }
`;
export default Deal;
