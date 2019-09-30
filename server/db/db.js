const connection = require('./connection')

const { generateHash } = require('authenticare/server')

function getTopicList (db = connection) {
  return db('topics')
    .select()
}

function getTopicById (id, db = connection) {
  return db('topics')
    .where('id', id)
    .first()
}

function createUser (username, password, db = connection) {
  return userExists(username, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('User exists'))
      }
    })
    .then(() => generateHash(password))
    .then(passwordHash => {
      return db('users').insert({ username, hash: passwordHash })
    })
}

function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, db = connection) {
  return db('users')
    .select()
    .where('username', username)
    .first()
}

module.exports = {
  getTopicList,
  getTopicById,
  createUser,
  userExists,
  getUserByName
}
