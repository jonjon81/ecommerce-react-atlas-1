import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import laptops from '../assets/categories/laptops.jpeg';
import { FaMailBulk, FaLinkedin, FaFileCsv } from 'react-icons/fa';

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
            This ecommerce project was built for the purpose of showing off my abilities to make a fully functional and
            attractive application. Please try it out on both desktop and mobile and let me know your thoughts and if
            you run into any issues. If you think I'd be a good addition to your team please reach out! I am currently
            looking for FT remote opportunities.
          </p>

          <div className="contact-container">
            <p className="contact">
              {' '}
              <strong>Contact:</strong>{' '}
              <a target="_blank" rel="noreferrer" href="mailto:jsa@jonatlas.com">
                <FaMailBulk />
              </a>{' '}
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jonatlas">
                <FaLinkedin />
              </a>
            </p>
            <p className="contact">
              <strong>Resume:</strong>{' '}
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jonatlas">
                <FaFileCsv />
              </a>
            </p>
          </div>
          <br />
          <h4 className="key-features">Key Features</h4>
          <ul>
            <li>Tech stack: React / Node / HTML / CSS / Javascript</li>
            <li>Fully responsive</li>
            <li>Integrated with Stripe for checkout</li>
            <li>Depoyed using Netlify and www.Jon-Atlas.com</li>
            <li>Email on homepage for sending using Formspree</li>
            <li>Login integration using oAuth</li>
            <li>Used Vite</li>
            <li>Used JSON data from this</li>
            <li>Styled components</li>
            <li>Font Awesome</li>
            <li>Carousels using slick slider</li>
          </ul>
          <br />
          <h5>Important features to test out!</h5>
          <ul>
            <li>Free shipping for orders more than 50%</li>
            <li>Filter your items</li>
            <li>Top deals page with 15%+ deals</li>
            <li>Cart options</li>
            <li>Filter dropdown on mobile</li>
            <li>Login using new username/password or through LinkedIn/Gmail</li>
            <li>Checkout (after logging in) and complete your order with the test CC number.</li>
            <li>Fill out the form on the homepage</li>
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

  .contact {
    display: flex;
    align-items: center;
    a {
      margin: 5px;
    }
    svg {
      font-size: 1.5rem;
      color: var(--clr-primary-5);
      &:hover {
        color: #000;
      }
    }
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
