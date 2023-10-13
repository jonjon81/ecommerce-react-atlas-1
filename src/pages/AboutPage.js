import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import laptops from '../assets/categories/laptops.jpeg';
import { FaCog } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={laptops} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            This project was built for the purpose of showing off my abilities to make a fully functional and attractive
            application. Please try it out on both desktop and mobile and let me know your thoughts and if you run into
            any issues. If you think I'd be a good addition to your team please reach out! I am currently just looking
            for remote opportunities.
          </p>
          <p>
            <strong>Resume</strong>
          </p>
          <p>
            {' '}
            <strong>Contact:</strong>{' '}
            <a href="mailto:jsa@jonatlas.com">
              E-mail <FaCog />
            </a>{' '}
            /
            <a href="https://www.linkedin.com/in/jonatlas">
              LinkedIn <FaCog />
            </a>
          </p>
          <br />
          <h4 className="key-features">Key Features</h4>
          <ul>
            <li>SPA built with React</li>
            <li>Fully responsive</li>
            <li>Integrated with Stripe for checkout</li>
            <li>Depoyed using Netlify and www.Jon-Atlas.com</li>
            <li>Email on homepage for sending using Formspree</li>
            <li>Login integration using oAuth</li>
            <li>Used Vite</li>
            <li>Used JSON data from this</li>
            <li>Styled components</li>
            <li>Font Awesome</li>
          </ul>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
