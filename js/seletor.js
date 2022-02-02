var abas = document.querySelectorAll("[data-aba]");

function esconderConteudos(){
	var conteudos = document.querySelectorAll("[data-conteudo]");

	conteudos.forEach(function(conteudo){
		conteudo.classList.add("hide");
	});
}

function inativarAbas(){
	abas.forEach(function(aba){
		aba.classList.remove("ativa");
	})
}

function ativarConteudo(valor){
	var conteudo = document.querySelector(`[data-conteudo="${valor}"]`);
	conteudo.classList.remove("hide");
}

function ativarAba(aba){
	aba.classList.add("ativa");
}


abas.forEach(aba => aba.addEventListener("click", function(){

	var valor = aba.dataset.aba;

	esconderConteudos();
	inativarAbas();
	ativarConteudo(valor);
	ativarAba(aba);

}));

