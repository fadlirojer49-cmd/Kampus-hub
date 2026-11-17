
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [pesan, setPesan] = useState('')

  // Cek session login
  useEffect(() => {
    fetch('http://localhost:3000/me', {
      credentials: 'include'
    })
      .then(res => {
        if (!res.ok) return null
        return res.json()
      })
      .then(data => {
        if (data) setUser(data.user)
      })
      .catch(() => setUser(null))
  }, [])

  // Login
  const handleLogin = async (e) => {
    e.preventDefault()
    setPesan('')

    try {
      const response = await fetch(
        'http://localhost:3000/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            username,
            password
          })
        }
      )

      const data = await response.json()
      console.log('HASIL LOGIN:', data)

      if (!response.ok) {
        setPesan(data.message)
        return
      }

      setUser(data.user)
      setPassword('')
      setPesan('')

    } catch (error) {
      setPesan('Backend tidak terhubung')
    }
  }

  // Logout

  // Logout
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/logout', {
        method: 'POST',
        credentials: 'include'
      })

      const data = await response.json()

      if (response.ok) {
        setUser(null)
        setUsername('')
        setPassword('')
        setPesan('')
      } else {
        setPesan(data.message)
      }
    } catch (error) {
      console.error(error)
      setPesan('Logout gagal')
    }
  }

  return (
    <div className="container">

      {user ? (
        <>
          <h3>Selamat Datang, {user.username}</h3>

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <form onSubmit={handleLogin}>

          <div className="form-login">
            <label>Username:</label>

            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />

            <label>Password:</label>

            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">
            Login
          </button>

        </form>
      )}

      <p>{pesan}</p>

    </div>
  )
}

export default App
