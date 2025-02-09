'use client'

import React from "react";
import { Wave } from 'react-css-spinners'
import { useState } from "react";
function Main() {

     const [tableData, setTableData] = useState([])
     const [formInputData, setformInputData] = useState(
          {
               Name: '',
               email: '',
          }
     );
     const [loading, setloading] = useState(false);
     console.log(tableData);
     const handleChange = (evnt) => {
          const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
          setformInputData(newInput)
     }

     const handleSubmit = (evnt) => {
          setloading(true)
          evnt.preventDefault();
          const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
          if (checkEmptyInput) {
               const newData = (data) => ([...data, formInputData])
               setTableData(newData);
               const emptyInput = { Name: '', email: '' }
               setformInputData(emptyInput)
      
          }
          setTimeout(() => {
               setloading(false)
          }, 4000)
     }

     return (
          <div className="container">
               <div className="row">
                    <div className="col-sm-8">
                         <div className="col">
                              <input type="text" onChange={handleChange} value={formInputData.Name} name="Name" className="form-control" placeholder="Name" />
                         </div>
                         <div className="col">
                              <input type="email" onChange={handleChange} value={formInputData.email} name="email" className="form-control" placeholder="Email Address" />
                         </div>
                         <div className="col">
                              <input type="submit" id="submit" onClick={handleSubmit} className="btn btn-primary" />
                              {
                                   loading ?

                                   <Wave
                                   color="#d36ac2"
                                   size={100}
                                   thickness={15}
                                 />
                                        :

                                        <div>
                                            
                                        </div>
                              }
                         </div>
                         <div className="app">

                         </div>

                    </div>
               </div>
          </div>
     );
}
export default Main;