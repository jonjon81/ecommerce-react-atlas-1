import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { discountPercent, discountedPrice, scrollTop } from '../utils/helpers';
import { FaSistrix } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Deal = ({ thumbnail, title, price, id, category, discountPercentage }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={thumbnail} alt={title} />
        <Link onClick={scrollTop} to={`/products/${category}/${id}`} className="link">
          <FaSistrix />
        </Link>
      </div>
      <footer>
        <p className="discount-percent">{discountPercent(discountPercentage)}% off</p>
        <h5>{title}</h5>
        <p className="crossed-out">{formatPrice(price)}</p>
        <p className="new-price">{discountedPrice(price, discountPercentage)}</p>
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
      pointer-events: none;
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

    .discount-percent {
      background: var(--clr-red-dark);
      padding: 5px;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 10px;
      color: #fff;
    }
    .crossed-out {
      padding: 5px;
      margin: 5px 0;
      font-size: 1rem;
    }

    .new-price {
      font-size: 1 rem;
      color: var(--clr-primary-5);
      font-weight: bold;
    }
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    letter-spacing: var(--spacing);
  }

  @media (max-width: 576px) {
    footer {
      .crossed-out {
        font-size: 0.875rem;
      }
    }
    .container {
      &:hover {
        img {
          opacity: 1;
        }
      }
    }
    .link {
      svg {
        display: none;
      }
      transition: 0s;
      opacity: 1;
      * {
        opacity: 1;
      }
    }
  }
`;
export default Deal;
