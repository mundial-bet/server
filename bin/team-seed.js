require('dotenv').config();
const mongoose = require('mongoose');
const Team = require('../api/teams/teams.model');
const Match = require('../api/matches/matches.model');

const dbName = process.env.MONGODB;


const teams = [
  {
    name: 'Argentina',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Brasil',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Colombia',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Peru',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Uruguay',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Bélgica',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Croacia',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Dinamarca',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Inglaterra',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Francia',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Alemania',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Islandia',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Polonia',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Portugal',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Rusia',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Serbia',
    flag: '/images/argentina.svg'
  },
  {
    name: 'España',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Suecia',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Suiza',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Costa Rica',
    flag: '/images/argentina.svg'
  },
  {
    name: 'México',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Panamá',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Egipto',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Marruecos',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Nigeria',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Senegal',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Túnez',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Australia',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Irán',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Japón',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Arabia Saudí',
    flag: '/images/argentina.svg'
  },
  {
    name: 'Corea del Sur',
    flag: '/images/argentina.svg'
  }
]

const matches = [ 
  {
    home: 'Rusia',
    away: 'Arabia Saudí',
    stadium: {
      name: 'Luzhniki Stadium',
      city: 'Moscú',
    },
    date: new Date('2018-06-14T17:00:00'),
    round: 'Group'
  },
  {
    home: 'Egipto',
    away: 'Uruguay',
    stadium: {
      name: 'Ekaterinburg Stadium',
      city: 'Ekaterinburgo',
    },
    date: new Date('2018-06-15T16:00:00'),
    round: 'Group'
  },
  {
    home: 'Marruecos',
    away: 'Irán',
    stadium: {
      name: 'San Petersburgo Stadium',
      city: 'San Petersburgo',
    },
    date: new Date('2018-06-15T17:00:00'),
    round: 'Group'
  },
  {
    home: 'Portugal',
    away: 'España',
    stadium: {
      name: 'Fisht Stadium',
      city: 'Sochi',
    },
    date: new Date('2018-06-15T20:00:00'),
    round: 'Group'
  },
  {
    home: 'Francia',
    away: 'Australia',
    stadium: {
      name: 'Kazan Stadium',
      city: 'Kazan',
    },
    date: new Date('2018-06-16T12:00:00'),
    round: 'Group'
  },
  {
    home: 'Argentina',
    away: 'Islandia',
    stadium: {
      name: 'Spartak Stadium',
      city: 'Moscú',
    },
    date: new Date('2018-06-16T15:00:00'),
    round: 'Group'
  },
  {
    home: 'Peru',
    away: 'Dinamarca',
    stadium: {
      name: 'Mordovia Stadium',
      city: 'Saransk',
    },
    date: new Date('2018-06-16T18:00:00'),
    round: 'Group'
  },
  {
    home: 'Croacia',
    away: 'Nigeria',
    stadium: {
      name: 'Kazan Stadium',
      city: 'Kazan',
    },
    date: new Date('2018-06-16T21:00:00'),
    round: 'Group'
  },
  {
    home: 'Costa Rica',
    away: 'Serbia',
    stadium: {
      name: 'Samara Stadium',
      city: 'Samara',
    },
    date: new Date('2018-06-17T14:00:00'),
    round: 'Group'
  },
  {
    home: 'Alemania',
    away: 'México',
    stadium: {
      name: 'Luzhniki Stadium',
      city: 'Moscú',
    },
    date: new Date('2018-06-17T17:00:00'),
    round: 'Group'
  },
  {
    home: 'Brasil',
    away: 'Suiza',
    stadium: {
      name: 'Rostov Arena',
      city: 'Rostov-On-Don',
    },
    date: new Date('2018-06-17T20:00:00'),
    round: 'Group'
  },
  {
    home: 'Suecia',
    away: 'Corea del Sur',
    stadium: {
      name: 'Nizhny Novgorod Arena',
      city: 'Nizhny Novgorod',
    },
    date: new Date('2018-06-18T14:00:00'),
    round: 'Group'
  },
  {
    home: 'Bélgica',
    away: 'Panamá',
    stadium: {
      name: 'Fisht Arena',
      city: 'Sochi',
    },
    date: new Date('2018-06-18T17:00:00'),
    round: 'Group'
  },
  {
    home: 'Túnez',
    away: 'Inglaterra',
    stadium: {
      name: 'Volgograd Arena',
      city: 'Volgograd',
    },
    date: new Date('2018-06-18T20:00:00'),
    round: 'Group'
  },
  {
    home: 'Colombia',
    away: 'Japón',
    stadium: {
      name: 'Mordovia Arena',
      city: 'Saransk',
    },
    date: new Date('2018-06-19T14:00:00'),
    round: 'Group'
  },
  {
    home: 'Polonia',
    away: 'Senegal',
    stadium: {
      name: 'Spartak Arena',
      city: 'Moscú',
    },
    date: new Date('2018-06-19T17:00:00'),
    round: 'Group'
  },
  {
    home: 'Rusia',
    away: 'Egipto',
    stadium: {
      name: 'San Petersburgo Arena',
      city: 'San Petersburgo',
    },
    date: new Date('2018-06-19T20:00:00'),
    round: 'Group'
  },
  {
    home: 'Portugal',
    away: 'Marruecos',
    stadium: {
      name: 'Luzhniki Arena',
      city: 'Moscú',
    },
    date: new Date('2018-06-20T14:00:00'),
    round: 'Group'
  },
  {
    home: 'Uruguay',
    away: 'Arabia Saudí',
    stadium: {
      name: 'Rostov Arena',
      city: 'Rostov-On-Don',
    },
    date: new Date('2018-06-20T17:00:00'),
    round: 'Group'
  },
  {
    home: 'Irán',
    away: 'España',
    stadium: {
      name: 'Kazan Arena',
      city: 'Kazan',
    },
    date: new Date('2018-06-20T20:00:00'),
    round: 'Group'
  },
  {
    home: 'Dinamarca',
    away: 'Australia',
    stadium: {
      name: 'Samara Arena',
      city: 'Samara',
    },
    date: new Date('2018-06-21T14:00:00'),
    round: 'Group'
  },
  {
    home: 'Francia',
    away: 'Perú',
    stadium: {
      name: 'Ekateriburg Arena',
      city: 'Ekateriburg',
    },
    date: new Date('2018-06-21T17:00:00'),
    round: 'Group'
  },
  {
    home: 'Argentina',
    away: 'Croacia',
    stadium: {
      name: 'Nizhny Novgorod Arena',
      city: 'Nizhny Novgorod',
    },
    date: new Date('2018-06-21T20:00:00'),
    round: 'Group'
  }
]

mongoose.connect(`mongodb://localhost/${dbName}`)
  .then(() => {
    mongoose.connection.db.dropDatabase();
    createTeams()
    .then(teams => {
      teams.forEach(team => {
        console.log(`${team.name} ha sido creado!`)
      })
      Promise.all(createMatches(teams))
      .then(response => {
        mongoose.connection.close();
      })
    })
  })
  .catch(error => {
    console.log(error)
  })

createTeams = () => {
 return Team.create(teams);
}

createMatches = (teams) => {
  let matchPromises = [];
  matches.forEach(match => {
    let homeTeam = teams.find((element) => element.name == match.home )
    let awayTeam = teams.find((element) => element.name == match.away )
    let newMatch = new Match({
      home: {
        team_id: homeTeam._id
      },
      away: {
        team_id: awayTeam._id
      },
      date: match.date,
      stadium: match.stadium,
      round: match.round
    });
    matchPromises.push(new Promise((resolve, reject) => {
      newMatch.save()
      .then(matchCreated => {
        console.log(`El partido entre ${homeTeam.name} y ${awayTeam.name} ha sido creado!`);
        resolve()
      })
      .catch(error => {
        console.log(error)
      })
    }))
  })
  return matchPromises;
}
