require('dotenv').config();
const mongoose = require('mongoose');
const Team = require('../api/teams/teams.model');
const Match = require('../api/matches/matches.model');

const dbName = process.env.MONGODB;


const teams = [
  {
    name: 'Argentina',
    flag: 'argentina.svg'
  },
  {
    name: 'Brasil',
    flag: 'argentina.svg'
  },
  {
    name: 'Colombia',
    flag: 'argentina.svg'
  },
  {
    name: 'Perú',
    flag: 'argentina.svg'
  },
  {
    name: 'Uruguay',
    flag: 'argentina.svg'
  },
  {
    name: 'Bélgica',
    flag: 'argentina.svg'
  },
  {
    name: 'Croacia',
    flag: 'argentina.svg'
  },
  {
    name: 'Dinamarca',
    flag: 'argentina.svg'
  },
  {
    name: 'Inglaterra',
    flag: 'argentina.svg'
  },
  {
    name: 'Francia',
    flag: 'argentina.svg'
  },
  {
    name: 'Alemania',
    flag: 'argentina.svg'
  },
  {
    name: 'Islandia',
    flag: 'argentina.svg'
  },
  {
    name: 'Polonia',
    flag: 'argentina.svg'
  },
  {
    name: 'Portugal',
    flag: 'argentina.svg'
  },
  {
    name: 'Rusia',
    flag: 'argentina.svg'
  },
  {
    name: 'Serbia',
    flag: 'argentina.svg'
  },
  {
    name: 'España',
    flag: 'argentina.svg'
  },
  {
    name: 'Suecia',
    flag: 'argentina.svg'
  },
  {
    name: 'Suiza',
    flag: 'argentina.svg'
  },
  {
    name: 'Costa Rica',
    flag: 'argentina.svg'
  },
  {
    name: 'México',
    flag: 'argentina.svg'
  },
  {
    name: 'Panamá',
    flag: 'argentina.svg'
  },
  {
    name: 'Egipto',
    flag: 'argentina.svg'
  },
  {
    name: 'Marruecos',
    flag: 'argentina.svg'
  },
  {
    name: 'Nigeria',
    flag: 'argentina.svg'
  },
  {
    name: 'Senegal',
    flag: 'argentina.svg'
  },
  {
    name: 'Túnez',
    flag: 'argentina.svg'
  },
  {
    name: 'Australia',
    flag: 'argentina.svg'
  },
  {
    name: 'Irán',
    flag: 'argentina.svg'
  },
  {
    name: 'Japón',
    flag: 'argentina.svg'
  },
  {
    name: 'Arabia Saudí',
    flag: 'argentina.svg'
  },
  {
    name: 'Corea del Sur',
    flag: 'argentina.svg'
  },
  {
    name: 'Sin Equipo',
    flag: 'argentina.svg'
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
    round: 'Group',
    group: 'A'
  },
  {
    home: 'Egipto',
    away: 'Uruguay',
    stadium: {
      name: 'Ekaterinburg Stadium',
      city: 'Ekaterinburgo',
    },
    date: new Date('2018-06-15T16:00:00'),
    round: 'Group',
    group: 'A'
  },
  {
    home: 'Marruecos',
    away: 'Irán',
    stadium: {
      name: 'San Petersburgo Stadium',
      city: 'San Petersburgo',
    },
    date: new Date('2018-06-15T17:00:00'),
    round: 'Group',
    group: 'B'
  },
  {
    home: 'Portugal',
    away: 'España',
    stadium: {
      name: 'Fisht Stadium',
      city: 'Sochi',
    },
    date: new Date('2018-06-15T20:00:00'),
    round: 'Group',
    group: 'B'
  },
  {
    home: 'Francia',
    away: 'Australia',
    stadium: {
      name: 'Kazan Stadium',
      city: 'Kazan',
    },
    date: new Date('2018-06-16T12:00:00'),
    round: 'Group',
    group: 'C'
  },
  {
    home: 'Argentina',
    away: 'Islandia',
    stadium: {
      name: 'Spartak Stadium',
      city: 'Moscú',
    },
    date: new Date('2018-06-16T15:00:00'),
    round: 'Group',
    group: 'D'
  },
  {
    home: 'Perú',
    away: 'Dinamarca',
    stadium: {
      name: 'Mordovia Stadium',
      city: 'Saransk',
    },
    date: new Date('2018-06-16T18:00:00'),
    round: 'Group',
    group: 'C'
  },
  {
    home: 'Croacia',
    away: 'Nigeria',
    stadium: {
      name: 'Kazan Stadium',
      city: 'Kazan',
    },
    date: new Date('2018-06-16T21:00:00'),
    round: 'Group',
    group: 'D'
  },
  {
    home: 'Costa Rica',
    away: 'Serbia',
    stadium: {
      name: 'Samara Stadium',
      city: 'Samara',
    },
    date: new Date('2018-06-17T14:00:00'),
    round: 'Group',
    group: 'E'
  },
  {
    home: 'Alemania',
    away: 'México',
    stadium: {
      name: 'Luzhniki Stadium',
      city: 'Moscú',
    },
    date: new Date('2018-06-17T17:00:00'),
    round: 'Group',
    group: 'F'
  },
  {
    home: 'Brasil',
    away: 'Suiza',
    stadium: {
      name: 'Rostov Arena',
      city: 'Rostov-On-Don',
    },
    date: new Date('2018-06-17T20:00:00'),
    round: 'Group',
    group: 'E'
  },
  {
    home: 'Suecia',
    away: 'Corea del Sur',
    stadium: {
      name: 'Nizhny Novgorod Arena',
      city: 'Nizhny Novgorod',
    },
    date: new Date('2018-06-18T14:00:00'),
    round: 'Group',
    group: 'F'
  },
  {
    home: 'Bélgica',
    away: 'Panamá',
    stadium: {
      name: 'Fisht Arena',
      city: 'Sochi',
    },
    date: new Date('2018-06-18T17:00:00'),
    round: 'Group',
    group: 'G'
  },
  {
    home: 'Túnez',
    away: 'Inglaterra',
    stadium: {
      name: 'Volgograd Arena',
      city: 'Volgograd',
    },
    date: new Date('2018-06-18T20:00:00'),
    round: 'Group',
    group: 'G'
  },
  {
    home: 'Colombia',
    away: 'Japón',
    stadium: {
      name: 'Mordovia Arena',
      city: 'Saransk',
    },
    date: new Date('2018-06-19T14:00:00'),
    round: 'Group',
    group: 'H'
  },
  {
    home: 'Polonia',
    away: 'Senegal',
    stadium: {
      name: 'Spartak Arena',
      city: 'Moscú',
    },
    date: new Date('2018-06-19T17:00:00'),
    round: 'Group',
    group: 'H'
  },
  {
    home: 'Rusia',
    away: 'Egipto',
    stadium: {
      name: 'San Petersburgo Arena',
      city: 'San Petersburgo',
    },
    date: new Date('2018-06-19T20:00:00'),
    round: 'Group',
    group: 'A'
  },
  {
    home: 'Portugal',
    away: 'Marruecos',
    stadium: {
      name: 'Luzhniki Arena',
      city: 'Moscú',
    },
    date: new Date('2018-06-20T14:00:00'),
    round: 'Group',
    group: 'B'
  },
  {
    home: 'Uruguay',
    away: 'Arabia Saudí',
    stadium: {
      name: 'Rostov Arena',
      city: 'Rostov-On-Don',
    },
    date: new Date('2018-06-20T17:00:00'),
    round: 'Group',
    group: 'A'
  },
  {
    home: 'Irán',
    away: 'España',
    stadium: {
      name: 'Kazan Arena',
      city: 'Kazan',
    },
    date: new Date('2018-06-20T20:00:00'),
    round: 'Group',
    group: 'B'
  },
  {
    home: 'Dinamarca',
    away: 'Australia',
    stadium: {
      name: 'Samara Arena',
      city: 'Samara',
    },
    date: new Date('2018-06-21T14:00:00'),
    round: 'Group',
    group: 'C'
  },
  {
    home: 'Francia',
    away: 'Perú',
    stadium: {
      name: 'Ekateriburg Arena',
      city: 'Ekateriburg',
    },
    date: new Date('2018-06-21T17:00:00'),
    round: 'Group',
    group: 'C'
  },
  {
    home: 'Argentina',
    away: 'Croacia',
    stadium: {
      name: 'Nizhny Novgorod Arena',
      city: 'Nizhny Novgorod',
    },
    date: new Date('2018-06-21T20:00:00'),
    round: 'Group',
    group: 'D'
  },
  {
    home: 'Brasil',
    away: 'Costa Rica',
    stadium: {
      name: 'San Petersburgo Stadium',
      city: 'San Petersburgo',
    },
    date: new Date('2018-06-22T14:00:00'),
    round: 'Group',
    group: 'E'
  },
  {
    home: 'Nigeria',
    away: 'Islandia',
    stadium: {
      name: 'Volgograd Arena',
      city: 'Volgograd',
    },
    date: new Date('2018-06-22T17:00:00'),
    round: 'Group',
    group: 'D'
  },
  {
    home: 'Serbia',
    away: 'Suiza',
    stadium: {
      name: 'Kaliningrad Stadium',
      city: 'Kaliningrad',
    },
    date: new Date('2018-06-22T20:00:00'),
    round: 'Group',
    group: 'E'
  },
  {
    home: 'Bélgica',
    away: 'Túnez',
    stadium: {
      name: 'Spartak Stadium',
      city: 'Moscú',
    },
    date: new Date('2018-06-23T14:00:00'),
    round: 'Group',
    group: 'G'
  },
  {
    home: 'Corea del Sur',
    away: 'México',
    stadium: {
      name: 'Rostov Arena',
      city: 'Rostov-On-Don',
    },
    date: new Date('2018-06-23T17:00:00'),
    round: 'Group',
    group: 'F'
  },
  {
    home: 'Alemania',
    away: 'Suecia',
    stadium: {
      name: 'Fisht Stadium',
      city: 'Sochi',
    },
    date: new Date('2018-06-23T20:00:00'),
    round: 'Group',
    group: 'F'
  },
  {
    home: 'Inglaterra',
    away: 'Panamá',
    stadium: {
      name: 'Nizhny Novgorod Stadium',
      city: 'Nizhny Novgorod',
    },
    date: new Date('2018-06-24T14:00:00'),
    round: 'Group',
    group: 'G'
  },
  {
    home: 'Japón',
    away: 'Senegal',
    stadium: {
      name: 'Ekaterinburg Stadium',
      city: 'Ekaterinburg',
    },
    date: new Date('2018-06-24T17:00:00'),
    round: 'Group',
    group: 'H'
  },
  {
    home: 'Polonia',
    away: 'Colombia',
    stadium: {
      name: 'Kazan Arena',
      city: 'Kazan',
    },
    date: new Date('2018-06-24T20:00:00'),
    round: 'Group',
    group: 'H'
  },
  {
    home: 'Uruguay',
    away: 'Rusia',
    stadium: {
      name: 'Samara Arena',
      city: 'Samara',
    },
    date: new Date('2018-06-25T16:00:00'),
    round: 'Group',
    group: 'A'
  },
  {
    home: 'Arabia Saudí',
    away: 'Egipto',
    stadium: {
      name: 'Volgograd Arena',
      city: 'Volgograd',
    },
    date: new Date('2018-06-25T16:00:00'),
    round: 'Group',
    group: 'A'
  },
  {
    home: 'Irán',
    away: 'Portugal',
    stadium: {
      name: 'Mordovia Arena',
      city: 'Saransk',
    },
    date: new Date('2018-06-25T20:00:00'),
    round: 'Group',
    group: 'B'
  },
  {
    home: 'España',
    away: 'Marruecos',
    stadium: {
      name: 'Kaliningrad Stadium',
      city: 'Kaliningrad',
    },
    date: new Date('2018-06-25T20:00:00'),
    round: 'Group',
    group: 'B'
  },
  {
    home: 'Dinamarca',
    away: 'Francia',
    stadium: {
      name: 'Luzhniki Stadium',
      city: 'Moscú',
    },
    date: new Date('2018-06-26T16:00:00'),
    round: 'Group',
    group: 'C'
  },
  {
    home: 'Australia',
    away: 'Perú',
    stadium: {
      name: 'Fisht Stadium',
      city: 'Sochi',
    },
    date: new Date('2018-06-26T16:00:00'),
    round: 'Group',
    group: 'C'
  },
  {
    home: 'Nigeria',
    away: 'Argentina',
    stadium: {
      name: 'San Petersburgo Stadium',
      city: 'San Petersburgo',
    },
    date: new Date('2018-06-26T20:00:00'),
    round: 'Group',
    group: 'D'
  },
  {
    home: 'Islandia',
    away: 'Croacia',
    stadium: {
      name: 'Rostov Stadium',
      city: 'Rostov-On-Don',
    },
    date: new Date('2018-06-26T20:00:00'),
    round: 'Group',
    group: 'D'
  },
  {
    home: 'México',
    away: 'Suecia',
    stadium: {
      name: 'Ekaterinburg Stadium',
      city: 'Ekaterinburg',
    },
    date: new Date('2018-06-27T16:00:00'),
    round: 'Group',
    group: 'F'
  },
  {
    home: 'Corea del Sur',
    away: 'Alemania',
    stadium: {
      name: 'Kazan Arena',
      city: 'Kazan',
    },
    date: new Date('2018-06-27T16:00:00'),
    round: 'Group',
    group: 'F'
  },
  {
    home: 'Serbia',
    away: 'Brasil',
    stadium: {
      name: 'Spartak Stadium',
      city: 'Moscú',
    },
    date: new Date('2018-06-27T20:00:00'),
    round: 'Group',
    group: 'E'
  },
  {
    home: 'Suiza',
    away: 'Costa Rica',
    stadium: {
      name: 'Nizhny Novgorod Stadium',
      city: 'Nizhny',
    },
    date: new Date('2018-06-27T20:00:00'),
    round: 'Group',
    group: 'E'
  },
  {
    home: 'Japón',
    away: 'Polonia',
    stadium: {
      name: 'Volgograd Arena',
      city: 'Volgograd',
    },
    date: new Date('2018-06-28T16:00:00'),
    round: 'Group',
    group: 'H'
  },
  {
    home: 'Senegal',
    away: 'Colombia',
    stadium: {
      name: 'Samara Arena',
      city: 'Samara',
    },
    date: new Date('2018-06-28T16:00:00'),
    round: 'Group',
    group: 'H'
  },
  {
    home: 'Panamá',
    away: 'Túnez',
    stadium: {
      name: 'Mordovia Arena',
      city: 'Saransk',
    },
    date: new Date('2018-06-28T20:00:00'),
    round: 'Group',
    group: 'G'
  },
  {
    home: 'Inglaterra',
    away: 'Bélgica',
    stadium: {
      name: 'Kaliningrad Arena',
      city: 'Kaliningrad',
    },
    date: new Date('2018-06-28T20:00:00'),
    round: 'Group',
    group: 'G'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Kazan Arena',
      city: 'Kazan',
    },
    date: new Date('2018-06-30T16:00:00'),
    round: '1/8 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Fisht Stadium',
      city: 'Sochi',
    },
    date: new Date('2018-06-30T20:00:00'),
    round: '1/8 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Luzhniki Stadium',
      city: 'Moscú',
    },
    date: new Date('2018-07-01T16:00:00'),
    round: '1/8 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Nizhny Novgorod Stadium',
      city: 'Nizhny Novgorod',
    },
    date: new Date('2018-07-01T20:00:00'),
    round: '1/8 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Samara Arena',
      city: 'Samara',
    },
    date: new Date('2018-07-02T16:00:00'),
    round: '1/8 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Rostov Arena',
      city: 'Rostov-On-Don',
    },
    date: new Date('2018-07-02T20:00:00'),
    round: '1/8 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'San Petersburgo Arena',
      city: 'San Petersburgo',
    },
    date: new Date('2018-07-03T16:00:00'),
    round: '1/8 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Spartak Arena',
      city: 'Moscú',
    },
    date: new Date('2018-07-03T20:00:00'),
    round: '1/8 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Nizhny Novgorod Stadium',
      city: 'Nizhny Novgorod',
    },
    date: new Date('2018-07-06T16:00:00'),
    round: '1/4 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Kazan Arena',
      city: 'Kazan',
    },
    date: new Date('2018-07-06T20:00:00'),
    round: '1/4 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Samara Arena',
      city: 'Samara',
    },
    date: new Date('2018-07-07T16:00:00'),
    round: '1/4 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Fisht Stadium',
      city: 'Sochi',
    },
    date: new Date('2018-07-07T20:00:00'),
    round: '1/4 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'San Petersburgo Stadium',
      city: 'San Petersburgo',
    },
    date: new Date('2018-07-10T20:00:00'),
    round: '1/2 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Luzhniki Stadium',
      city: 'Moscú',
    },
    date: new Date('2018-07-11T20:00:00'),
    round: '1/2 Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'San Petersburgo Stadium',
      city: 'San Petersburgo',
    },
    date: new Date('2018-07-14T16:00:00'),
    round: 'Finals'
  },
  {
    home: 'Sin Equipo',
    away: 'Sin Equipo',
    stadium: {
      name: 'Luzhniki Stadium',
      city: 'Moscú',
    },
    date: new Date('2018-07-15T17:00:00'),
    round: 'Finals'
  },
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
  const matchPromises = [];
  matches.forEach(match => {
    const homeTeam = teams.find((element) => element.name == match.home )
    const awayTeam = teams.find((element) => element.name == match.away )
    const newMatch = new Match({
      home: {
        team_id: homeTeam._id
      },
      away: {
        team_id: awayTeam._id
      },
      date: match.date,
      stadium: match.stadium,
      round: match.round,
      group: match.group
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
