//total
var total = 0;
//cria o balão
function criarBalao(){
	var balao = document.createElement('div')
	balao.setAttribute("class", "balao")
	var x = Math.floor(Math.random() * 600)
	var y = Math.floor(Math.random() * 300)

	balao.setAttribute("style", "left:" +x+"px;top:"+y+"px;");
	balao.setAttribute("onclick", "estourar(this)")

	document.body.appendChild(balao)

	console.log('balão criado')
	

}

//estourar o balao
function estourar(objeto){
	document.body.removeChild(objeto);

	total++;
	var score = document.getElementById('total');
	score.innerHTML = "points: " + total;
	console.log('acertou miseravi')
}


//carregar o game
function carregarJogo(){
	setInterval(criarBalao, 500);
	var btn=document.getElementById('btn')
	var esconder = document.getElementById('esconder')
	esconder.setAttribute("style" , "display:none")
	btn.setAttribute("style", "display:none")
	console.log("o game começou")

}