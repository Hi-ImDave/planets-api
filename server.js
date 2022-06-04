const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

// tells express to use cors when necessary
app.use(cors())

const planets = {
    'earth': {
        'name': 'Earth',
        'planetType': 'Terrestrial Planet',
        'diameter': '12,742 km',
        'distanceFromSun': '149,598,262 km',
        'lengthOfYear': '365.24 days',
    },
    'jupiter': {
        'name': 'Jupiter',
        'planetType': 'Gas Giant',
        'diameter': '139,822 km',
        'distanceFromSun': '778,340,821 km',
        'lengthOfYear': '11.9 Earth years',
    },
    'saturn': {
        'name': 'Saturn',
        'planetType': 'Gas Giant',
        'diameter': '116,464 km',
        'distanceFromSun': '1,426,666,422 km',
        'lengthOfYear': '29.5 Earth years',
    },
    'venus': {
        'name': 'Venus',
        'planetType': 'Terrestrial Planet',
        'diameter': '12,104 km',
        'distanceFromSun': '108,209,475 km',
        'lengthOfYear': '225 Earth days',
    },
    'mercury': {
        'name': 'Mercury',
        'planetType': 'Terrestrial Planet',
        'diameter': '4,879 km',
        'distanceFromSun': '57,909,227 km',
        'lengthOfYear': '88 Earth days',
    },
    'uranus': {
        'name': 'Uranus',
        'planetType': 'Gas Giant',
        'diameter': '50,724 km',
        'distanceFromSun': '2,870,658,186 km',
        'lengthOfYear': '84.0 Earth years',
    },
    'mars': {
        'name': 'Mars',
        'planetType': 'Terrestrial Planet',
        'diameter': '6,779 km',
        'distanceFromSun': '227,943,824 km',
        'lengthOfYear': '1.9 Earth years',
    },
    'neptune': {
        'name': 'Neptune',
        'planetType': 'Gas Giant',
        'diameter': '49,244 km',
        'distanceFromSun': '4,498,396,441 km',
        'lengthOfYear': '164.8 Earth years',
    }
}


// listens for root directory request, responds with index.html
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=>{
    response.json(planets)
})

app.get('/api/:planetName', (request, response)=>{
    const planetsName = request.params.planetName.toLowerCase()
    // if/else to check if planet name is in database
    if(planets[planetsName]){
        response.json(planets[planetsName])
    } else {
        console.log('Not a planet, try again.')
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log('Server is running')
})