import React, { useEffect, useState } from 'react';

const Rooms = () => {
    const [rooms,setRooms]=useState([]);
    useEffect(()=>{
        fetch('rooms.json')
        .then(res=>res.json())
        .then(data=>setRooms(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
                rooms.map(room=><>
                  <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img className='h-72' src={room.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {room.location}
     
    </h2>
    <p>{room.dateRange}</p>
    <p>${room.price}total</p>
    
  </div>
</div>
                </>)
            }
          
        </div>
    );
};

export default Rooms;