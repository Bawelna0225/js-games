import { useState } from 'react'
import './style.css';
import Drawing from './components/Drawing'
import Keyboard from './components/Keyboard'
import Word from './components/Word'
import words from './wordList.json'

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)]
	})
	const [guessedLetters, setGuessedLetters] = useState([])

	return (
		<div style={{ display: 'flex',gap: '50px' , flexDirection: 'column', width: 'min(calc(100% - 2rem), 800px)', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
			<Drawing />
			<Word />
			<div style={{ alignSelf: 'stretch' }}>
				<Keyboard />
			</div>
		</div>
	)
}

export default App
