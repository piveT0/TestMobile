/*
	- Pra que tanto codigo
	se a vida não e programada?
	e os melhores momento da vida
	não tem logica.
	 
	By: https://github.com/Neguin0
*/
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let map = document.querySelectorAll('.block');
map = [...map];
let player = "X";

VerifyAgent()

map.forEach((e) => e.onclick = () => clickBox(e));

function clickBox(e) {
	if (e.innerText !== '') return;
	
	e.innerText = player;
	player = player === 'X' ? 'O' : 'X';
	
	msg.innerText = 'Vez do ' + player;
	const pos = checkWin();
	if (pos) {
		msg.innerText = map[pos[0]].innerText + ' Venceu!!';
		
		changeColor(pos);
		map.forEach((e) => e.onclick = null);
	}
	
	if (map.every((e) => e.innerText !== '')) msg.innerText = 'Deu velha!';
}

function checkWin() {
	const PossiveisVitorias = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	
	let board = map.map((e) => e.innerText);
	
	return PossiveisVitorias.find((e) => {
		const [a, b, c] = e;
		
		if (board[a] === board[b] && board[b] === board[c])
		return board[a];
	});
}

function changeColor(array) {
	array.forEach((e) => map[e].style.background = 'rgba(69, 250, 69, 0.863)');
}

function VerifyAgent(){
if(isMobile) return document.querySelector('.box').style.width = '700px', document.querySelector('.box').style.heigth = '700px', console.log('mudado');
}