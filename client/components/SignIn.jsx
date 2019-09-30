import React, { useState } from 'react'

import { GridForm, ColOne, ColTwo, Button } from './Styled'

import { isAuthenticated, signIn } from 'authenticare/client'

export default function SignIn (props) {
  const [form, setForm] = useState({
    username: 'form',
    password: ''
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    signIn({
      username: form.username,
      password: form.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/sponsor/guidance')
        }
      })
  }

  return (
  <>
  <h2>Sign in</h2>
  <GridForm>
    <ColOne>Username:</ColOne>
    <ColTwo name='username'
      value={form.username}
      onChange={handleChange} />

    <ColOne>Password:</ColOne>
    <ColTwo name='password'
      type='password'
      value={form.password}
      onChange={handleChange} />

    <Button type='button' onClick={handleClick}>Sign in</Button>
  </GridForm>
  </>
  )
}
