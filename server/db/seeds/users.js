const { generateHash } = require('authenticare/server')

exports.seed = knex => {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('Iris'),
      generateHash('Katrina'),
      generateHash('Michael'),
      generateHash('Raemon'),
      generateHash('Marvin'),
      generateHash('Henry')
    ]))
    .then(([irisHash, katrinaHash, michaelHash, raemonHash, marvinHash, henryHash]) =>
      knex('users').insert([
        { id: 1, username: 'Iris', hash: 'irisHash' },
        { id: 2, username: 'Katrina', hash: 'katrinaHash' },
        { id: 3, username: 'Michael', hash: 'michaelHash' },
        { id: 4, username: 'Raemon', hash: 'raemonHash' },
        { id: 5, username: 'Marvin', hash: 'marvinHash' },
        { id: 6, username: 'Henry', hash: 'henryHash' }
      ])
    )
}
