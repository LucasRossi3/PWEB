function play(userChoice) {
	// Escolha do computador
	var computerChoice = Math.random();
	if (computerChoice < 0.33) {
		computerChoice = "pedra";
	} else if (computerChoice < 0.66) {
		computerChoice = "papel";
	} else {
		computerChoice = "tesoura";
	}

	// Determina o vencedor
	var result;
	if (userChoice === computerChoice) {
		result = "Empate!";
	} else if (userChoice === "pedra" && computerChoice === "tesoura" ||
			   userChoice === "papel" && computerChoice === "pedra" ||
			   userChoice === "tesoura" && computerChoice === "papel") {
		result = "Você venceu!";
	} else {
		result = "Você perdeu!";
	}

	// Exibe o resultado
	document.getElementById("result-message").innerHTML = "Você escolheu " + userChoice + ", o computador escolheu " + computerChoice + ". " + result;
	document.getElementsByClassName("options")[0].style.display = "none";
	document.getElementsByClassName("result")[0].style.display = "block";
}

function reset() {
	// Reinicia o jogo
	document.getElementsByClassName("options")[0].style.display = "flex";
	document.getElementsByClassName("result")[0].style.display = "none";
}
