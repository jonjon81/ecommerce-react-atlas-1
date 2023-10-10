import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { discountedPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, thumbnail, name, price, description, category, discountPercentage } = product;
        return (
          <article key={id}>
            <img src={thumbnail} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price crossed-out">{formatPrice(price)}</h5>
              <p className="new-price">{discountedPrice(price, discountPercentage)}</p>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${category}/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: contain;
    border-radius: var(--radius);
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    font-weight: 400;
  }
  .new-price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
    font-weight: bold;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.75;
    padding: 0.5rem;
  }
  @media (min-width: 320px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
