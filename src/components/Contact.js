import React from 'react'

const Contact = () => {
  return (
    <div>

   <section className='contact-info'>
    <div className="phone-info">
      <p>Phone</p>
      <span>+91764538</span>
    </div>
    <div className="email-info">
      <p>email</p>
      <span>md.imtiyaz@123</span>
    </div>
    <div className="address-info">
      <p>address</p>
      <span>10/c patwa para lane kol-11</span>
    </div>

   </section>

   <section className='mt-5'>

   <div className="card" style={{width:"800px"}} >
  <div className="card-body ml-5 "  >
    <h5 className="card-title">Get In Touch</h5>
    <input type="text" className='inputSignUp' placeholder='your name' style={{marginLeft:"10px"}}  />

         
    <input type="text" className='inputSignUp' placeholder='Your email' style={{marginLeft:"10px"}} />

    <input type="text" className='inputSignUp' placeholder='Your phone' style={{marginLeft:"10px"}} />

     <textarea name="contact-text" id=""  className='mt-5' placeholder='Message' cols="80" rows="4" />
    
    <button type="button" className='contact-btn'>Send Message</button>
  </div>
</div>

   </section>


    </div>
  )
}

export default Contact