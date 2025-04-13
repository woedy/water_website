import React from 'react';
import backgroundImg from '../../images/cover/cchh.png';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* Hero Section */}
      <header className="bg-blue-500 py-20 md:py-32 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-30">
          <img src={backgroundImg} alt="Clean Water Hero" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            💧 Quench Their Thirst: Bring Clean Water to Communities in Need
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join us in our mission to provide sustainable access to clean and safe water, transforming lives and building healthier futures.
          </p>
          <a
            href="#donate"
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 inline-block"
          >
            Donate Now
          </a>
        </div>
      </header>

      {/* Problem & Solution Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              The Urgent Need for Clean Water
            </h2>
            <p className="text-gray-700 mb-4">
              Imagine a life without easy access to clean water. For many communities around the world, this is a daily reality. It leads to preventable diseases, hinders education, and limits economic opportunities.
            </p>
            <p className="text-gray-700 mb-4">
              Your contribution can make a tangible difference, offering health, hope, and a brighter future.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://via.placeholder.com/500x350?text=Water+Scarcity"
              alt="Water Scarcity"
              className="rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-lg"></div>
          </div>
        </div>
        {/* Additional Image in Problem Section */}
        <div className="container mx-auto px-4 mt-12">
          <img
            src="https://via.placeholder.com/900x200?text=Children+and+Water"
            alt="Children Getting Water"
            className="rounded-lg shadow-md w-full object-cover object-center"
          />
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            How We're Making a Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/100x80?text=Community+Icon"
                alt="Community-Led Projects"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Community-Led Projects</h3>
              <p className="text-gray-600">We work directly with communities to identify their specific needs and implement sustainable water solutions.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/100x80?text=Sustainable+Icon"
                alt="Sustainable Solutions"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Sustainable Solutions</h3>
              <p className="text-gray-600">Our focus is on long-term impact through the implementation of reliable and environmentally friendly water systems.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/100x80?text=Transparency+Icon"
                alt="Transparency & Impact"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Transparency & Impact</h3>
              <p className="text-gray-600">We believe in full transparency, providing updates on how your donations are making a real difference in people's lives.</p>
            </div>
          </div>
          {/* Additional Image in Approach Section */}
          <div className="mt-12 text-center">
            <img
              src="https://via.placeholder.com/600x150?text=Our+Work+Image"
              alt="Our Work in Action"
              className="rounded-lg shadow-md inline-block"
            />
          </div>
        </div>
      </section>

      {/* Impact Section (with progress bars/counters) */}
      <section className="py-12 md:py-24 bg-blue-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-20">
          <img src="https://via.placeholder.com/1920x600?text=Impact+Background" alt="Impact Background Texture" className="w-full h-full" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-semibold mb-8">Our Impact So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1,500+</div>
              <p className="text-lg">Lives Impacted</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-lg">Clean Water Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50,000+</div>
              <p className="text-lg">Raised So Far</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg">Every drop counts. Help us reach more communities.</p>
            <a
              href="#donate"
              className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 mt-4 inline-block"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Optional but Recommended) */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Stories of Hope
          </h2>
          {/* Testimonial 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center">
              <img
                src="https://via.placeholder.com/80x80?text=Elder+Photo"
                alt="Community Elder"
                className="rounded-full mb-4"
              />
              <p className="italic text-gray-700 mb-4 text-center">"Before this project, we had to walk miles for water that wasn't even clean. Now, our children are healthier and can go to school."</p>
              <p className="text-gray-600 font-semibold">- A Community Elder</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center">
              <img
                src="https://via.placeholder.com/80x80?text=Mother+Photo"
                alt="A Mother"
                className="rounded-full mb-4"
              />
              <p className="italic text-gray-700 mb-4 text-center">"Access to clean water has transformed our village. We can now focus on building a better future."</p>
              <p className="text-gray-600 font-semibold">- A Mother</p>
            </div>
            {/* Additional Testimonial/Image */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center">
              <img
                src="https://via.placeholder.com/80x80?text=Child+Photo"
                alt="A Child"
                className="rounded-full mb-4"
              />
              <p className="italic text-gray-700 mb-4 text-center">"I can drink clean water now, and I feel much better!"</p>
              <p className="text-gray-600 font-semibold">- A Young Boy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Donation Section */}
      <section id="donate" className="py-16 md:py-24 bg-blue-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-20">
          <img src="https://via.placeholder.com/1920x600?text=Donation+Background" alt="Donation Background Texture" className="w-full h-full" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-semibold text-blue-500 mb-8">
            Make a Difference Today
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Your generous donation will directly support our efforts to bring clean water to communities that need it most. Choose an amount that resonates with you.
          </p>
          {/* Donation Amount Options (you can customize these) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-blue-200 transition duration-300 shadow-md">$25</button>
            <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-blue-200 transition duration-300 shadow-md">$50</button>
            <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-blue-200 transition duration-300 shadow-md">$100</button>
          </div>
          {/* Custom Donation Input (optional) */}
          <div className="max-w-md mx-auto mb-8">
            <input
              type="number"
              placeholder="Enter custom amount ($)"
              className="w-full border border-gray-300 rounded-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 mt-4">
              Donate Now
            </button>
          </div>
          <p className="text-sm text-gray-600">Secure and encrypted payment processing.</p>
          {/* Additional Image in Donation Section */}
          <div className="mt-8">
            <img
              src="https://via.placeholder.com/400x100?text=Donate+Banner"
              alt="Donate Banner"
              className="rounded-md shadow-md inline-block"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="mb-2">&copy; {new Date().getFullYear()} Quench Their Thirst. All rights reserved.</p>
          {/* Add social media links, contact information, etc. */}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;