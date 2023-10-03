import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from './Card';

const Rooms = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    const [loading, setLoading] = useState(true); // Initialize loading as true
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        setLoading(true);

        fetch('rooms.json')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(room => room.category === category);
                setRooms(filtered);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [category]); // Add category as a dependency

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator
    }

    return (
        <div>
            {rooms && rooms.length > 0 ? (
                <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                    {rooms.map((room, index) => (
                        <Card key={index} room={room} />
                    ))}
                </div>
            ) : (
                <div className='pt-12'>
                    <h4>No rooms available</h4>
                </div>
            )}
        </div>
    );
};

export default Rooms;
