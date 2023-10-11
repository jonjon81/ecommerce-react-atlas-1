import React from 'react';
import styled from 'styled-components';
import { Filters, TopDealsList, SortDeals, PageHero } from '../components';
const TopDealsPage = () => {
  return (
    <main>
      <PageHero title="top deals" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <SortDeals />
            <TopDealsList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  .discount-percent.show {
    display: inline-block;
    background: var(--clr-red-dark);
    padding: 5px;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0;
    color: rgb(255, 255, 255);
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default TopDealsPage;
