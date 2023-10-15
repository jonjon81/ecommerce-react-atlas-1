import React from 'react';
import { useProductsContext } from '../context/products_context';
import styled from 'styled-components';
import Error from './Error';
import Loading from './Loading';
import Category from './Category';
import Hidden from './Hidden';
const categoryList = [];

const CategoryProducts = () => {
  const { products_loading: loading, products_error: error, featured_products: category } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Shop by category</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center category">
        {category.map((product) => {
          if (categoryList.includes(product.category)) {
            return <Hidden key={product.id} />;
          } else {
            categoryList.push(product.category);
            return <Category key={product.id} {...product} />;
          }
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #fff;
  .category {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 150px;
    }
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 992px) {
    padding-bottom: 0;
  }
  @media (min-width: 320px) {
    .category {
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    }
  }
`;

export default CategoryProducts;
