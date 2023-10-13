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
  FaMobileAlt,
  FaSmile,
  FaRegistered,
  FaGit,
  FaSlidersH,
  FaRoute,
  FaGithubAlt,
  FaNpm,
  FaDatabase,
} from 'react-icons/fa';
import { BsFiletypeJson } from 'react-icons/bs';
import { SiStylelint, SiVite } from 'react-icons/si';

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
            thoughts or if you run into any issues. If you think I'd be a good addition to your team please reach out! I
            am currently looking for FT remote opportunities.
          </p>

          <div className="contact-container">
            <p className="contact">
              <strong>Contact:</strong>
              <a target="_blank" rel="noreferrer" href="mailto:jsa@jonatlas.com">
                <FaMailBulk />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jonatlas">
                <FaLinkedin />
              </a>
            </p>
            <p className="contact">
              <strong>Resume:</strong>
              <Link to="/files/jon-atlas-resume-FED.docx" target="_blank" download>
                <FaFileCsv />
              </Link>
            </p>
          </div>
          <br />
          <h4 className="key-features">Key features / tools </h4>
          <ul className="normal-list">
            <li className="tech-stack">
              Tech stack:
              <a target="_blank" rel="noreferrer" href="https://react.dev/">
                <FaReact />
              </a>
              <a target="_blank" rel="noreferrer" href="https://nodejs.org/#">
                <FaNodeJs />
              </a>
              <a target="_blank" rel="noreferrer" href="https://html.com/html5/">
                <FaHtml5 />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.css3.com/">
                <FaCss3 />
              </a>
              <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <FaJs />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/">
                <FaNpm />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
              >
                <FaMobileAlt />
              </a>
              <FaAngleRight className="angle-right" /> Fully responsive
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://formspree.io/">
                <FaWpforms />
              </a>
              <FaAngleRight className="angle-right" /> Sign up form on homepage using Formspree
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://stripe.com/">
                <FaStripe />
              </a>
              <FaAngleRight className="angle-right" /> Integrated with Stripe for full checkout
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.netlify.com/">
                <FaSmile />
              </a>
              <FaAngleRight className="angle-right" /> Depoyed using Netlify and www.Jon-Atlas.com
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://auth0.com/">
                <FaRegistered />
              </a>
              <FaAngleRight className="angle-right" /> Login/sign-up integration using Auth0
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://vitejs.dev/guide/">
                <SiVite />
              </a>
              <FaAngleRight className="angle-right" /> Used Vite for rapid development
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/">
                <FaGit />
              </a>
              <FaAngleRight className="angle-right" /> Git
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://desktop.github.com/">
                <FaGithubAlt />
              </a>
              <FaAngleRight className="angle-right" /> Github desktop for version control
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://dummyjson.com/products?limit=100">
                <BsFiletypeJson />
              </a>
              <FaAngleRight className="angle-right" /> Used dummyjson.com for all the product data
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://styled-components.com/">
                <SiStylelint />
              </a>
              <FaAngleRight className="angle-right" /> Styled components for styling in each component
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://react-icons.github.io/react-icons/icons">
                <FaReact />
              </a>
              <FaAngleRight className="angle-right" /> React Icons
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/react-slick">
                <FaSlidersH />
              </a>
              <FaAngleRight className="angle-right" /> Carousels using Slick Sider
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://reactrouter.com/en/main">
                <FaRoute />
              </a>
              <FaAngleRight className="angle-right" /> React Router
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/axios">
                <FaDatabase />
              </a>
              <FaAngleRight className="angle-right" /> Axios for communicating with API
            </li>
          </ul>
          <br />
          <h5>Important features to test out!</h5>
          <ul className="normal-list list-item">
            <li>Filter product data in many ways</li>
            <li>Search product names</li>
            <li>Top deals page with 15%+ deals</li>
            <li>Cart options - change item amount, delete, clear cart</li>
            <li>3 carousels on homepage</li>
            <li>Filter dropdown on mobile</li>
            <li>Login using new username/password or through LinkedIn/Gmail</li>
            <li>Checkout (after logging in) and complete your order with the test CC number</li>
            <li>Free shipping for orders more than 50%</li>
            <li>Fill out the form on the homepage and I'll receive an email</li>
            <li>Scroll top arrow for longer pages</li>
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
      padding-bottom: 10px;
      > svg {
        margin: 0 10px;
      }
    }

    &.list-item {
      padding-left: 40px;
      li {
        display: list-item;
      }
    }
    svg {
      font-size: 1.5rem;
      font-size: 1.5rem;
      color: var(--clr-primary-5);
      &:hover {
        color: #000;
      }
      &.angle-right {
        font-size: 1rem;
        color: #000;
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
