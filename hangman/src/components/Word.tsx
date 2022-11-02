import React from 'react'
const word = 'test'
const guessedLetters = ['t', 'e']
const Word = () => {
	return (
		<div style={{ display: 'flex', gap: '20px', fontSize: '6rem', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'monospace' }}>
			{word.split('').map((letter, index) => (
				<span style={{ borderBottom: '10px solid black' }} key={index}>
					<span style={{ visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>
				</span>
			))}
		</div>
	)
}

export default Word
