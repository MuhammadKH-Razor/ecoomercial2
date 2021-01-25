import React, { useEffect, useRef } from 'react'

const Apps = () => {
	const usernameRef = useRef(null)
	const passwordRef = useRef(null)

	useEffect(() => {
		usernameRef.current.focus()
  })
  
	const usernameNext = (e) => {
		if (e.key === "Enter") {
      passwordRef.current.focus()
		}
  }
  
	const passwordNext = (e) => {
    if (e.which === 13) {
      login()
    }
    // if(e.location === 0) {
    //   login()
    // }
	}
	const login = () => alert('Welcome')

	return (
		<>
			<h3>Login App</h3>
			<input type="text" placeholder="username" ref={ usernameRef } onKeyDown={ usernameNext }/>
			<br/>
			<input type="password" placeholder="password" ref={ passwordRef } onKeyDown={ passwordNext }/>
			<br/>
			<button onClick={ login }>LOGIN</button>
		</>
	)
}

export default Apps