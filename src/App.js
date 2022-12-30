import React, { useState } from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
	height: 100vh;
	width: 100vw;
  	background-color: orange;
`;

export default function App() {
	const [name, setName] = useState('')

	const findJapaneseName = (englishName) => {
		englishName = englishName.toUpperCase()

		const JapaneseName = {
			"A": "ka",
			"B": "zu",
			"C": "mi",
			"D": "te",
			"E": "ku",
			"F": "lu",
			"G": "ji",
			"H": "ri",
			"I": "ki",
			"J": "zu",
			"K": "me",
			"L": "ta",
			"M": "rin",
			"N": "to",
			"O": "mo",
			"P": "no",
			"Q": "ke",
			"R": "shi",
			"S": "ari",
			"T": "chi",
			"U": "do",
			"V": "ru",
			"W": "me",
			"X": "na",
			"Y": "fu",
			"Z": "zi"
		}

		let finalName = ''

		for (let i = 0; i < englishName.length; i++) {
			finalName += JapaneseName[englishName[i]]
		}

		setName(finalName)
	}

	return <PageWrapper >
		<input onChange={(event) => {
			findJapaneseName(event.target.value)
		}}></input>
		<h1>{name}</h1>
	</PageWrapper>
}