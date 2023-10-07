import React from 'react';
import styled from 'styled-components';
import ScrollButton from './ScrollButton';
const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>&nbsp;Atlas Ecommerce</span>
      </h5>
      <h5>&nbsp;All rights reserved</h5>
      <ScrollButton />
    </Container>
  );
};

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-8);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
