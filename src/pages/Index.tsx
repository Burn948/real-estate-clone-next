import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AreaTiles from '../components/AreaTiles';
import FeaturedProperties from '../components/FeaturedProperties';
import ServicesSection from '../components/ServicesSections';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Find New Home - Discover Your Perfect Property in Montenegro</title>
        <meta name="description" content="Check our luxury properties of distinguished style, location and charm in different regions of Montenegro. Find your dream home today." />
        <meta property="og:title" content="Find New Home - Discover Your Perfect Property in Montenegro" />
        <meta property="og:description" content="Check our luxury properties of distinguished style, location and charm in different regions of Montenegro. Find your dream home today." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <AreaTiles />
          <FeaturedProperties />
          <ServicesSection />
          <BlogSection />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
