// maps through the list of available users (sponsors or clients), comparing their topics with the user's topics
// returns the available user with the most matching topics
// if there are multiple available users that score the same highest score, returns the first one
// if there are no matches, returns the first available user in the list

const matchTopics = (user, availableUsers) => {
  const scores = availableUsers.map((userMatch) => {
    let score = 0
    let sharedTopics = []
    userMatch.topics.forEach((userMatchTopic) => {
      user.topics.forEach((topic) => {
        if (topic === userMatchTopic) {
          score++
          sharedTopics.push(topic)
        }
      })
    })
    return {
      room: userMatch.room,
      sharedTopics,
      score
    }
  })
  const bestMatch = scores.reduce((accumulator, currentValue) => {
    return (accumulator.score >= currentValue.score ? accumulator : currentValue)
  })
  return bestMatch
}

module.exports = matchTopics

// This is O(n^3) - really inefficient
// To improve, could make it stop when it finds an exact match
// eg: if score === user.topics.length, return that match
// or:
// to make this even more efficient, reverse it
// store all topics as arrays in an object and add the sponsor to the topic
// that way only the topics are being looped through on multiple levels
// rather than looping through the pool of available users on multiple levels, which can grow exponentially
