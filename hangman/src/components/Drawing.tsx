import React from 'react'
const HEAD = <div style={{ width: '50px', height: '50px', border: '10px solid white', borderRadius: '50%', position: 'absolute', top: '40px', right: ' -30px' }} />
const TORSO = <div style={{ width: '10px', height: '100px', backgroundColor: 'white', position: 'absolute', top: '110px', right: '0px' }} />
const LEFT_ARM = <div style={{ width: '100px', height: '10px', backgroundColor: 'white', position: 'absolute', top: '110px', right: '0px', rotate: '-50deg', transformOrigin: 'bottom right' }} />
const RIGHT_ARM = <div style={{ width: '100px', height: '10px', backgroundColor: 'white', position: 'absolute', top: '115px', right: '-100px', rotate: '50deg', transformOrigin: 'top left' }} />
const LEFT_LEG = <div style={{ width: '10px', height: '100px', backgroundColor: 'white', position: 'absolute', top: '200px', right: '0px', rotate: '20deg', transformOrigin: 'top left' }} />
const RIGHT_LEG = <div style={{ width: '10px', height: '100px', backgroundColor: 'white', position: 'absolute', top: '200px', right: '0px', rotate: '-20deg', transformOrigin: 'top left' }} />

const BODY_PARTS = [HEAD, TORSO, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type DrawingProps = {
	numberOfGuesses: number
}

const Drawing = ({ numberOfGuesses }: DrawingProps) => {
	return (
		<div style={{ position: 'relative' }}>
			{BODY_PARTS.slice(0, numberOfGuesses)}
			<div className="rope" style={{ width: '10px', height: '40px', backgroundColor: 'white', position: 'absolute', right: 0 }} />
			<div className="top" style={{ width: '150px', height: '10px', backgroundColor: 'white', marginLeft: '90px' }} />
			<div className="pole" style={{ width: '10px', height: '350px', backgroundColor: 'white', marginLeft: '90px' }} />
			<div className="base" style={{ width: '200px', height: '10px', backgroundColor: 'white' }} />
		</div>
	)
}

export default Drawing
