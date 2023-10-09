import React, { useState } from 'react';
import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';
const ProductImages = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0]);
  const [isActive, setIsActive] = useState(false);
  let modalBg = document.querySelector('.modal-background');
  const imageModalActive = () => {
    setIsActive(true);
    modalBg.classList.add('active');
  };
  const closeActiveModal = () => {
    setIsActive(false);
    modalBg.classList.remove('active');
  };

  return (
    <Wrapper className={isActive ? 'image-modal' : ''}>
      <FaWindowClose className="close-image-modal" onClick={closeActiveModal} />
      <img src={main} alt="" className="main" onClick={imageModalActive} />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt=""
              key={index}
              className={`${image === main ? 'active' : null}`}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  &.image-modal {
    position: fixed;
    height: 90vh;
    width: 90vw;
    background: rgb(255, 255, 255);
    left: 5vw;
    top: 5vh;
    padding: 4rem;
    border-radius: 12px;
    .close-image-modal {
      display: flex;
      position: absolute;
      right: 100px;
      font-size: 40px;
      cursor: pointer;
      &:hover {
        color: var(--clr-yellow-dark);
      }
    }
    .main {
      height: 60vh;
    }
    .gallery {
      margin-top: 40px;
    }

    .gallery img {
      height: 150px;
    }
  }
  .main {
    height: 600px;
  }
  .close-image-modal {
    display: none;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
      border-radius: 5%;
      border: 4px solid transparent;
      &.active {
        border: 4px solid var(--clr-primary-5);
      }
    }
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
