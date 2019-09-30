const connection = require('./connection')
// const environment = process.env.NODE_ENV || 'development'
// const config = require('./knexfile')[environment]
// const connection = require('knex')(config)

function getTopicList (db = connection) {
  return db('topics')
    .select()
}

function getTopicById (id, db = connection) {
  console.log(id, '---')
  return db('topics')
    .where('id', id)
    .first()
}

module.exports = {
  getTopicList,
  getTopicById
}
