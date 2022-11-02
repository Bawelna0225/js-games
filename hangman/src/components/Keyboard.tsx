import React from 'react'

const KEYS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

type KeyboardProps = {
    disabled: boolean
	activeLetters: string[]
	inactiveLetters: string[]
	addGuessedLetter: (letter: string) => void
}

const Keyboard = ({disabled, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) => {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '25px' }}>
			{KEYS.map((key) => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
				return <button className={`${isActive ? 'active' : ""} ${isInactive ? 'inactive' : ""}`} key={key} disabled={isInactive || isActive} onClick={() => addGuessedLetter(key)}>{key}</button>
			})}
		</div>
	)
}

export default Keyboard
