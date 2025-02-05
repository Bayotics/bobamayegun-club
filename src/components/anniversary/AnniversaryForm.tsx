'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Select from "react-select";
import ContactSvg from './ContactSvg';
import Link from 'next/link';
import { Slide } from 'react-awesome-reveal';
import AnimatedBtn from '../HomePage/AnimatedBtnForAbout';
const FORM_ENDPOINT = "https://public.herotofu.com/v1/f1ee8b90-b2d3-11ee-ae0b-a7e011fe96d3";



const AnniversaryForm = () => {

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const yearOptions = ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];
  const [membershipDetails, setMembershipDetails] = useState("");
  const [visaAppStatus, setVisaAppStatus] = useState("");
  const [consent, setConsent] = useState(true);
  const router = useRouter()

  const membershipSelector = [
    {
      name: '',
      val: ''
    },
    {
      name: 'Yes',
      val: true
    },
    {
      name: 'No', 
      val: false
    }
  ]

  const membershipOptionHandler = (e) => {
    setMembershipDetails(e.target.value)
  }

  const visaStatusHandler = (e) => {
    setVisaAppStatus(e.target.value);
  }

  const handleConsent = (e) => {
    if (e === 'checked'){
      if(consent === true){
        console.log(e, "Our value");
      }
      setConsent(!consent);
    }
  } 

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
    if(membershipDetails != 'Yes'){
      router.push('/noteligible');
    } 
    else
    {
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
    }
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
                      
                      <div className='w-full' >
                        <p className='text-white font-medium text-xl'>Full Name (As in passport)<span className='text-red-500'>*</span></p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='fullName' type="text" name="fullName" required />
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
                          id='country'
                          name='country'
                          className='w-full bg-slate-800 py-4 rounded-xl mt-4 text-neutral-500'
                          options={countries}
                          required
                          value={selectedCountry}
                          onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                        />
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Are you a current Bobamayegun member?<span className='text-red-500'>*</span></p>
                        <select
                            onChange={membershipOptionHandler}
                            value={membershipDetails} 
                            className='w-full bg-slate-800 py-4 rounded-xl px-3 mt-4 text-white'
                            id='currentMember' itemType='' name="currentMember" required>
                            {membershipSelector.map((res, index) => {
                              return (
                                <option key={index}>{res.name}</option>
                              )
                            })}
                        </select>
                      </div>
                      {membershipDetails === 'Yes' ? (
                        <div>
                          <div className={`membership-details-display`}>
                        <div className='w-full mt-10' >
                          <p className='text-white font-medium text-xl'>Year of Joining Bobamayegun<span className='text-red-500'>*</span></p>
                          <select className='w-full bg-slate-800 py-4 rounded-xl px-3 mt-4 text-white'
                              id='currentMember' itemType='' name="currentMember" required>
                              {yearOptions.map((e, index) => {
                                return(
                                  <option key={index}>{e}</option>
                                )
                              })}
                          </select>
                        </div>
                        <div className='w-full mt-10' >
                          <p className='text-white font-medium text-xl'>Role/Position in Bobamayegun (if any)</p>
                            <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                            id='role' type="text" name="role" />
                        </div>
                      </div>
                        </div>
                      ) : (<div></div>) }
                      
                      
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Have you ever applied for a US visa?<span className='text-red-500'>*</span></p>
                        <select className='w-full bg-slate-800 py-4 rounded-xl px-3 mt-4 text-white'
                            id='ever_applied_for_a_us_visa' itemType='' name="ever_applied_for_a_us_visa" required>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Do you require a Visa invitation Letter?<span className='text-red-500'>*</span></p>
                        <select
                            onChange={visaStatusHandler}
                            value={visaAppStatus} 
                            className='w-full bg-slate-800 py-4 rounded-xl px-3 mt-4 text-white'
                            id='visa_invitation_required' itemType='' name="visa_invitation_required" required>
                            {membershipSelector.map((res, index) => {
                              return (
                                <option key={index}>{res.name}</option>
                              )
                            })}
                        </select>
                      </div>
                      {visaAppStatus === "Yes" ? (<div className='visa-application-inputs'>
                        <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Passport Number<span className='text-red-500'>*</span></p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='passportNumber' type="text" name="passportNumber" required />
                      </div>
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Passport Expiry Date<span className='text-red-500'>*</span></p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='passportExpiry' type="date" name="passportExpiry" required />
                      </div>
                        <div className='w-full mt-10' >
                          <p className='text-white font-medium text-xl'>Preferred consulate for visa application<span className='text-red-500'>*</span></p>
                          <select className='w-full bg-slate-800 py-4 rounded-xl px-3 mt-4 text-white'
                              id='preferred_consulate' itemType='' name="preferred_consulate" required>
                              <option>Lagos</option>
                              <option>Abuja</option>
                          </select>
                        </div>
                        <div className='w-full mt-10' >
                          <p className='text-white font-medium text-xl'>Travel funding source<span className='text-red-500'>*</span></p>
                          <select className='w-full bg-slate-800 py-4 rounded-xl px-3 mt-4 text-white'
                              id='travel_funding_source' itemType='' name="travel_funding_source" required>
                              <option>Self funded</option>
                              <option>Sponsored by family</option>
                              <option>Sponsored by organization</option>
                              <option>Other</option>
                          </select>
                        </div>
                        <div className='w-full mt-10' >
                          <p className='text-white font-medium text-xl'>Will you be attending alone or with family<span className='text-red-500'>*</span></p>
                          <select className='w-full bg-slate-800 py-4 rounded-xl px-3 mt-4 text-white'
                              id='modeOfAttendance' itemType='' name="modeOfAttendance" required>
                              <option>Individual</option>
                              <option>With Family</option>
                          </select>
                        </div>
                        <div className='w-full mt-10'>
                            <p className='text-white font-medium text-xl'>List their Names, ages and relationship<span className='text-red-500'>*</span></p>
                            <textarea 
                              className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white' 
                              id='familyInfo' placeholder="List Each family member's name, age and relationship on separate lines" name="familyInfo" required rows={10}/>
                        </div>
                        <div className='w-full mt-10' >
                          <p className='text-white font-medium text-xl'>Preferred accommodation type<span className='text-red-500'>*</span></p>
                          <select className='w-full bg-slate-800 py-4 rounded-xl px-3 mt-4 text-white'
                              id='modeOfAttendance' itemType='' name="modeOfAttendance" required>
                              <option>Hotel</option>
                              <option>Host Family</option>
                              <option>Self Arranged</option>
                          </select>
                        </div>
                        <div className='w-full mt-10' >
                          <p className='text-white font-medium text-xl'>Expected Date of Arrival</p>
                            <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                            id='arrivalDate' type="date" name="arrivalDate" />
                        </div>
                        <div className='w-full mt-10' >
                          <p className='text-white font-medium text-xl'>Expected Date of Departure</p>
                            <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                            id='departureDate' type="date" name="departureDate" />
                        </div>
                      </div>) : 
                      (<div></div>)
                      }
                      <div className='w-full mt-10' >
                        <p className='text-white font-medium text-xl'>Special Assistance required (if any)</p>
                          <input className='w-full bg-slate-800 py-4 rounded-xl pl-3 mt-4 text-white'
                          id='special_assistance_required' type="text" name="special_assistance_required" />
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

                      <div className='anniversary-declaration flex gap-2 mt-28 px-14'>
                        <p className='text-white'>I confirm that the information provided is accurate and that I intend to participate in the Bobamayegun 10th Anniversary Celebration in the USA.</p>
                        <input onChange={ () => handleConsent('checked')} value={consent} type="checkbox" id='declaration' name="declaration"/>
                      </div>
                                       
                      <div className='submit-btn mt-10 justify-center text-center'>
                          <button disabled = {consent === true} 
                          className=' bg-purple-600 py-4 px-6 rounded disabled:bg-gray-500 text-white font-medium text-xl hover:bg-purple-500 ' 
                          id='submit' type="submit"> Submit </button>
                      </div>
                    </form>
                </Slide>
              </div>    
            </div>
        </div>
    )
}

export default AnniversaryForm