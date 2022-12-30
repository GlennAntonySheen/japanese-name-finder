import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImg from './assets/backgroundImg.svg'

const PageWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
  	background-color: white;

	img { 
		height: 100vh;
		width: 100vw;
		position: absolute;
	}
`;

const InputContainer = styled.div`
	height: fit-content;
	width: 45%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	/* justify-content: centre; */
	align-items: center;
	gap: 3rem;
	z-index: 1;
	/* background-color: green; */

	input {
		height: 150px;
		width: 90%;
		padding: 1rem;
		flex: 2;
		font-size: 30px;
		border-radius: 1rem;
		border: none;
		outline: none;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		background: rgba(255, 255, 255, 0.28);
		border-radius: 16px;
	}

	h1 {
		height: 150px;
		width: 90%;
		margin: 0;
		padding: 1rem;
		flex: 2; 
		display: flex;
		align-items: center;
		border-radius: 1rem;
		/* background-color: yellow; */
	}
`;

export default function App() {
	const [name, setName] = useState('')

	function capitalizeFirstLetterOfEveryWord(string) {
		if (string === '') {
			return ''
		}
		const words = string.split(" ");

		for (let i = 0; i < words.length; i++) {
			words[i] = words[i][0].toUpperCase() + words[i].substr(1);
		}

		return words.join(" ");
	}

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
			if (JapaneseName[englishName[i]] === undefined) {
				finalName += englishName[i]
			} else {
				finalName += JapaneseName[englishName[i]]
			}

		}

		setName(capitalizeFirstLetterOfEveryWord(finalName))
	}

	return <PageWrapper >
		<img src={BackgroundImg} alt='background wallpaper' />
		{/* <BackgroundImg /> */}
		<InputContainer>
			<input
				placeholder='Please, Enter Your Name'
				onChange={(event) => findJapaneseName(event.target.value)} />
			<h1>{name}</h1>
		</InputContainer>
	</PageWrapper>
}