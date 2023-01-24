import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [categories,setCategories]= useState([])
    console.log(categories)
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    
        return (
            <div className="overflow-x-auto w-full mt-16">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>User Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        
         {
            categories.map(category=><>
             <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{category?.name}</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
        {category?.username}
              <br/>
              
            </td>
            <td>{category?.email}</td>
            <th>
            <Link to={`/details/${category?.id}`}><button className="btn btn-error text-white">Details</button></Link>
            </th>
          </tr>
            </>)
         }
        </tbody>
      </table>
    </div>
        );
};

export default Home;