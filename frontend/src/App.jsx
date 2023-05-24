import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';

async function postAccountData({ firstName, lastName, age, email }) {
  try {

    const request = await axios.post('http://localhost:5500/account/post', {
      firstName,
      lastName,
      age,
      email
    });

    if (request.data.status == 201) {
      console.log(request.data.message);
    } else {
      throw new Error('(0.0)/')
    }
  } catch (error) {
    console.log(error);
  }
}



function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(()=>{
    async function getAccountData() {
      try {
        const response = await axios.get('http://localhost:5500/account/get');
        if (response.data.status == 200) {
          console.log(response.data.message);
          console.log(response.data.accountData);
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
          throw new Error("(*0*)");
        }
        console.log(error);
      }
    }

    getAccountData();
  },[])

  function handleFormSubmit(event) {
    event.preventDefault();
    
    const newAcccount = {
      firstName,
      lastName,
      age,
      email
    }

    postAccountData(newAcccount);
  }


  return (
    <>
       <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div> 
    </>
  )
}

export default App;
