import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const allPets = (props) => {

    return (
        <div>
            <div>

                <div>
                    <table>
                        <tr>
                            <th>Pet Name</th>
                            <th>Pet Type</th>
                            <th>Actions</th>
                        </tr>
                        <tbody>
                            {props.allPets.map((pet, i) =>
                                <tr key={pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.petType}</td>
                                    <td>                            <Link to={'/pet/edit/' + pet._id}>edit</Link>|
                                        <Link to={'/pet/' + pet._id}>details</Link></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default allPets;