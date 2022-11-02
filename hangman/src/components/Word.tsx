type WordProps = {
	reveal?: boolean
	guessedLetters: string[]
	wordToGuess: string
}

const Word = ({ reveal, guessedLetters, wordToGuess }: WordProps) => {
	return (
		<div style={{ display: 'flex', gap: '20px', fontSize: '6rem', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'monospace' }}>
			{wordToGuess.split('').map((letter, index) => (
				<span style={{ borderBottom: '10px solid white' }} key={index}>
					<span style={{ visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden', color: !guessedLetters.includes(letter) && reveal ? 'red' : 'white' }}>{letter}</span>
				</span>
			))}
		</div>
	)
}

export default Word
