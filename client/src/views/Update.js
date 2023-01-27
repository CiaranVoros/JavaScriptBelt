import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [petType, setPetType] = useState("")
    const [name, setName] = useState("")
    const [skillOne, setSkillOne] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [skillThree, setSkillThree] = useState("")
    const [description, setDescription] = useState("")

    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setPetType(res.data.petType)
                setDescription(res.data.description)
                setName(res.data.name)
                setSkillOne(res.data.skillOne)
                setSkillTwo(res.data.skillTwo)
                setSkillThree(res.data.skillThree)
            })
    }, [id])

    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/edit/' + id, {
            petType,
            name,
            skillOne,
            skillTwo,
            skillThree,
            description
        })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errArr = []
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr)
            })
    }

    return (
        <div>
            <h1>Update pet</h1>
            <form onSubmit={updatePet}>
                {
                    errors.map((err, i) => <p key={i}>{err}</p>)
                }
                <div>
                    <label>Pet type</label>
                    <input type="text" value={petType} name="petType" onChange={e => setPetType(e.target.value)}/>
                </div>
                <div>
                    <label>Pet Description</label>
                    <input type="text" value={description} name="description" onChange={e => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Pet Name</label>
                    <input type="text" value={name} name="name" onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Pet skills</label>
                    <input type="text" onChange={e => setSkillOne(e.target.value)} value={skillOne} />
                    <input type="text" onChange={e => setSkillTwo(e.target.value)}  value={skillTwo}/>
                    <input type="text" onChange={e => setSkillThree(e.target.value)} value={skillThree} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update;