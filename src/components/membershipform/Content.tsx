'use client'
import { useState, useEffect } from 'react';
import Select from "react-select";
import ContactSvg from './ContactSvg';
import Link from 'next/link';
import { Slide } from 'react-awesome-reveal';
const FORM_ENDPOINT = "https://public.herotofu.com/v1/f1ee8b90-b2d3-11ee-ae0b-a7e011fe96d3";


const ContactScreen = () => {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
      <div className='mt-20 mb-20 py-24 px-52 bg-slate-600'>
        <h2 className='text-white text-center font-semibold text-3xl'>Thank you!</h2>
        <h2 className='text-white text-center font-semibold text-xl mt-5'>We received your message. We will be in touch soon.</h2>
      </div>
       
      </>
    );
  }

    return (
        <div className="contact-screen-main">
            <div className='contact-screen-contents flex mt-24 px-20 mb-40 gap-24'>
              <div className='contact-screen-texts w-1/3 '>
                <Slide direction='left' triggerOnce>
                  <h1 className='text-[64px] font-black leading-[70px]'>
                    We are happy to have you<span className='text-[#392fbe]'> in our Society!</span>
                  </h1>
                  <div className="home-svg mt-6">
                      <ContactSvg />
                  </div>
                  <div className='contact-screen-text mt-10'>
                    <p className='text-lg'>
                      A member of our Membership committee will contact you to discuss your membership 
                      application as soon as it is received and reviewed.
                    </p>
                  </div>
                </Slide>
              </div>
              <div className='contact-input w-2/3 '>
                <Slide direction='left' triggerOnce>
                  <form className='bg-black w-full px-10 py-12 rounded-[30px]' 
                    action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
                      <div className='name-input flex gap-8'>
                        <div className='w-1/2'>
                            <p className='text-white font-medium text-xl'>First Name<span className='text-red-500'>*</span></p>
                            <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                            id='firstName' type="text" name="firstName" required />
                        </div>
                        <div className='w-1/2'>
                            <p className='text-white font-medium text-xl'>Last Name<span className='text-red-500'>*</span></p>
                            <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                            id='lastName' type="text" name="lastName" required />
                        </div>
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Your Email<span className='text-red-500'>*</span></p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='email' type="email" name="email" required />
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Country of Residence<span className='text-red-500'>*</span></p>
                        <Select
                        
                          className='w-full bg-slate-800 py-4 rounded-xl mt-4 text-neutral-500'
                          options={countries}
                          value={selectedCountry}
                          onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                        />
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Your Phone number<span className='text-red-500'>*</span></p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='phone' type="tel" name="phone" placeholder='call or Whatsapp Number' required />
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Subject<span className='text-red-500'>*</span></p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='address' type="text" placeholder= 'Subject of your inquiry' name="address" required />
                      </div>
                      <div className='w-full mt-10'>
                          <textarea 
                            className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white' 
                            id='message' placeholder="Your message" name="message" required rows={10}/>
                      </div>
                      <div className='submit-btn mt-10 justify-center text-center'>
                          <button className='bg-blue-700 py-4 px-6 rounded text-white font-medium text-xl hover:bg-blue-500' id='submit' type="submit"> Submit </button>
                      </div>
                    </form>
                </Slide>
              </div>    
            </div>
        </div>
    )
}

export default ContactScreen