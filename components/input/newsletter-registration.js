import { useRef } from 'react'
import classes from './newsletter-registration.module.css'

function NewsletterRegistration() {
  const emailInputRef = useRef()
  function registrationHandler(event) {
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    fetch('/api/newsLetter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  return (
    <section className={classes.newsletter}>
      <h2>注册用户</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='邮箱'
            aria-label='邮箱'
            ref={emailInputRef}
          />
          <button>注册</button>
        </div>
      </form>
    </section>
  )
}

export default NewsletterRegistration
