import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helpers';

const Filters = () => {
  const {
    filters: { text, category, brand, min_price, price, max_price },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'brand');
  return (
    <Wrapper>
      <div className="content">
        <form className="filter-form" onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control -search-bar">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              onChange={updateFilters}
              className="search-input"
            />
          </div>
          {/* end of search input */}
          {/* category */}
          <div className="form-control -category">
            <h5>category</h5>
            <div className="category-list-holder">
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`${category === c.toLowerCase() ? 'active' : null}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of category */}
          {/* brand */}
          <div className="form-control -brand">
            <h5>brand</h5>
            <select name="brand" value={brand} onChange={updateFilters} className="brand">
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of brand */}
          {/* price */}
          <div className="form-control -price">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input type="range" name="price" onChange={updateFilters} min={min_price} max={max_price} value={price} />
          </div>
          {/* end of price */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
    &.-category {
      max-height: 300px;
      overflow-y: scroll;
    }

    &.-brand * {
      max-width: 100%;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-8);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .brand {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
  @media (max-width: 767px) {
    .search-input {
      border-radius: 0;
    }
    .clear-btn {
      width: 100%;
    }
    .category-list-holder {
      padding: 0 5px;
      grid-template-columns: repeat(3, 1fr);
      display: grid;
      max-height: 150px;
      border: 2px solid;
      overflow-y: scroll;
      background: var(--clr-primary-2);
      &::-webkit-scrollbar {
        background-color: #fff;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--clr-primary-5);
      }
      * {
        color: #fff;
      }
      .active {
        color: var(--clr-primary-2);
        background: #fff;
      }
    }

    .filter-form {
      display: flex;
      flex-wrap: wrap;
      background: var(--clr-primary-2);
      .-brand,
      .-price {
        width: 50%;
        padding: 5px;
        margin-bottom: 0;
        color: #fff;
      }
      .-category,
      .-search-bar {
        width: 100%;
      }
      .-category {
        color: #fff;
        padding: 5px;
      }
      .price {
        color: #fff;
      }
    }
  }

  @media (max-width: 576px) {
    .category-list-holder {
      grid-template-columns: repeat(2, 1fr);
      display: grid;
    }
    .search-input {
      width: 100%;
    }
  }
`;

export default Filters;
