const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')

app.use(cors())

const rappers = {
  '21 savage': {
    'age': 31,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
  },
  'chance the rapper': {
    'age': 31,
    'birthName': 'Chancelor Johnathan Bennett',
    'birthLocation': 'Chicago, Illinois, U.S'
  },
  'eminem': {
    'age': 51,
    'birthName': 'Marshall Bruce Mathers III',
    'birthLocation': 'St. Joseph, Missouri, U.S'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => {
  const rappersName = req.params.rapperName.toLowerCase()
  if (rappers[rappersName]) {
    res.json(rappers[rappersName])
  } else {
    res.json(rappers['eminem'])
  }
})

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
})