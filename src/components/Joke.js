import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Joke() {
  const [joke, setJoke] = useState('');

  // useEffect: By using this Hook, you tell React that your component needs to do something after render. By default, useEffect runs after every render. Passing in an empty array [] of inputs tells React that your effect doesn’t depend on any values from the component, so that effect would run only on mount and clean up on unmount; it won’t run on updates
  useEffect(() => {
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchJoke = () => {
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card w-50 mx-auto mt-5">
      <h5 className="card-header">Dad Joke</h5>
      <div className="card-body">
        <p className="card-text">{joke.joke}</p>
        <a className="btn btn-primary text-white" onClick={fetchJoke}>
          Get Another Joke
        </a>
      </div>
    </div>
  );
}
