import React from 'react'
import'./car.css'
import Img1 from "../images/traveler.jpg";
import Img2 from "../images/tp.jpg";
import Img3 from "../images/ss.jpg";
const Hpage = () => {
  return (
    <>
   
<div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="1000">
      <img src={Img1} className="d-block w-100" alt="..." />
      <div className="carousel-caption mb-5 pb-5 size" >
        <h2> - Lao Tzu -</h2>
        <hr className='m-auto w-25 '/>
        <p className='text-bold fs-3'> “A journey of a thousand miles begins with a single step”</p>
      </div>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src={Img2} className="d-block w-100" alt="..." />
      <div className="carousel-caption mb-5 pb-5 size">
        <h2> -  Katie Thurmes -</h2>
        <hr className='m-auto w-25 '/>
        <p className='text-bold fs-3'> “We take photos as a return ticket to a moment otherwise gone”</p>
      </div>
    </div>
    <div className="carousel-item" data-interval="3000">
      <img src={Img3} className="d-block w-100" alt="..." />
      <div className="carousel-caption mb-5 pb-5 size">
        <h2> - Jo Walton -</h2>
        <hr className='m-auto w-25 '/>
        <p className='text-bold fs-3'> “There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them”</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<section>
  <div className='container my-5'>
  <div className='row text-center'>
  <div className='col-lg-3 border border-dark'>
<select>
  
</select>
  </div>
  <div className='col-lg-3 border border-dark'> <h1>hello</h1></div>
  <div className='col-lg-3 border border-dark'> <h1>hello</h1></div>
  <div className='col-lg-3 border border-dark'> <h1>hello</h1></div>
  </div>
  </div>
</section>


    </>
  )
}

export default Hpage ;