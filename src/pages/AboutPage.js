import React, { useRef } from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import { useInView } from 'framer-motion';
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
import { GiHook, GiMatterStates } from 'react-icons/gi';
import { PiFramerLogoFill } from 'react-icons/pi';
import { SiStylelint, SiVite } from 'react-icons/si';

import { Link } from 'react-router-dom';

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
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
              <strong>Contact</strong>
              <FaAngleRight className="angle-right" />
              <a target="_blank" rel="noreferrer" href="mailto:jsa@jonatlas.com">
                <FaMailBulk />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jonatlas">
                <FaLinkedin />
              </a>
            </p>
            <p className="contact">
              <strong>Resume</strong>
              <FaAngleRight className="angle-right" />
              <Link to="/files/jon-atlas-resume-FED.docx" target="_blank" download>
                <FaFileCsv />
              </Link>
            </p>
          </div>
          <br />
          <ul>
            <li className="tech-stack">
              <strong>Tech stack</strong>
              <FaAngleRight className="angle-right" />
              <a target="_blank" rel="noreferrer" href="https://react.dev/">
                <FaReact className="react-color" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://nodejs.org/#">
                <FaNodeJs className="node-color" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://html.com/html5/">
                <FaHtml5 className="html-color" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.css3.com/">
                <FaCss3 className="css-color" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <FaJs className="js-color" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/">
                <FaNpm className="npm-color" />
              </a>
            </li>
          </ul>
          <br />
        </article>
        <article className="key-feature-tools">
          <h4 ref={ref} className="key-features">
            Key features / tools{' '}
          </h4>
          <ul
            style={{
              transform: isInView ? 'none' : 'translateX(300px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className="normal-list"
          >
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
              >
                <FaMobileAlt />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a
                target="_blank"
                rel="noreferrer"
                className="btn"
                href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
              >
                Fully responsive
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://react.dev/reference/react">
                <GiHook />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://react.dev/reference/react">
                React hooks
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://react.dev/learn/scaling-up-with-reducer-and-context">
                <GiMatterStates />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a
                target="_blank"
                rel="noreferrer"
                className="btn"
                href="https://react.dev/learn/scaling-up-with-reducer-and-context"
              >
                React state management with context and reducers
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://formspree.io/">
                <FaWpforms />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://formspree.io/">
                Sign up form on homepage using Formspree
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://stripe.com/">
                <FaStripe />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://stripe.com/">
                Integrated with Stripe for full checkout
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.netlify.com/">
                <FaSmile />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://www.netlify.com/">
                Depoyed using Netlify and www.Jon-Atlas.com
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://auth0.com/">
                <FaRegistered />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://auth0.com/">
                Login/sign-up integration using Auth0
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://vitejs.dev/guide/">
                <SiVite />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://vitejs.dev/guide/">
                Used Vite for rapid development
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/">
                <FaGit />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://github.com/">
                Git
              </a>
            </li>

            <li>
              <a target="_blank" rel="noreferrer" href="https://desktop.github.com/">
                <FaGithubAlt />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://desktop.github.com/">
                Github desktop for version control
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://dummyjson.com/products?limit=100">
                <BsFiletypeJson />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://dummyjson.com/products?limit=100">
                Used dummyjson.com for all the product data
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://styled-components.com/">
                <SiStylelint />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://styled-components.com/">
                Styled components for styling in each component
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://react-icons.github.io/react-icons/icons">
                <FaReact />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a
                target="_blank"
                rel="noreferrer"
                className="btn"
                href="https://react-icons.github.io/react-icons/icons"
              >
                React Icons
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/react-slick">
                <FaSlidersH />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://www.npmjs.com/package/react-slick">
                Carousels using Slick Sider
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://reactrouter.com/en/main">
                <FaRoute />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://reactrouter.com/en/main">
                React Router
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/axios">
                <FaDatabase />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://www.npmjs.com/package/axios">
                Axios for communicating with API
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/framer-motion">
                <PiFramerLogoFill />
              </a>
              <FaAngleRight className="angle-right" />{' '}
              <a target="_blank" rel="noreferrer" className="btn" href="https://www.npmjs.com/package/framer-motion">
                Animation using Framer motion library
              </a>
            </li>
          </ul>
          <br />
          <h5 ref={ref2}>Important features to test out!</h5>
          <ul
            style={{
              transform: isInView2 ? 'none' : 'translateX(300px)',
              opacity: isInView2 ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className="normal-list list-item"
          >
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
            <li>Gallery modal popup on single product pages</li>
            <li>Animation on scroll on home and about page</li>
          </ul>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  #root svg.angle-right {
    color: #000;
  }
  ul.normal-list {
    list-style-type: disc;
    li {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      .btn {
        width: 100%;
      }
      > svg {
        margin: 0 10px;
      }
    }

    &.list-item {
      padding-left: 20px;
      li {
        display: list-item;
      }
    }

    svg {
      font-size: 1.5rem;
      font-size: 1.5rem;
      color: #000;
      &:hover {
        color: var(--clr-primary-5);
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
      &:hover > * {
        color: #000;
      }
      svg {
        font-size: 2.5rem;
      }
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
