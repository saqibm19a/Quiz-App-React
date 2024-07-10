import { useState } from "react"

function App() {
  // State Vaiables
  const [currentQuestion , setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  // Quiz Questions Array
  const questions = [
    {
      question: 'Where does the sun rise?',
      options: ['East','West','North','South'],
      correctAnswer: 'East'
    },
    {
      question: 'Captiol of the Pakistan ?',
      options: ['Lahor','Islamabad','Karchi','Peshawer'],
      correctAnswer: 'Islamabad'
    },
    {
      question: 'What the soluation of 1 + 0 ?',
      options: ['10','01','0','1'],
      correctAnswer: '1'
    },
  ]

  function handleOptionClick(selectedOption){
    // SCORE: if selectedOption === correctAnswer
    if (selectedOption === questions[currentQuestion].correctAnswer){
      setScore(score + 1)
    }

    // NEXT
    const nextQuestion = currentQuestion + 1 
    // Agar Array ma agla sawal hu tu ya chalay ga
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    }else{
      // Hamary pass current Question last Question ho
      // IF LAST: Show Score
      setShowScore(true)
    }

  }
  

  return (
    <div className="root-container">

    {/* App Heading */}
      <h1 className="main-heading">Quiz Application</h1>

      {/* {`You got ${score} question right out of ${questions.length}.`} */}
      
      {showScore ? [
        <p>You got {score} questions right out of {questions.length}.</p>
      ]:[
        <>
      {/* Current Question */}
      {/* {questions.map(item => <p>{item.question}</p>)} */}
      <h1 className="current-question">{questions[currentQuestion].question}</h1>

      {/* Current Question's Options */}
      <div className="option-container">
      {questions[currentQuestion].options.map((option,index)=>{return <button key={index} onClick={()=>handleOptionClick(option)}> {option}</button>})}
      </div>
        </>
      ]}


    </div>
  )
}

export default App
