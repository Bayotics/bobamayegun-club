'use client'
import { useState, useEffect } from 'react';
import Select from "react-select";
import ContactSvg from './ContactSvg';
import Link from 'next/link';
import { Slide } from 'react-awesome-reveal';
import AnimatedBtn from '../HomePage/AnimatedBtnForAbout';
const FORM_ENDPOINT = "https://public.herotofu.com/v1/f1ee8b90-b2d3-11ee-ae0b-a7e011fe96d3";



const AnniversaryForm = () => {

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
      .catch(() => {
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
      <div className='mt-20 mb-20 py-24 px-52 bg-slate-600'>
        <h2 className='text-white text-center font-semibold text-3xl'>Thank you for registering!</h2>
        <h2 className='text-white text-center font-semibold text-xl mt-5'>We received your message. Your registration will be reviewed and you will receive a response soon.</h2>
        <div className = 'w-1/3 mt-8 m-auto'>
          <Link href={'/'}>
            <AnimatedBtn 
              text={'Go back Home'}
              style={' w-full mt-10 bg-black px-4 py-6  text-white text-center text-2xl'}/>
          </Link>
        </div>
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
                        A Decade of Impact. <span className='text-[#392fbe]'> 
                        Let’s Celebrate Together!</span>
                  </h1>
                  <div className="home-svg mt-6">
                      <ContactSvg />
                  </div>
                  <div className='contact-screen-text mt-10'>
                    <p className='text-lg'>
                      Upon a successful registration and review, an invitation
                      will be sent to the email provided. 
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
                        <p className='text-white font-medium text-xl'>Your Phone number<span className='text-red-500'>*</span></p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='phone' type="tel" name="phone" placeholder='call or Whatsapp Number' required />
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
                        <p className='text-white font-medium text-xl'>Are you a current Bobamayegun member?<span className='text-red-500'>*</span></p>
                        <select className='w-full bg-slate-800 py-4 rounded-xl px-3 mt-4 text-white'
                            id='currentMember' itemType='' name="currentMember" required>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Do you require a Visa invitation Letter?<span className='text-red-500'>*</span></p>
                        <select className='w-full bg-slate-800 py-4 rounded-xl px-3 mt-4 text-white'
                            id='currentMember' itemType='' name="currentMember" required>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Expected Date of Arrival (if known)</p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='phone' type="date" name="phone" placeholder='call or Whatsapp Number' />
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>which activities are you most 
                            interested in?
                        </p>
                        <div className='checkbox-options mt-4 grid grid-cols-3 gap-3' >
                            <div className='check-option flex gap-2'>
                                <input type="checkbox" id="op1" name="op1" value="Cultural_Performances" />
                                <label htmlFor="op1" className='text-white'>Cultural <br/> Performances</label>
                            </div>
                            <div className='check-option flex gap-2'>
                                <input type="checkbox" id="op2" name="op2" value="Networking_Sessions" />
                                <label htmlFor="op2" className='text-white'>Networking <br/>Sessions</label>
                            </div>
                            <div className='check-option flex gap-2'>
                                <input type="checkbox" id="op3" name="op3" value="Member_Discussions" />
                                <label htmlFor="op3" className='text-white'>Member <br/> Discussions</label>
                            </div>
                            <div className='check-option flex gap-2'>
                                <input type="checkbox" id="op4" name="op4" value="Awards" />
                                <label htmlFor="op4" className='text-white'>Awards & <br/> Recognition</label>
                            </div>
                            <div className='check-option flex gap-2'>
                                <input type="checkbox" id="op5" name="op5" value="Gala_night" />
                                <label htmlFor="op5" className='text-white'>Gala <br/> Night</label>
                            </div>
                            <div className='check-option flex gap-2'>
                                <input type="checkbox" id="op6" name="op6" value="Others" />
                                <label htmlFor="op6" className='text-white'>Others <br/> Not Specified</label>
                            </div>
                        </div>
                      </div>                 
                      <div className='submit-btn mt-20 justify-center text-center'>
                          <button className='bg-purple-600 py-4 px-6 rounded text-white font-medium text-xl hover:bg-purple-500 ' id='submit' type="submit"> Submit </button>
                      </div>
                    </form>
                </Slide>
              </div>    
            </div>
        </div>
    )
}

export default AnniversaryForm