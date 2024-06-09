import React, { useState } from "react";

function Contact() {
  const [data, setData]= useState({
    fullname:"",
    mobile:"",
    email:"",
   message:"" 
  })

 const InputEvent=(event)=>{
  const {name, value}=event.target;
  setData((preVal)=>{
    return {
      ...preVal,
      [name]: value,
    }
  })
 }
  const formSubmit= (event)=>{
    event.preventDefault();
    alert(`${data.fullname}`)

  }
  return (
    <>
      <div className="my-5"  >
        <h1 className="text-center">Contact Us </h1>
      </div>

      <div className="container contact_div"id="contact" >
        <div className="row" >
          <div className="col-md-6 col-10 mx-auto ">
            <form onSubmit={formSubmit}>
              <div className="mb-3 " >
                <label   className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name "
                />
              </div>
              <div className="mb-3">
                <label   className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-3">
                <label   className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="mobile"
                  value={data.mobile}
                  onChange={InputEvent}
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn  btn-outline-primary" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
   