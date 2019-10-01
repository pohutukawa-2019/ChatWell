const { generateHash } = require('authenticare/server')

exports.seed = knex = {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Iris', hash: irisPass },
        {id: 2, username: 'Katrina', hash: katrinaPass },
        {id: 3, username: 'Michael', hash: michaelPass },
        {id: 4, username: 'Raemon', hash: raemonPass },
        {id: 5, username: 'Marvin', hash: marvinPass },
        {id: 6, username: 'Henry', hash: henryPass }
      ])
    })
}
