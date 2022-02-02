var input = document.querySelector("#valor-real");

var span = document.querySelector("#dolar-hoje");
// console.log(span.textContent);

var botao = document.querySelector("#converter");

botao.addEventListener("click", function(){

	var sectionConversor = document.querySelector("[data-conteudo=conversor]");
	console.log(sectionConversor);

	sectionConversor.lastChild.remove();

	var valor = input.value.replace("," , ".");
	// console.log(valor);

	if (span.textContent != "") {
		// console.log(span.textContent);

		var stringDolar = span.textContent;
		var DigitosDolar = stringDolar.slice(stringDolar.length - 4);
		// console.log(DigitosDolar);

		var resultado = (valor*DigitosDolar).toFixed(2);
		console.log(resultado);

		var divNova = document.createElement("div");
		divNova.classList.add("conversao");

		// divNova.innerHTML = "R$"+resultado;
		divNova.innerHTML = `R$ ${resultado}`;

		sectionConversor.appendChild(divNova);
	}

});