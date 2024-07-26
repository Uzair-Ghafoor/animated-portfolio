import React from 'react';
import {
  CallToAction,
  Footer,
  Header,
  Hero,
  LogoTicker,
  Pricing,
  Product,
  Testimonial,
  Value,
} from './sections';

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Product />
      <Value />
      <Pricing />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
};

export default page;
