const connection = require('./connection')

function getTopics (db = connection) {
  return db('topics')
    .select()
}

function getTopicById (id, db = connection) {
  return db('topics')
    .where('id', id).first()
}

module.exports = {
  getTopics,
  getTopicById
}
