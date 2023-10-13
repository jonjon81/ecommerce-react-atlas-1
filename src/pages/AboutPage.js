import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import laptops from '../assets/categories/laptops.jpeg';
import {
  FaMailBulk,
  FaLinkedin,
  FaFileCsv,
  FaReact,
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaStripe,
  FaWpforms,
  FaAngleRight,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={laptops} alt="nice desk" />
        <article>
          <div className="title">
            <h2>my story</h2>
            <div className="underline"></div>
          </div>
          <p>
            This ecommerce React project was built for the purpose of showing off my abilities to make a fully
            functional and attractive application. Please try it out on both desktop and mobile and let me know your
            thoughts and if you run into any issues. If you think I'd be a good addition to your team please reach out!
            I am currently looking for FT remote opportunities.
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
              <Link to="/files/jon-atlas-resume-FED.docx" target="_blank" download>
                <FaFileCsv />
              </Link>
            </p>
          </div>
          <br />
          <h4 className="key-features">Key Features</h4>
          <ul className="normal-list">
            <li className="tech-stack">
              Tech stack:{' '}
              <a target="_blank" rel="noreferrer" href="https://react.dev/">
                <FaReact />
              </a>{' '}
              <a target="_blank" rel="noreferrer" href="https://nodejs.org/#">
                <FaNodeJs />
              </a>{' '}
              <a target="_blank" rel="noreferrer" href="https://html.com/html5/">
                <FaHtml5 />{' '}
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.css3.com/">
                <FaCss3 />
              </a>{' '}
              <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <FaJs />
              </a>
            </li>
            <li>
              Fully responsive <FaAngleRight className="angle-right" />
              <a href="https://stripe.com/">
                <FaStripe />
              </a>
            </li>
            <li>
              Integrated with Stripe for checkout <FaAngleRight className="angle-right" />
              <a href="https://stripe.com/">
                <FaStripe />
              </a>
            </li>
            <li>
              Depoyed using Netlify and www.Jon-Atlas.com{' '}
              <a href="https://stripe.com/">
                <FaStripe />
              </a>
            </li>
            <li>
              Email on homepage for sending using Formspree <FaAngleRight className="angle-right" />
              <a href="https://stripe.com/">
                <FaStripe />
              </a>
            </li>
            <li>
              Login integration using oAuth <FaAngleRight className="angle-right" />
              <a href="https://stripe.com/">
                <FaStripe />
              </a>
            </li>
            <li>
              Used Vite <FaAngleRight className="angle-right" />
              <a href="https://stripe.com/">
                <FaStripe />
              </a>
            </li>
            <li>
              Used JSON data from this <FaAngleRight className="angle-right" />
              <a href="https://stripe.com/">
                <FaStripe />
              </a>
            </li>
            <li>
              Styled components <FaAngleRight className="angle-right" />
              <a href="https://stripe.com/">
                <FaStripe />
              </a>
            </li>
            <li>
              Font Awesome <FaAngleRight className="angle-right" />
              <a href="https://stripe.com/">
                <FaStripe />
              </a>
            </li>
            <li>
              Carousels using slick slider <FaAngleRight className="angle-right" />
              <a href="https://stripe.com/">
                <FaStripe />
              </a>
            </li>
            <li>
              Git and github dekstop for version control <FaAngleRight className="angle-right" />
              <a href="https://stripe.com/">
                <FaStripe />
              </a>
            </li>
          </ul>
          <br />
          <h5>Important features to test out!</h5>
          <ul className="normal-list">
            <li>Filter your items</li>
            <li>Top deals page with 15%+ deals</li>
            <li>Cart options</li>
            <li>Filter dropdown on mobile</li>
            <li>Login using new username/password or through LinkedIn/Gmail</li>
            <li>Checkout (after logging in) and complete your order with the test CC number.</li>
            <li>Free shipping for orders more than 50%</li>
            <li>Fill out the form on the homepage</li>
          </ul>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  ul.normal-list {
    list-style-type: disc;
    padding-left: 20px;
    li {
      display: flex;
      align-items: center;
    }
    svg {
      font-size: 1.5rem;
      &.angle-right {
        font-size: 1rem;
      }
    }
  }
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }

  .contact,
  .tech-stack {
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
