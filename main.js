const targetDiv = document.querySelector('.target')
const answerDiv = document.querySelector('.answer')
const redInput = document.querySelector('#answer-red')
const greenInput = document.querySelector('#answer-green')
const blueInput = document.querySelector('#answer-blue')
const btn = document.querySelector('.fa-solid')
const inputInfo = document.querySelector('.input-info')
const resultInfo = document.querySelector('.result-info')
const btnNextRound = document.querySelector('.bnt-nextround')

let red = Math.floor(Math.random() * 256)
let blue = Math.floor(Math.random() * 256)
let green = Math.floor(Math.random() * 256)
console.log(`Here is your target color if you need help: ${red} ${green} ${blue}`)

const setTargetColor = () => {
	targetDiv.style.backgroundColor = `rgb(${red},${green},${blue})`
}

const checkAnswer = (r, g, b) => {
	if (r === red && g === green && b === blue) {
		correct(r, g, b)
	} else {
		wrong(r, g, b)
	}
}

const correct = (r, g, b) => {
	answerDiv.style.backgroundColor = `rgb(${r},${g},${b})`
	resultInfo.style.color = 'green'
	resultInfo.textContent = 'Good Job! Play next round'
	resultInfo.classList.add('visible')
	btnNextRound.classList.add('visible')
	console.log('Correct answer submitted')
}

const wrong = (r, g, b) => {
	answerDiv.style.backgroundColor = `rgb(${r},${g},${b})`
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
	const rValue = parseInt(redInput.value, 10)
	const gValue = parseInt(greenInput.value, 10)
	const bValue = parseInt(blueInput.value, 10)

	if (isNaN(rValue) || isNaN(gValue) || isNaN(bValue)) {
		inputInfo.classList.add('visible')
		resultInfo.classList.remove('visible')
		inputInfo.textContent = 'Please, enter numbers from 0 to 255 in every cell'
		inputInfo.style.color = 'royalblue'
	} else if (rValue < 0 || rValue > 255 || gValue < 0 || gValue > 255 || bValue < 0 || bValue > 255) {
		resultInfo.classList.remove('visible')
		inputInfo.classList.add('visible')
		inputInfo.textContent = 'You put wrong scope, enter numbers from 0 to 255 in every cell'
		inputInfo.style.color = 'royalblue'
	} else {
		inputInfo.classList.remove('visible')
		checkAnswer(rValue, gValue, bValue)
	}
})

btnNextRound.addEventListener('click', nextRound)
