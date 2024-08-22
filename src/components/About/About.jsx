import React from 'react';

const About = () => {
  return (
    <div>
      <h2 className="items-center text-center text-5xl text-bold mb-10 text-orange-500 font-bold">Our Mission_</h2>
      <div className="flex items-center justify-center">
        <div className="text-center card w-3/4 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">
              Our mission is to bring joy, creativity, and learning to children across Bangladesh by providing high-quality, safe, and affordable toys. We aim to be a trusted partner for parents and educators in fostering imaginative play and child development.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="card bg-base-300 w-3/4 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">Why</h2>
            <p>We believe that every child deserves access to toys that inspire creativity, enhance learning, and bring happiness. Play is a vital part of childhood, and our toys are carefully curated to enrich the lives of children in Bangladesh, promoting fun and educational growth.</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mb-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4'>
          <div className="card bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">WHAT</h2>
              <p>We believe that every child deserves access to toys that inspire creativity, enhance learning, and bring happiness. Play is a vital part of childhood, and our toys are carefully curated to enrich the lives of children in Bangladesh, promoting fun and educational growth.</p>
            </div>
          </div>
          <div className="card bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">HOW</h2>
              <p>By collaborating with local and international manufacturers, we ensure our toys meet the highest safety and quality standards. Our online platform makes it easy for parents to shop for toys from the comfort of their homes, with a user-friendly interface, secure payment options, and reliable delivery across Bangladesh.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;