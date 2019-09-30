exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      // Inserts seed entries
      return knex('topics').insert([
        { id: 1, topic: 'Depression' },
        { id: 2, topic: 'Stress' },
        { id: 3, topic: 'Phobia' },
        { id: 4, topic: 'Bullying' },
        { id: 5, topic: 'Addiction' },
        { id: 6, topic: 'PTSD' },
        { id: 7, topic: 'OCD' },
        { id: 8, topic: 'Dissociative episodes' },
        { id: 9, topic: 'Dysphoria' },
        { id: 10, topic: 'Tics' },
        { id: 11, topic: 'Psychosis' },
        { id: 12, topic: 'Paranoia' },
        { id: 13, topic: 'Body image/eating' },
        { id: 14, topic: 'Anxiety' },
        { id: 15, topic: 'Bipolar' }
      ])
    })
}
