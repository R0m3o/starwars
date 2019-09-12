import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    state = {
        people: [ ]
    }
    componentDidMount(){
        axios.get('https://swapi.co/api/people')
            .then(res => {
                console.log(res)
                this.setState({
                    people: res.data.results.slice(0,5)
                })
            })
    }
    render() {
        const { people } = this.state
        const peopleList = people.length ? (
            people.map(person => {
                return (
                    <div className="person" key={person.name}>
                        <h3>{person.name}</h3>
                        <p>Born: {person.birth_year}</p>
                        <p>Height: {person.height} Mass: {person.mass}</p>
                        <p>Sex: {person.gender}</p>
                        <p>Hair: {person.hair_color}</p>
                        <p>Eyes: {person.eye_color}</p>
                        <p>Skin: {person.skin_color}</p>
                    </div>
                )
            })
        ) : (
            <p>Loading...</p>
        )
        return (
            <div>
                {peopleList}
            </div>
        )
    }
}

export default Home


