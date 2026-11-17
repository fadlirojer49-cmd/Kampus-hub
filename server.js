
const express = require('express')
const cors = require('cors')
const session = require('express-session')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json())

app.use(session({
    secret: 'rahasia-login',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    }
}))

// Data akun
const users = [
    {
        username: 'admin',
        password: '12345'
    }
]

// API LOGIN

app.post('/login', (req, res) => {
    const { username, password } = req.body

    const user = users.find(
        item => item.username === username &&
            item.password === password
    )

    if (!user) {
        return res.status(401).json({
            message: 'Username atau password salah'
        })
    }

    req.session.user = {
        username: user.username
    }

    res.json({
        message: 'Login berhasil',
        user: req.session.user
    })
})


// API LOGOUT

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                message: 'Logout gagal'
            })
        }

        res.clearCookie('connect.sid')
        res.json({
            message: 'Logout berhasil'
        })
    })
})


// API CEK SESSION LOGIN
app.get('/me', (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({
            message: 'Belum login'
        })
    }

    res.json({
        user: req.session.user
    })
})


app.listen(3000, () => {
    console.log('Server berjalan di port 3000')
})
