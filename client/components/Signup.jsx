import React, { Component, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => (
  <>
    <h1>Sign up</h1>
    <form action="/register" method="post">
        <section>
            <label for="username">Username</label>
            <input id="username" name="username" type="text" autocomplete="username" required />
        </section>
        <section>
            <label for="new-password">Password</label>
            <input id="new-password" name="password" type="password" autocomplete="new-password" required />
        </section>
        <button type="submit">Sign up</button>
    </form>   
  </>
  
)

export default Signup;