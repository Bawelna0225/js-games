import { useState } from 'react'
import Drawing from './components/Drawing'
import Keyboard from './components/Keyboard'
import words from './wordList.json'

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)]
	})
	const [guessedLetters, setGuessedLetters] = useState([])

	return (
		<div>
			<Drawing />
			<Keyboard />
		</div>
	)
}

export default App
