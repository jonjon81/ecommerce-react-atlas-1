import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1500) {
      setVisible(true);
    } else if (scrolled <= 1500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour 
		in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Wrapper>
      <FaArrowUp onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: auto;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  svg {
    background: var(--clr-primary-5);
    padding: 3px;
  }
`;

export default ScrollButton;