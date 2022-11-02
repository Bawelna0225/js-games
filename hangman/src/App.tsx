import { useCallback, useEffect, useState } from 'react'
import './style.css'
import Drawing from './components/Drawing'
import Keyboard from './components/Keyboard'
import Word from './components/Word'
import words from './wordList.json'

function getWord() {
	return words[Math.floor(Math.random() * words.length)]
}

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)]
	})
	const [guessedLetters, setGuessedLetters] = useState([])

	const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter))

	const didUserLose = incorrectLetters.length >= 6
	const didUserWin = wordToGuess.split('').every((letter) => guessedLetters.includes(letter))

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || didUserLose || didUserWin) return

			setGuessedLetters((currentLetters) => [...currentLetters, letter])
		},
		[guessedLetters, didUserLose, didUserWin]
	)

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key

			if (!key.match(/^[a-z]$/)) return

			e.preventDefault()
			addGuessedLetter(key)
		}
		document.addEventListener('keypress', handler)

		return () => {
			document.removeEventListener('keypress', handler)
		}
	}, [guessedLetters])

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key

			if (key !== 'Enter') return

			e.preventDefault()
			setGuessedLetters([])
			setWordToGuess(getWord())
		}
		document.addEventListener('keypress', handler)

		return () => {
			document.removeEventListener('keypress', handler)
		}
	}, [])

	return (
		<>
			<div className="overlay" style={{visibility: `${didUserLose || didUserWin ? 'visible' : 'hidden'}`}}>
				<h1>Click "Enter" to Refresh</h1>
        <h2>{didUserLose ? 'You Lost, Try Again!' : 'You Won, Congratulations!'}</h2>
			</div>
			<div style={{ display: 'flex', gap: '50px', flexDirection: 'column', width: 'min(calc(100% - 2rem), 1000px)', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
				<Drawing numberOfGuesses={incorrectLetters.length} />
				<Word reveal={didUserLose} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
				<div style={{ alignSelf: 'stretch' }}>
					<Keyboard
						disabled={didUserLose || didUserWin}
						activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
						inactiveLetters={incorrectLetters}
						addGuessedLetter={addGuessedLetter}
					/>
				</div>
			</div>
		</>
	)
}

export default App
