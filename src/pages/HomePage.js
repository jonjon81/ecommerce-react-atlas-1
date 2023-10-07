import React from 'react';
import { FeaturedProducts, CategoryProducts, Hero, Services, Contact } from '../components';
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <CategoryProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
