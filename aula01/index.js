const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
    )

    app.use(express.json())
    app.get('/', (req, res) => {
    res.json({ message: 'Ola Nicholas!'})
})

app.listen(3000)
