// maps through the list of available users (sponsors or clients), comparing their topics with the user's topics
// returns the available user with the most matching topics
// if there are multiple available users that score the same highest score, returns the first one
// if there are no matches, returns the first available user in the list

const matchTopics = (user, availableUsers) => {
  const scores = availableUsers.map((userMatch) => {
    let score = 0
    userMatch.topics.forEach((userMatchTopic) => {
      user.topics.forEach((topic) => {
        (topic === userMatchTopic) ? score++ : score
      })
    })
    return {
      room: userMatch.room,
      username: userMatch.username,
      usertype: userMatch.usertype,
      topics: userMatch.topics,
      score: score
    }
  })
  const bestMatch = scores.reduce((accumulator, currentValue) => {
    return (accumulator.score >= currentValue.score ? accumulator : currentValue)
  })
  return bestMatch
}

module.exports = matchTopics

// This is O(n^3) - really inefficient
// To improve, could make it stop when it finds an exact match or:
// to make this more efficient, reverse it
// store all topics as arrays in an object and add the sponsor to the topic
// that way only the topics are being looped through on multiple levels
// rather than looping through the pool of available users on multiple levels, which can grow exponentially
