const connection = require('./connection')

function getTopicList (db = connection) {
  return db('topics')
    .select()
}

function getTopicById (id, db = connection) {
  return db('topics')
    .where('topics.id', id).first()
}

module.exports = {
  getTopicList,
  getTopicById
}
