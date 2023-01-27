import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default props => {
    const [petType, setPetType] = useState("")
    const [name, setName] = useState("")
    const [skillOne, setSkillOne] = useState("")
    const [skillTwo, setSkillTwo] = useState("")
    const [skillThree, setSkillThree] = useState("")
    const [description, setDescription] = useState("")

    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/pet/new', {
            petType,
            name,
            skillOne,
            skillTwo,
            skillThree,
            description
        })
            .then(res => {
                console.log("Response", res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors
                const errArr = []
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr)
            })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {
                errors.map((err, i) => <p key={i}>{err}</p>)
            }
            <div>
                <label>Pet type</label>
                <input type="text" onChange={e => setPetType(e.target.value)} />
            </div>
            <div>
                <label>Pet Description</label>
                <input type="text" onChange={e => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Pet Name</label>
                <input type="text" onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label>Pet skill One</label>
                <input type="text" onChange={e => setSkillOne(e.target.value)} />
                <label>Pet skill Two</label>
                <input type="text" onChange={e => setSkillTwo(e.target.value)} />
                <label>Pet skill Three</label>
                <input type="text" onChange={e => setSkillThree(e.target.value)} />
            </div>
            <input type="submit" />
        </form>

    )
}
