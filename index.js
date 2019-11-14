const express = require (`express`)
const app = express()

// for parsing application /x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

// app.get(`/`, (req, res) => {
//     var x, y, z
//     x = 45
//     y = 66
//     z = x / y

//     return res.send(`The value of z is ${z}`)

// })

app.post(`/`, (req, res) => {
    let email = req.body.email
     return res.send(`The email value is ${email}`)
})

app.listen(5000, () => {
    console.log(`Example app listening on part 5000`)
})