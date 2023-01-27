import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import AllPets from '../components/AllPets'


const Main = (props) => {
    const [allPets, setAllPets] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allPets')
        .then(res=>{
            setAllPets(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err))
    }, [allPets]);

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>These pets are looking for a home</h3>
            <Link to={'/pet/new'}>Add a pet</Link>
            {loaded && <AllPets allPets={allPets}/>}
        </div>
    )
}

export default Main;
