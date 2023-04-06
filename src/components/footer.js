import React from 'react'
import{Link} from 'react-router-dom'
import {FiFacebook ,FiTwitter ,FiInstagram ,FiGithub ,FiLinkedin } from 'react-icons/fi/';

const Footer = () => {
  return (
    <div>

{/* Footer */}
<footer className="text-center text-lg-start bg-secondary text-white">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks : </span>
    </div>
    {/* Left */}
    {/* Right */}
    <div>
      <Link to={''} className="me-4 link-secondary">
        < FiFacebook className='text-white fs-4'/>
      </Link>
      <Link to={''} className="me-4 link-secondary">
        <FiTwitter  className='text-white fs-4'/>
      </Link>
      <Link to={''} className="me-4 link-secondary">
        <FiInstagram className='text-white fs-4'/>
      </Link>
      <Link to={''} className="me-4 link-secondary">
        <FiLinkedin className='text-white fs-4'/>
      </Link>
      <Link to={''} className="me-4 link-secondary">
        <FiGithub className='text-white fs-4' />
      </Link>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary" />Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link to={''} className="text-decoration-none text-white">Angular</Link>
          </p>
          <p>
            <Link to={''} className="text-decoration-none text-white">React</Link>
          </p>
          <p>
            <Link to={''} className="text-decoration-none text-white">Vue</Link>
          </p>
          <p>
            <Link to={''} className="text-decoration-none text-white">Laravel</Link>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to={''} className=" text-decoration-none text-white">Pricing</Link>
          </p>
          <p>
            <Link to={''} className="text-decoration-none text-white">Settings</Link>
          </p>
          <p>
            <Link to={''} className="text-decoration-none text-white">Orders</Link>
          </p>
          <p>
            <Link to={''} className="text-decoration-none text-white">Help</Link>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary" /> IN 560011 , INDIA</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary" />
            info@gmail.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary" /> + 91 6234 567 880</p>
          <p><i className="fas fa-print me-3 text-secondary" /> + 91 6234 567 890</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(1, 1, 1, 0.050)'}}>
    © 2021 Copyright:
    <Link className="text-reset fw-bold text-decoration-none" to={"https://mdbootstrap.com/"}>  Mytemplate.com</Link>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}

    </div>
  )
}

export default Footer ;