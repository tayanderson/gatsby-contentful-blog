import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import siteLogo from '../images/dd-logo2.png';
import { Link } from 'gatsby';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={siteLogo} alt="Drink Designer" style={{ width: '200px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start">
              <Link className="navbar-item" to="/cocktails">
                Cocktails
              </Link>
              <Link className="navbar-item" to="/articles">
                Articles
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://instagram.com/thedrinkdesigner"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon is-medium">
                  <FaInstagram size="2em" />
                </span>
              </a>
            </div>
        </div>
      </nav>
    )
  }
}


export default Navbar;
