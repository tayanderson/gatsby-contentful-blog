import React, { useState } from "react";
import { FaInstagram } from 'react-icons/fa';
import siteLogo from '../images/logo1.png';
import { graphql, Link, useStaticQuery } from 'gatsby';
import config from '../utils/siteConfig'
import Headroom from 'react-headroom';

function Navbar() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <Headroom>
    <header className="bg-cream-light w-full z-10 border-b border-primary">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-8 md:py-6 md:px-8 container mx-auto">
        <Link className="flex items-center no-underline" to="/">
          <img src={siteLogo} alt={`${config.siteTitle}`} style={{ width: '200px' }} />
        </Link>

        <button
          className="block md:hidden border border-white flex items-center py-2 rounded text-black"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/cocktails`,
              title: `Cocktails`
            },
            {
              route: `/articles`,
              title: `Articles`
            },
            {
              route: `/about`,
              title: `About`
            },
            {
              route: `/contact`,
              title: `Contact`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline font-body hover:text-highlight transition-colors transition-ease transition-250 text-lg text-primary"
              key={link.title}
              to={link.route}
              activeClassName="active"
            >
              {link.title}
            </Link>
          ))}
          <a
            className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline font-body font-semibold hover:text-white hover:bg-primary transition-colors transition-ease transition-250 tracking-wider text-lg text-primary border-2 border-primary p-2"
            href="https://instagram.com/thedrinkdesigner"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  </Headroom>
  );
}

export default Navbar;
