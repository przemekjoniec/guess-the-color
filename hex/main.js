const targetDiv = document.querySelector('.target')
const answerDiv = document.querySelector('.answer')
const answerInput = document.querySelector('#answer')
const btn = document.querySelector('.fa-solid')
const inputInfo = document.querySelector('.input-info')
const resultInfo = document.querySelector('.result-info')
const btnNextRound = document.querySelector('.bnt-nextround')

let letters = '0123456789ABCDEF'
let color = '#'
for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)]
console.log(`Here is your target color if you need help: ${color}`)

const setTargetColor = () => {
	targetDiv.style.backgroundColor = color
}

const checkAnswer = value => {
	if (value === color) {
		correct(value)
	} else {
		wrong(value)
	}
}

const correct = value => {
	answerDiv.style.backgroundColor = value
	resultInfo.style.color = 'green'
	resultInfo.textContent = 'Good Job! Play next round'
	resultInfo.classList.add('visible')
	btnNextRound.classList.add('visible')
}

const wrong = value => {
	answerDiv.style.backgroundColor = value
	resultInfo.style.color = 'red'
	resultInfo.textContent = 'Wrong! Try one more time'
	resultInfo.classList.add('visible')
	btnNextRound.classList.remove('visible')
}

const nextRound = () => {
	location.reload()
}

setTargetColor()

btn.addEventListener('click', () => {
	let value = answerInput.value.trim().toUpperCase()
	const hexPattern = /^[0-9A-F]{6}$/
	if (value === '') {
		inputInfo.classList.add('visible')
		resultInfo.classList.remove('visible')
		inputInfo.textContent = 'Please, enter your answer'
		inputInfo.style.color = 'royalblue'
	} else if (!hexPattern.test(value)) {
		inputInfo.classList.add('visible')
		resultInfo.classList.remove('visible')
		inputInfo.textContent = 'Invalid input! Please enter a valid hex code (0-9, A-F)'
		inputInfo.style.color = 'royalblue'
	} else {
		inputInfo.classList.remove('visible')
		value = `#${value}`
		console.log(value)
		checkAnswer(value)
	}
})

btnNextRound.addEventListener('click', nextRound)
