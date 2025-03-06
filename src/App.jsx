import React from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className="App-header">
        <div className='logo'></div>
        <h1>Character Counter</h1>
      </header>

      {/*main*/}
      <main className='App-main'>

        <section className='App-section'>

          <div className='Title-area'>
            <h1>Analyze your text in real-time.</h1>
          </div>
          {/*input text area*/}
          <div className='input-area'>
            <textarea
              /*value={text}*/
              className='text-input'
              /*onChange={handleTextChange}*/
              placeholder='Start typing here... (or paste your text)'
            ></textarea>
          </div>
          <div className='Approx_reading-time'>
            <h3>Approx. Reading time:</h3>
          </div>
          {/*output text area*/}
          <div className='output-area'>
            <div className='total-chr'>
              <p>00</p>
              <h2>Total Characters</h2>
            </div>
            <div className='word-count'>
              <p>00</p>
              <h2>Word Count</h2>
            </div>
            <div className='sentence-count'>
              <p>00</p>
              <h2>Sentence Count</h2> 
            </div>
          </div>

          <div className='letter-density'>
            <h2> Letter Density: </h2>
          </div>

        </section>

      </main>
    </div>
  )
}

export default App
