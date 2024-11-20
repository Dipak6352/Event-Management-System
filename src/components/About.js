import React from 'react'
import'./header.css';


export const About = () => {
  return (
   <>
   <div className="container-fluid ha-1 d-flex justify-content-center align-items-center">
    <div className="main"> <p className='text-center text-white '><pre>ALL  YOU  NEED  TO  KNOW</pre></p>
    <h1 className='text-center text-warning fw-bold '>ABOUT</h1>
    <h1 className='text-center text-white fw-bold'>HARMONY</h1>
    <p className='text-center text-light fw-semibold '><pre>HOME    <strong className='fw-bold'>|</strong>   About Us</pre></p>
    </div>
   </div>

   {/* second part */}
   <div className="container-fluid px-5 py-4 ha-2 py-3">
  <div className="row">
    <div className="col-sm-4 mb-4 sm-mb-0 ">
    <p className='text-white lh-1'>we are Harmony</p>
    <h3 className='text-white fw-bold lh-1'>
        No-1 <br></br> Event Management
    </h3>
    <p className='text-white lh-1 '>get started!</p>
    </div>

    <div className="col-sm-4 text-white  mb-4 sm-mb-0 ">
    <div className=" location-title text-center mt-2">
              <h3 className="text-white">Our Mission</h3>
            </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit doloremque placeat commodi aspernatur dicta quam officia? Amet, quo dolore!</p>
      <p className='fw-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, praesentium?</p>
      </div>
    <div className="col-sm-4 text-white  mb-4 sm-mb-0 ">
    <div className=" location-title text-center mt-2">
              <h3 className="text-white">Our Vission</h3>
            </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit doloremque placeat commodi aspernatur dicta quam officia? Amet, quo dolore!</p>
      <p className='fw-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, praesentium?</p>
      </div>
      </div>
      </div>
     {/* THIRD PART */}
     <div className="container-fluid ha-6 py-5 ">
      <div className="row">
        <div className="col-sm-4 d-md-block text-center ">
     <img className='img-fluid ' style={{boxShadow:"rgb(33, 33, 71)",maxHeight:'350px'}} src="./images/harmony.png" alt="" />
        </div>
        <div className="col-md-8 px-md-3 my-3"> 
            <div className="main mb-3">
              <p className='m-0 opacity-50 text-white h6' >Harmony awaed</p>
              <h3 className='m-0 opacity-50 text-white'>Our Winning Awards</h3>
            </div>
          <div className="container-fluid">
            <div className="row  text-wrap mb-4">
             <div className="col-sm-2 col">
              <h5 className='text-warning opacity-50'>August-2015</h5>
             </div>
              <div className="col-sm-10">
                <p className='h6 fw-bold opacity-50 text-white'>First place for winning Awards</p>
                <p className='text-white opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, saepe?</p>
                </div>
            </div> 
            <div className="row text-wrap mb-4">
             <div className="col-sm-2 col">
              <h5 className='text-warning opacity-50'>August-2015</h5>
             </div>
              <div className="col-sm-10">
                <p className='h6 fw-bold opacity-50 text-white'>First place for winning Awards</p>
                <p className='text-white opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, saepe?</p>
                </div>
            </div> 
            <div className="row  text-wrap mb-4">
             <div className="col-sm-2 col ">
              <h5 className='text-warning opacity-50'>August-2015</h5>
             </div>
              <div className="col-sm-10">
                <p className='h6 fw-bold opacity-50 text-white'>First place for winning Awards</p>
                <p className='text-white opacity-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, saepe?</p>
                </div>
            </div> 
          </div>

        </div>
      </div>
     
 {/* fourth part */}
 <div className="container-fluid ">
  <div className="row text-center py-3 ">
    <div className="container d-flex justify-content-sm-between">
    <div className="ppp p-2 bg-white border border-black">
     <h6>hello</h6>
     <p>Lorem ipsum dolor sit.</p>
  </div>
  <div className=" ppp p-2 bg-white  border border-2  border-info">
     <h6>hello</h6>
     <p>Lorem ipsum dolor sit.</p>
  </div>
  <div className="ppp p-2 bg-white border border-info">
     <h6>hello</h6>
     <p>Lorem ipsum dolor sit.</p>
  </div>
  <div className=" ppp p-2 bg-white border border-info">
     <h6>hello</h6>
     <p>Lorem ipsum dolor sit.</p>
  </div>
  </div>
</div>
<div className="row text-center mt-sm-5 py-3 ">
<div className="container d-flex justify-content-between">
    <div className="ppp p-2 bg-white  border border-info">
     <h6>hello</h6>
     <p>Lorem ipsum dolor sit.</p>
  </div>
  <div className=" ppp p-2 bg-white  border border-info">
     <h6>hello</h6>
     <p>Lorem ipsum dolor sit.</p>
  </div>
  <div className=" ppp p-2 bg-white border border-info">
     <h6>hello</h6>
     <p>Lorem ipsum dolor sit.</p>
  </div>
  <div className=" ppp p-2 bg-white border border-info">
     <h6>hello</h6>
     <p>Lorem ipsum dolor sit.</p>
  </div>
</div>
</div>
</div>
</div>
   </>
  )
}