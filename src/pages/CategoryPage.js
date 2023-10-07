import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { ProductList, Sort, PageHero } from '../components';

const CategoryPage = () => {
  const { category } = useParams();
  return (
    <main>
      <PageHero title={category} />
      <Wrapper className="page">
        <div className="section-center products">
          <div>
            <Sort />
            <ProductList />
            {console.dir('category here to filter!')}
            {console.dir(category)}
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default CategoryPage;
