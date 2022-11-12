import { useState, useEffect } from 'react'

const url = 'https://jsonplaceholder.typicode.com/todos/'

function App() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json()
    setUsers(users)
    console.log(users)
  }

  useEffect(() => {
      getUsers()
  },[])

  return (
    <div className="App">
    <ul>
      {
        users.map((user) => {
          const { title, id, userId } = user
          return (
            <li key={id}>
              <h1>{title}</h1>
              <h2>{userId}</h2>
            </li>
          )
        })
      }
      </ul>
    </div>
  );
}

export default App;
