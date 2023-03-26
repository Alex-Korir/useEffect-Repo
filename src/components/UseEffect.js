import React, { useEffect, useState } from 'react'
import "./container.css";


const url = 'https://api.github.com/users';
function UseEffect() {
    
    const [people, setPeople] = useState([]);

    const data = async() =>{
        const res = await fetch(url);
        const people = await res.json();
        setPeople(people);
    }

    useEffect(() =>{
        data();
      }, []);
     return (
        <section className='whole-section'>
            <h3 className='heading'>Github Users</h3>
            <div className='main-container'>
                {people.map((person) =>{
                    const {id, login, avatar_url, html_url} = person;
                    return(
                        <div key={id} className='single'>
                            <div className='logo'>
                                <img src={avatar_url} alt={login}/>
                            </div>
                            <div className='remove'>
                                <h5>{login}</h5>
                                <a href={html_url}>profile</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
     )
  
}

export default UseEffect