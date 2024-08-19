let tipValue = 0.15
let selected = 3
let billValue
let peopleValue

const billInput = document.querySelector('.bill-input')
const peopleInput = document.querySelector('.people-input')
const tipList = document.querySelector('.tip-list')
const billWarning = document.querySelector('.bill-warning')
const peopleWarning = document.querySelector('.people-warning')
const output1 = document.querySelector('.tip-amount-display')
const output2 = document.querySelector('.total-amount-display')
const resetBtn = document.querySelector('.reset-button')

const option1 = document.getElementById('num1')
const option2 = document.getElementById('num2')
const option3 = document.getElementById('num3')
const option4 = document.getElementById('num4')
const option5 = document.getElementById('num5')
const option6 = document.getElementById('num6')

function calculate() {
	if (billValue > 0 && peopleValue >= 1 && tipValue > 0) {
		output1.textContent = `$${((billValue * tipValue) / peopleValue).toFixed(
			2
		)}`
		output2.textContent = `$${(
			(billValue * (1 + tipValue)) /
			peopleValue
		).toFixed(2)}`
	} else {
		output1.textContent = '$0.00'
		output2.textContent = '$0.00'
	}
}

function reset() {
	tipValue = 0.15
	billValue = ''
	peopleValue = ''
	billInput.value = ''
	peopleInput.value = ''
	option3.checked = true
	billWarning.style.display = 'none'
	peopleWarning.style.display = 'none'
	calculate()
}

billInput.addEventListener('keyup', (e) => {
	billValue = +e.target.value
	if (/^[a-zA-Z]*$/.test(billValue)) {
		console.log('tested for letters')
		billWarning.style.color = 'red'
		billWarning.style.display = 'block'
	} else {
		billWarning.style.display = 'none'
		calculate(billValue)
	}
})

peopleInput.addEventListener('keyup', (e) => {
	peopleValue = +e.target.value
	if (/^[a-zA-Z]*$/.test(e.target.value) || peopleValue === 0) {
		console.log('tested for letters')
		peopleWarning.style.color = 'red'
		peopleWarning.style.display = 'block'
		peopleWarning.style.fontSize = '0.55rem'
	} else {
		peopleWarning.style.display = 'none'
		calculate(peopleValue)
	}
})

tipList.addEventListener('click', (e) => {
	tipValue = +e.target.value
	if (!isNaN(tipValue)) {
		calculate(tipValue)
	}
})

resetBtn.addEventListener('click', reset)

calculate()
