import React, { useEffect, useState } from 'react'
import "./UseEffect.css";


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
        <>
            <h3 className='heading'>Github Users</h3>
            <div className='main-container'>
                {people.map((person) =>{
                    const {id, login, avatar_url, html_url} = person;
                    return(
                        <div key={id} className='single'>
                            <img src={avatar_url} alt={login}/>
                            <div>
                                <h5>{login}</h5>
                                <a href={html_url}>profile</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
     )
  
}

export default UseEffect