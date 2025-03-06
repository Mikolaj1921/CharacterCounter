import {useState} from 'react'
import './App.css'

function App() {
  const [text, setText] = useState(''); // text state

  // event.target - <textarea> element
  // Функція для обробки зміни тексту
  const handleTextChange = (event) => {
    const newText = event.target.value; // новий текст
    if(newText.length <= 9999){
      setText(newText); // оновити текст (limit 9999 characters)
    }
  }
  const characterCount = text.length; // word count

  //word count (метода фільтр видаляє порожні слова і звертає улементи які виконують умову)
  // і з цього ми отримуємо кількість слів
  const wordCount = text.split(' ').filter((word) => word !== '').length;

  //sentence count
  //sentence.trim().length > 0 - видаляє (пробіли) на початку і в кінці речення 
  const sentenceCount = text
  .split(/[.!?]+/) // розділяє текст на речення
  .filter((sentence) => sentence && sentence.trim().length > 0 && /^[A-Z]/.test(sentence.trim()))
  .length;

  //reading time
  const wordsPerMinute = 200; // середня швидкість читання в хвилину
  const readingTime = wordCount / wordsPerMinute; // час читання в хвилинах
  const ReadingTimeDisplay = readingTime.toFixed(1) + ' min read'; // вивід час читання (ск. до 1 знаку)
  

  

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
              value={text}
              className='text-input'
              onChange={handleTextChange}
              placeholder='Start typing here... (or paste your text)'
            ></textarea>
          </div>
          <div className='Approx_reading-time'>
            <h3>Approx. Reading time: {ReadingTimeDisplay}</h3>
          </div>
          {/*output text area*/}
          <div className='output-area'>
            <div className='total-chr'>
              <p>{characterCount}</p>
              <h2>Total Characters</h2>
            </div>
            <div className='word-count'>
              <p>{wordCount}</p>
              <h2>Word Count</h2>
            </div>
            <div className='sentence-count'>
              <p>{sentenceCount}</p>
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
