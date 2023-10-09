import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const PageHero = ({ title, product, category }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">
            <span>Home</span>{' '}
          </Link>
          {product && (
            <Link to="/products">
              &gt; <span className="product-item">products</span>
            </Link>
          )}
          {category && <Link to="/products"></Link> && (
            <Link to={`/products/${category}/`}>
              {product} &gt; <span className="cat-item">{category}</span>
            </Link>
          )}
          &gt; <span> {title}</span>
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-2);
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  color: #fff;
  a {
    color: #fff;
    padding-right: 0;
    transition: var(--transition);
    font-weight: 400;
  }
  a:hover {
    span {
      // color: var(--clr-yellow-dark);
      text-decoration: underline;
    }
  }

  span.cat-item {
    padding-right: 5px;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 0;
  }
`;

export default PageHero;
