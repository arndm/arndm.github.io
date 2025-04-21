import React from 'react';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import Skills      from './components/Skills';
import Journey     from './components/Journey';
import Quotes      from './components/Quotes';
import Contact     from './components/Contact';
import Blog        from './components/Blog';
import BucketList  from './components/BucketList';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <>
      <Navbar />

      {/* Hero → “About” */}
      <SocialLinks />
      <section id="about">
        <Hero />
      </section>

      {/* Subsequent page sections */}
      <section id="skills">
        <Skills />
      </section>

      <section id="journey">
        <Journey />
      </section>

      <section id="quotes">
        <Quotes />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="bucket">
        <BucketList />
      </section>
    </>
  );
}

export default App;
