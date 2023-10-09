import React from 'react';
import styled from 'styled-components';
import ScrollButton from './ScrollButton';
const Footer = () => {
  return (
    <Container>
      <div className="footer-container">
        <ul>
          <li>
            <a href="/test">Lorem, ipsum</a>
          </li>
          <li>
            <a href="/test">Lorem</a>
          </li>
          <li>
            <a href="/test">Lorem, ipsum dolor</a>
          </li>
          <li>
            <a href="/test">Lorem, ipsum</a>
          </li>
          <li>
            <a href="/test">Lorem, ipsum</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/test">Lorem, ipsum</a>
          </li>
          <li>
            <a href="/test">Lorem</a>
          </li>
          <li>
            <a href="/test">Lorem, ipsum dolor</a>
          </li>
          <li>
            <a href="/test">Lorem, ipsum dolor</a>
          </li>
          <li>
            <a href="/test">lorem</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/test">Lorem, ipsum</a>
          </li>
          <li>
            <a href="/test">Lorem</a>
          </li>
          <li>
            <a href="/test">Lorem, ipsum dolor</a>
          </li>
          <li>
            <a href="/test">Lorem, ipsum</a>
          </li>
          <li>
            <a href="/test">Lorem, ipsum</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/test">Lorem, ipsum</a>
          </li>
          <li>
            <a href="/test">Lorem</a>
          </li>
          <li>
            <a href="/test">Lorem, ipsum dolor</a>
          </li>
          <li>
            <a href="/test">Lorem, ipsum dolor</a>
          </li>
          <li>
            <a href="/test">lorem</a>
          </li>
        </ul>
      </div>
      <div className="rights-reserved">
        <h5>
          &copy; {new Date().getFullYear()}
          <span>&nbsp;Atlas Ecommerce</span>
        </h5>
        <h5>&nbsp;All rights reserved</h5>
      </div>
      <ScrollButton />
    </Container>
  );
};

const Container = styled.footer`
  height: auto;
  padding: 2rem;
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

  .footer-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 1170px;
    padding-bottom: 3rem;
    ul {
      text-align: left;
    }
}
    a {
      color: #fff;
      
      &:hover {
        text-decoration:underline;
      }
    }
  }
  @media (min-width: 776px) {
    flex-direction: column;
  }
`;

export default Footer;
