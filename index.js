const express = require ('express')
const app = express()

// for parsing application /x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

app.post(`/`, (req, res) => {
    var x, y, z
    x = 150
    y = 89
    z = x - y

    return res.send(`The value of z is ${z}`)

})

app.get(`/`, (req, res) => {
    let email = req.body.email
     return res.send('The email value is '+email)
})

app.listen(3300, () => {
    console.log(`Example app listening on part 3300`)
})