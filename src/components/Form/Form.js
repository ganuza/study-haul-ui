
import { useState } from 'react'
import './Form.css'

function Form({ addUserAnswer }) {

  const [answer, setAnswer] = useState('')

  const submitAnswer = (event) => {
    event.preventDefault()

    const newUserAnswer = answer

    addUserAnswer(newUserAnswer)

    clearForm()
  }

  const clearForm = () => {
    setAnswer('')
  }

  return (
    <form>
      <textarea
        rows={5}
        placeholder='Enter Your Answer'
        value={answer}
        onChange={event => setAnswer(event.target.value)}
      />
      
      <button className='filter-btn' onClick={(event) => submitAnswer(event)}>Submit Answer</button>
    </form>
  )
}

export default Form