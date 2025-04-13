import { useEffect, useState } from 'react';
import backgroundImg from '../../images/cover/hero1.jpg';
import problem from '../../images/cover/problem.jpg';
import children from '../../images/cover/children.png';
import comLed from '../../images/cover/com-led.jpg';
import waterPro from '../../images/cover/water-pro.jpg';
import waterCrisis from '../../images/cover/Water-crisis.jpeg';
import waterBottle from '../../images/cover/water-bottle.webp';
import riverGhana from '../../images/cover/river-ghana.jpg';
import mama from '../../images/user/mama.png';
import olu from '../../images/user/olu.png';
import kid from '../../images/user/kid.png';
import waterKid from '../../images/cover/kids-water.jpg';
import logoImg from '/33879.webp';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* Fixed Top Navigation */}

      <div className="fixed top-0 left-0 w-full bg-blue-500 text-white z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <a href="/" className="flex items-center">
            <img src={logoImg} alt="Your Logo" className="h-8 md:h-10" />
            <span className="font-bold text-lg md:text-xl ml-2">
              Clean Water Africa
            </span>
          </a>

          {/* Hamburger Toggle (Mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 md:space-x-6">
              <li>
                <a href="#about" className="hover:text-blue-100 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-100 transition">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-blue-100 transition">
                  Impact Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-100 transition">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#donate"
                  className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition"
                >
                  Donate
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-600">
            <ul className="flex flex-col space-y-2 px-4 pb-4">
              <li>
                <a href="#about" className="block py-2 hover:text-blue-100">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="block py-2 hover:text-blue-100">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#impact" className="block py-2 hover:text-blue-100">
                  Impact Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 hover:text-blue-100">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#donate"
                  className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition inline-block mt-2"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Hero Header Section */}
      <header
        className="bg-black text-white relative overflow-hidden flex flex-col items-center justify-center"
        style={{ minHeight: '90vh', padding: '6rem 4rem 2rem' }} // Extra top padding for fixed nav
      >
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-40">
          <img
            src={backgroundImg}
            alt="Clean Water Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Text Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            💧 Quench Their Thirst: <br/>Bring Clean Water to Communities in Need
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join us in our mission to provide sustainable access to clean and
            safe water, transforming lives and building healthier futures.
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
              Imagine a life without easy access to clean water. For many
              communities around the world, this is a daily reality. It leads to
              preventable diseases, hinders education, and limits economic
              opportunities.
            </p>
            <p className="text-gray-700 mb-4">
              Your contribution can make a tangible difference, offering health,
              hope, and a brighter future.
            </p>
          </div>
          <div className="relative">
            <img
              src={problem}
              alt="Water Scarcity"
              className="rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-blue-100 opacity-20 rounded-lg"></div>
          </div>
        </div>
        {/* Additional Image in Problem Section */}
        <div className="container mx-auto px-4 mt-12">
          <img
            src={children}
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
                src={comLed}
                alt="Community-Led Projects"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Community-Led Projects
              </h3>
              <p className="text-gray-600">
                We work directly with communities to identify their specific
                needs and implement sustainable water solutions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src={waterPro}
                alt="Sustainable Solutions"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Sustainable Solutions
              </h3>
              <p className="text-gray-600">
                Our focus is on long-term impact through the implementation of
                reliable and environmentally friendly water systems.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
   src={waterCrisis}
                   alt="Transparency & Impact"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Transparency & Impact
              </h3>
              <p className="text-gray-600">
                We believe in full transparency, providing updates on how your
                donations are making a real difference in people's lives.
              </p>
            </div>
          </div>
          {/* Additional Image in Approach Section */}
          <div className="mt-12 text-center">
            <img
   src={waterBottle}     
            alt="Our Work in Action"
              className="rounded-lg shadow-md inline-block"
            />
          </div>
        </div>
      </section>

      {/* Impact Section (with progress bars/counters) */}
      <section className="py-12 md:py-24 bg-blue-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-20">
          <img
src={riverGhana}     
            alt="Impact Background Texture"
            className="w-full h-full"
          />
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
            <p className="text-lg">
              Every drop counts. Help us reach more communities.
            </p>
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
src={olu}   
                alt="Community Elder"
                className="rounded-full mb-4 h-70 w-70"
              />
              <p className="italic text-gray-700 mb-4 text-center">
                "Before this project, we had to walk miles for water that wasn't
                even clean. Now, our children are healthier and can go to
                school."
              </p>
              <p className="text-gray-600 font-semibold">- A Community Elder</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center">
              <img
             src={mama}   
                alt="A Mother"
                className="rounded-full mb-4 h-70 w-70"
              />
              <p className="italic text-gray-700 mb-4 text-center">
                "Access to clean water has transformed our village. We can now
                focus on building a better future."
              </p>
              <p className="text-gray-600 font-semibold">- A Mother</p>
            </div>
            {/* Additional Testimonial/Image */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center">
              <img
                src={kid}   
                alt="A Child"
                className="rounded-full mb-4 h-70 w-70"
              />
              <p className="italic text-gray-700 mb-4 text-center">
                "I can drink clean water now, and I feel much better!"
              </p>
              <p className="text-gray-600 font-semibold">- A Young Girl</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Donation Section */}
      <section
        id="donate"
        className="py-16 md:py-24 bg-black relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-20">
          <img
          src={waterKid}  
            alt="Donation Background Texture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-semibold text-blue-500 mb-8">
            Make a Difference Today
          </h2>
          <p className="text-lg text-white 0 mb-8">
            Your generous donation will directly support our efforts to bring
            clean water to communities that need it most. Choose an amount that
            resonates with you.
          </p>
          {/* Donation Amount Options (you can customize these) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-blue-200 transition duration-300 shadow-md">
              $25
            </button>
            <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-blue-200 transition duration-300 shadow-md">
              $50
            </button>
            <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-blue-200 transition duration-300 shadow-md">
              $100
            </button>
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
          <p className="text-sm text-white">
            Secure and encrypted payment processing.
          </p>
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
      <footer className="bg-gray-800 py-8 text-black text-center">
        <div className="container mx-auto px-4">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Clean Water Africa. All rights
            reserved.
          </p>
          {/* Add social media links, contact information, etc. */}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
