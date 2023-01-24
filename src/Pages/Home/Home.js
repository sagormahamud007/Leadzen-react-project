import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
/*
count
per page=4
*/
const Home = () => {
    const [categories,setCategories]= useState([])
    const count= [...categories]
    const [page,setPage]=useState(4)
    console.log(count.slice(0,page))
    

    const [size,setSize]=useState(4)
    console.log(size)
    const pages=Math.ceil(count.length/size);
    
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
            count.slice(0,page).map(category=><>
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
   <div className='pagination mx-auto text-center'>
{
  [...Array(pages).keys()].map(number=><button 
  key={number}
  className={page===number && 'selected'}
  onClick={()=>setPage(number)}
>
  {number}
  </button>)
}
<select onChange={event=>setSize(event.target.value)}>
  <option selected value={5}>1</option>
  <option value={3}>3</option>
  <option value={4}>4</option>
</select>
</div>
   </div>

        );
};

export default Home;