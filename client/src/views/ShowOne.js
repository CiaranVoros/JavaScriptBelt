import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const ShowOne = (props) => {
    const {removeFromDom} = props;
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/delete/' +petId)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.error(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err))
    }, [id])

    return (
        <div>
            <div>
                <Link to={'/'}>home</Link>
                <button onClick={(e) => {deletePet(pet._id)}}>Delete pet</button>
            </div>
            <p>Pet type: {pet.petType}</p>
            <p>Pet name: {pet.name}</p>
            <p>pet skillOne: {pet.skillOne}| pet skillTwo: {pet.skillTwo}| pet skillThree: {pet.skillThree}</p>
            <div>
                <h1>likes: {pet.likes}</h1>
            </div>
        </div>

    )
}

export default ShowOne;