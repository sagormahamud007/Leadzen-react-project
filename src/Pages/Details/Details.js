import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const user=useLoaderData()
    const {address,phone,company,website,name,email}=user;
    const {name:companyName,bs,catchPhrase}=company;
    const {street,city,zipcode}=address;

    const [showArrowFunction, setShowArrowFunction] = useState(true);
    

//    const toggle=()=>{
//     if(showArrowFunction){
     
//         setShowArrowFunction(true);
//     }
//     else{
//         setShowArrowFunction(false);
//     }

//    }

    const toggleArrowFunction = () => {
        setShowArrowFunction(!showArrowFunction);
      
      };
    

    return (
        <div className='px-8 border mt-6 mb-8 rounded-4xl'>
        <div className="overflow-x-auto w-full mt-8 ">
        <table onClick={setShowArrowFunction(true)} className="table w-full">
          <thead  className='mt-7'>
            <tr>
              <th>Contact</th>
              <th>Company Name</th>
              <th>Website</th>
              <th>Business</th>
              <th>Hide Details</th>
            </tr>
          </thead>
          <tbody>
               <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="">{name}</div>
                  </div>
                </div>
              </td>
              <td>{companyName}</td>
              <td>{website}</td>
              <td>{bs}</td>
            <td> <button onClick={toggleArrowFunction()} className="btn btn-error text-white">Hide Details</button></td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className='border-2 p-4 mb-6 rounded-3xl shadow-md'>  
        <h3 className='font-bold'>Description</h3>
<p className='py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever <br/> since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 mt-8 border-orange-400 w-80%'>
            <div>
                <h5 className='font-bold'>Contact Person</h5>
                <p>{name}</p>
                <br/>
                <h5 className='font-bold'>Designation</h5>
                <p>{name}</p>
                <br/>
                <h5 className='font-bold'>Email</h5>
                <p>{email}</p>
                <br/>
                <h5 className='font-bold'>Phone</h5>
                <p>{phone}</p>
                <br/>
                
            </div>
            <div>
                <h5 className='font-bold'>catchPhrase</h5>
                <p>{catchPhrase}</p>
                <br/>
                <h5 className='font-bold'>City</h5>
                <p>{city}</p>
                <br/>
                <h5 className='font-bold'>State</h5>
                <p>{street}</p>
                <br/>
                <h5 className='font-bold'>Zip Code</h5>
                <p>{zipcode}</p>
                <br/>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Details;