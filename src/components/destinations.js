import React from 'react'
import vegas from "../images/vegas.jpg";
import disney from "../images/disney.jpg";
import kyoto from "../images/kyoto.jpg";
import lotus from "../images/lotus.jpg";
import rosario from "../images/rosario.jpg";
import venice from "../images/venice.jpg";
import CAPA from "../images/CAPA.jpg";
import {FiSearch } from 'react-icons/fi';

import'./about.css'
const Dest = () => {
  return (
  <>
    <div className="container mt-5">
      <div className='my-5'>
      </div>
        <div>
          <h1 className="text-center  size">Destinations :- </h1>
          <p className='fs-4 text-center my-5' data-aos="fade-left" data-aos-duration="1500"><span className='fs-1 text-danger destination'>Welcome</span> to your one stop travel destination <span className='fw-bold'>"unplanned-trips"</span> <br/>
        
        We are here for you as your ultimate guide <span className='fw-bold'>"for visting world's most amazing places."</span> </p>
        <p className='fs-5 pb-5' data-aos="fade-right" data-aos-duration="1500"> Our website is designed to help you plan your dream vacation and cerate unforgettable memories. we offer a 
        comprehensive collection of destinations from around the world,providing detailed information of each location <span className='fw-bold'> "including things sto do , places to stay , 
        best aactivitties you can do and the most important best time to visit for best experience". </span> so , whether you are seasonal 
        traveler or a first timer ,<span className='fw-bold'>our travel destination website has everything youneed to plan your dream vacation.</span>start exploring today and get ready to embark on the journey of a life time</p>
        <hr className='w-75 m-auto'/>
        </div>
        {/* vegas  */}
        <div className="row my-5" data-aos="fade-up" data-aos-offset="300">
          <div className="col-lg-4 a">
            <img
              className="img-fluid b"
              src={vegas}
              style={{ height: "30vh", width: "100%" }}
            />
          </div>
          <div className="col-lg-8 ">
            <h2>
              VEGAS
              <span className="text-info-emphasis">/ U.S</span> <hr />
            </h2>
            <p className="fs-3 destination">
              <span className="text-bold fs-1 text-secondary">V</span>EGAS is an
              internationally renowned major resort city, known primarily for
              its gambling, shopping, fine dining, entertainment, and nightlife.
              The Las Vegas Valley as a whole serves as the leading financial,
              commercial, and cultural center for Nevada.
            </p>
            <button type="button" class="btn btn-light mb-5">
              EXPLORE MORE
            </button>
          </div>
        </div>
        {/* kyoto  */}
        <div className="row my-5" data-aos="fade-up" data-aos-offset="300">
          <div className="col-lg-8 ">
            <h2>
              KYOTO
              <span className="text-info-emphasis">/ JAPAN</span> <hr />
            </h2>
            <p className="fs-3 destination">
              <span className="text-bold fs-1 text-secondary">K</span>
              <span className="text-bold">YOTO </span> once the capital of
              Japan, is a city on the island of Honshu. It's famous for its
              numerous classical Buddhist temples, as well as gardens, imperial
              palaces, Shinto shrines and traditional wooden houses. It’s also
              known for formal traditions such as kaiseki dining, consisting of
              multiple courses of precise dishes, and geisha, female
              entertainers often found in the Gion district.
            </p>
            <button type="button" class="btn btn-light mb-5">
              EXPLORE MORE
            </button>
          </div>
          <div className="col-lg-4 a">
            <img
              className="img-fluid b"
              src={kyoto}
              style={{ height: "30vh", width: "100%" }}
            />
          </div>
        </div>
        {/* rosario  */}
        <div className="row my-5" data-aos="fade-up" data-aos-offset="300">
          <div className="col-lg-4 a">
            <img
              className="img-fluid b"
              src={rosario}
              style={{ height: "30vh", width: "100%" }}
            />
          </div>
          <div className="col-lg-8">
            <h2>
              ROSARIO
              <span className="text-info-emphasis">/ ARGENTINA</span> <hr />
            </h2>
            <p className="fs-3 destination">
              <span className="text-bold fs-1 text-secondary">R</span>OSARIO
              Argentina's third largest city, is known to most as the birthplace
              of <span className="text-info"> "Lionel Messi"</span> . But
              Rosario also attracts thousands of students and young artists as
              well as growing numbers of tourists.
            </p>
            <button type="button" class="btn btn-light mb-5">
              EXPLORE MORE
            </button>
          </div>
        </div>
        {/* venice  */}
        <div className="row my-5" data-aos="fade-up" data-aos-offset="300">
          <div className="col-lg-8 ">
            <h2>
              VENICE
              <span className="text-info-emphasis">/ ITLEY</span> <hr />
            </h2>
            <p className="fs-3 destination">
              <span className="text-secondary fs-1">V</span>ENICE known also as
              the “City of Canals,” “The Floating City,” and “Serenissima,” is
              arguably one of Italy's most picturesque cities. With its winding
              canals, striking architecture, and beautiful bridges, Venice is a
              popular destination for travel.
            </p>
            <button type="button" class="btn btn-light mb-5">
              EXPLORE MORE
            </button>
          </div>
          <div className="col-lg-4 a">
            <img
              className="img-fluid b"
              src={venice}
              style={{ height: "30vh", width: "100%" }}
            />
          </div>
        </div>
        {/* disneyland  */}
        <div className="row my-5" data-aos="fade-up" data-aos-offset="300">
          <div className="col-lg-4 a">
            <img
              className="img-fluid b"
              src={disney}
              style={{ height: "30vh", width: "100%" }}
            />
          </div>
          <div className="col-lg-8">
            <h2>
              DISNEYLAND
              <span className="text-info-emphasis">/ PARIS</span> <hr />
            </h2>

            <p className="fs-3 destination">
              <span className="text-secondary fs-1">D</span>ISNEYLAND Paris is
              an entertainment resort in Chessy, France, 32 km east of Paris. It
              encompasses two theme parks, resort hotels, Disney Nature Resorts,
              a shopping, dining and entertainment complex, and a golf course.
              Disneyland Park is the original theme park of the complex, opening
              in 1992.
            </p>
            <button type="button" class="btn btn-light mb-5">
              EXPLORE MORE
            </button>
          </div>
        </div>
        {/* sydney  */}
        <div className="row my-5" data-aos="fade-up" data-aos-offset="300">
          <div className="col-lg-8 ">
            <h2>
              SYDNEY
              <span className="text-info-emphasis">/ PARIS</span> <hr />
            </h2>
            <p className="fs-3 destination">
              <span className="fs-1 text-secondary">S</span>Ydney , This vibrant
              city is known for its yacht-studded harbour, superb beaches, and
              the iconic Opera House with its towering sail structure. Once a
              British colony of exiled convicts, Sydney has grown into
              Australia's most diverse and cosmopolitan city with an exciting
              food, arts and entertainment scene.
            </p>
            <button type="button" class="btn btn-light mb-5">
              EXPLORE MORE
            </button>
          </div>
          <div className="col-lg-4 a">
            <img
              className="img-fluid b"
              src={lotus}
              style={{ height: "30vh", width: "100%" }}
            />
          </div>
        </div>
        {/* CAPDOCIA  */}
        <div className="row my-5" data-aos="fade-up" data-aos-offset="300">
        <div className="col-lg-4 a">
            <img
              className="img-fluid b"
              src={CAPA}
              style={{ height: "30vh", width: "100%" }}
            />
          </div>
          <div className="col-lg-8">
            <h2>
              CAPADOCIA
              <span className="text-info-emphasis">/ TURKEY</span> <hr />
            </h2>
            <p className="fs-3 destination">
              <span className="fs-1 text-secondary">C</span>APPADOCIA is a land
              famous for its distinctive rock formation, historical heritage,
              and scenic hot air balloon trips. Sitting in Central Anatolia,
              this historical region attracts crowds of tourists from all over
              the world.
            </p>
            <button type="button" class="btn btn-light mb-5">
              EXPLORE MORE
            </button>
          </div>
        
        </div>
      </div>
  </>
  )
}

export default Dest