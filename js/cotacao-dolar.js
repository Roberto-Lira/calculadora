var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados?formato=json");

xhr.addEventListener("load", function(){

	if (xhr.status == 200) {
		// console.log(xhr.responseText);

		var resposta = xhr.responseText;
		// console.log(typeof resposta);

		var cotacao = JSON.parse(resposta);
		// console.log(cotacao);
		// console.log(typeof cotacao);

		var ultimaCotacao = cotacao.pop();
		var valorDolar = parseFloat(ultimaCotacao.valor);
		// console.log(valorDolar);
		// console.log(typeof valorDolar);

		var retorno = document.querySelector("#dolar-hoje");
		retorno.innerHTML = "R$"+valorDolar.toFixed(2);

	}else{
		console.log(xhr.status);
		console.log(xhr.responseText);
	}

})

xhr.send();

