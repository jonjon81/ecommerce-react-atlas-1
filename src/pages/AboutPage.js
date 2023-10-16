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
  FaNode,
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
  FaFonticonsFi,
} from 'react-icons/fa';
import { BsFiletypeJson } from 'react-icons/bs';
import { GiHook, GiMatterStates } from 'react-icons/gi';
import { PiFramerLogoFill } from 'react-icons/pi';
import { SiStylelint, SiVite } from 'react-icons/si';

import { Link } from 'react-router-dom';

const scrollTop = () => {
  window.scrollTo(0, 0);
};

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <div className="main-section">
          <img src={laptops} alt="nice desk" />
          <div>
            <div className="title">
              <h2>my story</h2>
              <div className="underline"></div>
            </div>
            <p>
              This ecommerce React project was built for the purpose of showing off my abilities to make a fully
              functional and attractive application. Please try it out on both desktop and mobile and let me know your
              thoughts or if you run into any issues. If you think I'd be a good addition to your team please reach out!
              I am currently looking for FT remote opportunities.
            </p>

            <div className="contact-container">
              <p className="contact">
                <strong>Contact</strong>
                <FaAngleRight className="angle-right large" />
                <a target="_blank" rel="noreferrer" href="mailto:jsa@jonatlas.com">
                  <FaMailBulk />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jonatlas">
                  <FaLinkedin />
                </a>
              </p>
              <p className="contact">
                <strong>Resume</strong>
                <FaAngleRight className="angle-right large" />
                <Link to="/files/jon-atlas-resume-FED.docx" target="_blank" download>
                  <FaFileCsv />
                </Link>
              </p>
            </div>
            <br />
            <ul>
              <li className="tech-stack">
                <strong>Tech stack</strong>
                <FaAngleRight className="angle-right large" />
                <a target="_blank" rel="noreferrer" href="https://react.dev/">
                  <FaReact className="react-color tech-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://nodejs.org/#">
                  <FaNode className="node-color tech-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://html.com/html5/">
                  <FaHtml5 className="html-color tech-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.css3.com/">
                  <FaCss3 className="css-color tech-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <FaJs className="js-color tech-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/">
                  <FaNpm className="npm-color tech-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
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
            className="normal-list boxes"
          >
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                className="btn"
                href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
              >
                <FaMobileAlt /> <span>Fully responsive</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://react.dev/reference/react">
                <GiHook /> <span>React hooks</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                className="btn"
                href="https://react.dev/learn/scaling-up-with-reducer-and-context"
              >
                <GiMatterStates /> <span>React state management with context and reducers</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://formspree.io/">
                <FaWpforms /> <span>Sign up form on homepage using Formspree</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://stripe.com/">
                <FaStripe /> <span>Integrated with Stripe for full checkout</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://www.netlify.com/">
                <FaSmile /> <span>Depoyed using Netlify and www.Jon-Atlas.com</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://auth0.com/">
                <FaRegistered /> <span>Login/sign-up integration using Auth0</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://vitejs.dev/guide/">
                <SiVite /> <span>Used Vite for rapid development</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://github.com/">
                <FaGit /> <span>Git</span>
              </a>
            </li>

            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://desktop.github.com/">
                <FaGithubAlt /> <span>Github desktop for version control</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://dummyjson.com/products?limit=100">
                <BsFiletypeJson /> <span>Used dummyjson.com for all the product data</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://styled-components.com/">
                <SiStylelint /> <span>Styled components for styling in each component</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                className="btn"
                href="https://react-icons.github.io/react-icons/icons"
              >
                <FaReact /> <span>React Icons</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://www.npmjs.com/package/react-slick">
                <FaSlidersH />
                <span>Carousels using Slick Sider</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://reactrouter.com/en/main">
                <FaRoute />
                <span>React Router</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://www.npmjs.com/package/axios">
                <FaDatabase />
                <span>Axios for communicating with API</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://www.npmjs.com/package/framer-motion">
                <PiFramerLogoFill />
                <span>Animation using Framer motion library</span>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" className="btn" href="https://favicon.io/favicon-generator/">
                <FaFonticonsFi />
                <span>Custom Favicon</span>
              </a>
            </li>
          </ul>
        </article>
        <article>
          {' '}
          <h5 ref={ref2}>Important features to check out!</h5>
          <ul
            style={{
              transform: isInView2 ? 'none' : 'translateX(300px)',
              opacity: isInView2 ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className="normal-list list-item"
          >
            <li>
              Filter product data in many ways{' '}
              <Link onClick={scrollTop} className="btn" to="/products">
                Products
              </Link>
              <Link onClick={scrollTop} className="btn" to="/top-deals">
                Top Deals
              </Link>
            </li>
            <li>
              Search product names{' '}
              <Link onClick={scrollTop} className="btn" to="/products">
                Products
              </Link>
              <Link onClick={scrollTop} className="btn" to="/top-deals">
                Top Deals
              </Link>
            </li>
            <li>
              Top deals page with 15%+ deals{' '}
              <Link onClick={scrollTop} className="btn" to="/top-deals">
                Top Deals
              </Link>
            </li>
            <li>
              Cart options - change item amount, delete, clear cart{' '}
              <Link onClick={scrollTop} className="btn" to="/cart">
                Cart
              </Link>
            </li>
            <li>
              3 carousels on homepage{' '}
              <Link onClick={scrollTop} className="btn" to="/">
                Home
              </Link>
            </li>
            <li>
              Filter dropdown on mobile{' '}
              <Link onClick={scrollTop} className="btn" to="/products">
                Products
              </Link>
              <Link onClick={scrollTop} className="btn" to="/top-deals">
                Top Deals
              </Link>
            </li>
            <li>Login using new username/password or through LinkedIn/Gmail</li>
            <li>
              Checkout (after logging in) and complete your order with the test CC number{' '}
              <Link onClick={scrollTop} className="btn" to="/checkout">
                Checkout
              </Link>
            </li>
            <li>
              Free shipping for orders more than 50%
              <Link onClick={scrollTop} className="btn" to="/checkout">
                Checkout
              </Link>
            </li>
            <li>
              Fill out the form on the homepage and I'll receive an email{' '}
              <Link onClick={scrollTop} className="btn" to="/">
                Home
              </Link>
            </li>
            <li>Scroll top arrow for longer pages </li>
            <li>
              Gallery modal popup on single product pages (desktop only){' '}
              <Link onClick={scrollTop} className="btn" to="/products/mens-shirts/52">
                Single Product
              </Link>
            </li>
            <li>
              Animation on scroll on home and about page{' '}
              <Link onClick={scrollTop} className="btn" to="/">
                Home
              </Link>{' '}
              <Link onClick={scrollTop} className="btn" to="/about">
                About
              </Link>
            </li>
          </ul>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  .main-section {
    display: flex;
    width: 100%;
    column-gap: 2rem;
    @media (max-width: 992px) {
      flex-direction: column;
      row-gap: 1rem;
    }
    > * {
      width: 50%;
      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }
  ul.normal-list.boxes {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.33%;
      height: 100px;
      padding: 0;
      border: 0.5rem solid transparent;
      @media (max-width: 992px) {
        width: 50%;
      }
      @media (max-width: 567px) {
        height: auto;
      }
      a {
        height: 100%;
        display: flex;
        align-items: center;
        @media (max-width: 567px) {
          flex-direction: column;
          justify-content: center;
        }
        &.btn {
          background-color: var(--clr-primary-2);
          &:hover {
            color: var(--clr-primary-1);
            background: var(--clr-primary-7);
          }
          &:focus {
            border: 4px solid var(--clr-yellow-dark);
          }
        }
        svg {
          color: #fff;
          padding-right: 1rem;
          font-size: 4rem;
          @media (max-width: 567px) {
            font-size: 3rem;
            padding-right: 0;
            padding-bottom: 1rem;
          }
        }
        span {
          font-size: 1rem;
          width: 100%;
          line-height: 1.25;
          @media (max-width: 767px) {
            font-size: 0.875rem;
          }
        }
      }
    }
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
        a {
          width: auto;
          margin-left: 10px;
        }
      }
    }

    svg {
      font-size: 1.5rem;
      color: #000;
      &:hover {
        color: var(--clr-primary-5);
      }
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
    height: 100%;
    object-fit: cover;
  }

  .contact,
  .tech-stack {
    display: flex;
    align-items: center;
    color: rgb(0, 0, 0);
    font-size: 1.25rem;
    text-transform: uppercase;
    @media (max-width: 567px) {
      font-size: 1rem;
    }
    a {
      margin: 5px;
      &:hover > * {
        color: #000;
      }
      svg {
        font-size: 2.5rem;
        @media (max-width: 992px) {
          font-size: 2rem;
        }
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

  .angle-right {
    &.large {
      font-size: 1.5rem;
      color: #000;
    }
  }
`;
export default AboutPage;
