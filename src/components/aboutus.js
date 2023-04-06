import React from "react";
import Globe from "../images/globe2.jpg";

// import vegas from "../images/vegas.jpg";
// import disney from "../images/disney.jpg";
// import kyoto from "../images/kyoto.jpg";
// import lotus from "../images/lotus.jpg";
// import rosario from "../images/rosario.jpg";
// import CAPA from "../images/CAPA.jpg";

// india 
import Allev from "../images/allepy.jpg";
import Banaras from "../images/banaras.jpg";
import bhv from "../images/bh-v.jpg";
import hth from "../images/ht-h.jpg";
import msv from "../images/ms-v.jpg";
import taj from "../images/taj.jpg";


// europe 
import moscow from "../images/moscow-v.jpg";
import swith from "../images/swit-h.jpg";
import russsiav from "../images/russsia-v.jpg";
import bigben from "../images/bigben-h.jpg";
import londonh from "../images/london-h.jpg";
import paris from "../images/paris-v.jpg";
import engv from "../images/eng-v.jpg";
import venice from "../images/venice.jpg";
import "./about.css";
const About = () => {
  return (
    <>
      {" "}
      {/* about us  */}
      <div className="container my-5">
        <div>
          <h1 className="text-center mt-5 size">
            About <span className="text-secondary">us</span>
          </h1>
          <hr className="w-25 m-auto" />
        </div>
        <div className="row my-5">
          <div className="col-lg-6 my-5">
            <h1>
              We deals in <span class="text-secondary">travel </span>wanna know
              why ?
            </h1>
            <p className="fs-5">
              <span className="text-bold fs-1 text-secondary">B</span>{" "}
              <span className="text-bold">
                ecause Travel takes us out of our comfort zones and inspires us
                to see, taste and try new things.
              </span>{" "}
              It constantly challenges us, not only to adapt to and explore new
              surroundings, but also to engage with different people, to embrace
              adventures as they come and to share new and meaningful
              experiences with friends and loved ones.
            </p>
            <button type="button" class="btn btn-light mb-5">
              READ MORE
            </button>
          </div>
          {/* about us image  */}
          <div className="col-lg-6 m-auto text-end ">
            <img src={Globe} className="img-fluid" />
          </div>
        </div>
      </div>
      {/* <div className="container my-5">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/* tabs  */}
   <div classname="container">
  <div className="my-5">
    <h1 className="text-center size"> Portfolio</h1>
    <p className="fs-4 text-center mt-5"> <span className='fs-1 text-danger destination'>Welcome</span> to our protfolio of great destinations by <span className='fw-bold'>"unplanned-trips"</span></p>
  </div>
  <div classname="container m-auto size">
    <ul className="nav nav-pills  d-flex justify-content-center mb-3" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active border-0 rounded-pill  text-black" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">INDIA</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link  border-0 rounded-pill  text-black" id="pills-about-tab" data-bs-toggle="pill" data-bs-target="#pills-about" type="button" role="tab" aria-controls="pills-about" aria-selected="true">ASIA</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link border-0 rounded-pill  text-black" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">EUROPE</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link border-0 rounded-pill  text-black" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">NORTH-AMERICA</button>
      </li>
    </ul>
    <div className="tab-content  my-5" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className="row px-5 mx-5 my-4">
<div className="col-lg-4 "> <img src={Allev} className="  img-fluid mb-5" /> <img src={taj} className="  img-fluid" /></div>
<div className="col-lg-4 ">  <img src={Banaras} className="  img-fluid pt-5"/>  <img src={msv} className="  img-fluid my-5" /></div>
<div className="col-lg-4 ">  <img src={bhv} className="  img-fluid "/>  <img src={hth}className="  img-fluid my-5" /></div>

</div>
      </div>
      <div className="tab-pane fade" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab">...b</div>
      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
      <div className="row px-5 mx-5 my-4">
      <div className="col-lg-4 "> <img src={paris} className="  img-fluid mb-5" /> <img src={swith} className="  img-fluid" /> <img src={venice} className="  img-fluid mt-5" /></div>
<div className="col-lg-4 ">   <img src={londonh} className="  img-fluid my-3" />  <img src={bigben}className="  img-fluid mt-5" /> <img src={engv}className="  img-fluid my-5" /> </div>
<div className="col-lg-4 ">  <img src={moscow} className="  img-fluid "/>   <img src={russsiav} className="  img-fluid pt-5"/></div>
</div>  </div>
      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...s</div>
    </div>
  </div>
</div>
<hr/>

{/* faq  */}
      <div className='container-fluid mt-5 bg'>
        <h1 className="text-center my-5 pt-5 size"> FAQ</h1>
 <div className="row  text-black " >
<div className="col-lg-6" > 
<h4> <span className="fs-5 size">Q -</span> Why choose us ? </h4>
<p className="text-justify"><span className="fs-5 size">A :</span> This is one the biggest question for a travel to choose which site for best experiences.
so ,<br/> <span className="fw-bold"> you might be answerd why why you choose us.</span> we work in trust and the best thing we can give you is our trust . once a great man said -
 <span className="fw-bold">" The most expensive thing in the world is trust , cheap people cant afford it ."</span> We realise that some of these security processes look cumbersome. However our interest is not only in providing you the best in class travel product but also in ensuring that your data and security is truly protected. Hence we urge you to bear with us and help us to help you. </p>
</div>
<div className="col-lg-6" > 
<h4> <span className="fs-5 size">Q -</span> 	Is unplanned-trips.com a safe site to make online bookings ? </h4>
<p><span className="fs-5 size">A :</span> 
  Yes, we are committed to protecting our customer’s information. Our staff of security technology professionals uses a range of the best security technology available. Your information is secured from unauthorized access from the Internet using the Thawte Certification Authority. We protect the connection between your computer and our server from eavesdropping through industry-standard encryption technology. We continually assess new technology for protecting your information to make sure that our information handling practices are in accordance with the highest industry standards and best practices on the Internet.
 </p>
</div>
<hr className="my-5 w-75 m-auto"/>
<div className="col-lg-6" > 
<h4> <span className="fs-5 size">Q -</span> 	What payment modes are accepted ? </h4>
<p><span className="fs-5 size">A :</span> This is one the biggest question for a travel to choose which site for best experiences.
so ,The payment mode accepted depends on the airline on which you are booking. In general, all airlines accept MasterCard and Visa and some also accept American Express and Diners Club. As an enhanced security measure, some airlines require an additional verification step – either Verified By Visa or Secure by MasterCard. When you are redirected to the airline page for making your booking, please pay attention to the payment modes available for you.   </p>
</div>
<div className="col-lg-6" > 
<h4> <span className="fs-5 size">Q -</span> 	How will my hotel booking or vacation package be confirmed ? </h4>
<p><span className="fs-5 size">A :</span> This is one the biggest question for a travel to choose which site for best experiences.
so ,  	For all hotel bookings made on the website, you will receive a confirmation number via e-mail.

For hotel and vacation packages booked over the phone, our reservation agents would process all your travel details and check for availability with the hotel. Your travel would be confirmed over e-mail as soon as we receive a confirmation from the hotel. </p>
</div>
 </div>
</div>


    </>
  );
};

export default About;
