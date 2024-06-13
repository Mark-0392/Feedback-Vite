import { useState, useEffect } from 'react'
import people from './data'
import { FaQuoteLeft, FaChevronRight, FaChevronLeft } from 'react-icons/fa'
const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const prevBtn = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex - 1
      // if (newIndex < 0) {
      //   return people.length - 1
      // }
      return checkNumber(newIndex)
    })
  }

  const nextBtn = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex + 1
      // if (newIndex > people.length - 1) {
      //   return 0
      // }
      return checkNumber(newIndex)
    })
  }

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }

  return (
    <main>
      <section className="review">
        <h2 style={{ marginBottom: '2rem' }}>Feedbacks</h2>
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteLeft />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevBtn}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextBtn}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomReview}
        >
          random
        </button>
      </section>
    </main>
  )
}
export default App
