  import React, { useState } from 'react';

export const UserRegistration = () => {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [color, setColor] = useState('black');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  };


  const handleClick = () => {
    if (name && lastname && position && email && password && confirm) {
      if (password === confirm) {
        setColor('green');
      } else {
        setColor('red');
        alert("Passwords don't match")
      }
    } else {
      setColor('red');
      alert('Some fields are empty');
    }
  };

  return <div>
      <label>
        <input type="text" placeholder="Name" style={{ border: `1px solid ${color}`}} 
        onChange={handleNameChange}/>
      </label>
      <label>
        <input
          type="text"
          placeholder="Last Name"
          style={{ border: `1px solid ${color}` }}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Position"
          style={{ border: `1px solid ${color}` }}
          onChange={handlePositionChange}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Email"
          style={{ border: `1px solid ${color}` }}
          onChange={handleEmailChange}
        />
      </label>
      <label>
        <input
          type="password"
          placeholder="Password"
          style={{ border: `1px solid ${color}` }}
          onChange={handlePasswordChange}
        />
      </label>
      <label>
        <input
          type="password"
          placeholder="Confirm Password"
          style={{ border: `1px solid ${color}` }}
          onChange={handleConfirmChange}
        />
      </label>
      <button onClick={handleClick}>Register</button>
    </div>
};
