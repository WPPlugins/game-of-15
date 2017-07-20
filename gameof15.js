
var game15 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]];
var numMosse = 0;
function scegliImg(){
	//var immagine = Math.floor((Math.random() * 2) + 1);
	var divNameControl = 'Inner_';
	return divNameControl;
}

var num = 1;
for(i = 0; i<4; i++){
	if(game15[i].indexOf(0) != '-1'){
		posiZ = i;
		posjZ = game15[i].indexOf(0);
	}
}

window.onload = function() {
	divNameControl = scegliImg();
	var ni = document.getElementById('game');
	var numi = document.getElementById('game');
	aSop = posiZ-1; ajSop = posjZ;
	aSot = posiZ+1; ajSot = posjZ;
	aLeft = posjZ-1; aiLeft = posiZ;
	aRight = posjZ+1; aiRight = posiZ;
	for(i = 0; i<4; i++){
		for(j = 0; j<4; j++){
			var newdiv = document.createElement('div');
			var divIdName = divNameControl + game15[i][j];
			if(game15[i][j] == '0'){
				newdiv.setAttribute('id','0');
				newdiv.setAttribute('class', 'blank');
				ni.appendChild(newdiv);
			}else{
				newdiv.setAttribute('id',divIdName);
				newdiv.setAttribute('class', 'InnerDiv');
				if(i == aSop && j == ajSop){
					newdiv.setAttribute('onClick', 'muovi(1); return false;');
				}else if(i == aSot && j == ajSot){
					newdiv.setAttribute('onClick', 'muovi(2); return false;');
				}else if(i == aiLeft && j== aLeft){
					newdiv.setAttribute('onClick', 'muovi(3); return false;');
				}else if(i == aiRight && j == aRight){
					newdiv.setAttribute('onClick', 'muovi(4); return false;');
				}
				newdiv.innerHTML = ''+game15[i][j]+'';
				ni.appendChild(newdiv);
			}
		}
	}
	//3 destra; 4 sinistra 1 sopra; 2 sotto.
	var nix = document.getElementById('controls');
	nix.setAttribute('onclick','shuffle()');
}
	
function muovi(direzione, shuf = 0){
	for(i = 0; i<4; i++){
		if(game15[i].indexOf(0) != '-1'){
			j = game15[i].indexOf(0);
			//var k = 0;
			if(direzione == '3'){
				if(posjZ != 0){
					var k = j-1;
				}
				else{
					var k = j;
				}
				var m = i;
			}else if(direzione == '4'){
				if(posjZ != 3){
					var k = j+1;
				}else{
					var k = j;
				}
				var m = i;	
			}else if(direzione == '2'){
				if(posiZ != 3){
					var m = i+1;
				}else{
					var m = i;
				}
				var k = j;
			}else if(direzione == '1'){
				if(posiZ != 0){
					var m = posiZ-1;
				}else{
					var m = i;
				}
				var k = j;
			} 
			valoreVecchio = game15[m][k];
			game15[i][j] = valoreVecchio;
		}
	}
	game15[m][k] = 0;
	if(shuf == 0){
		numMosse++;
		controlla(game15);
	}
	update(game15, divNameControl);
}
function controlla(game15){
	k = 1;
	for(i = 0; i<4; i++){
		for(j = 0; j<4; j++){
			if(game15[i][j] == k){

				if(k == 15 && game15[3][3]==0){
					alert('Complimenti! Hai vinto!!');
				}
				k++;
			}
		}
	}

}
function update(game15, divNameControl){
var numix = document.getElementById('status');
document.getElementById('status').innerHTML = 'Numero mosse: <span>'+numMosse+'</span>';
	var list = document.getElementById("game");
	while (list.hasChildNodes()) {   
    	list.removeChild(list.firstChild);
	}
	for(i = 0; i<4; i++){
		if(game15[i].indexOf(0) != '-1'){
			posiZ = i;
			posjZ = game15[i].indexOf(0);
		}
	}
	var ni = document.getElementById('game');
	var numi = document.getElementById('game');
	aSop = posiZ-1; ajSop = posjZ;
	aSot = posiZ+1; ajSot = posjZ;
	aLeft = posjZ-1; aiLeft = posiZ;
	aRight = posjZ+1; aiRight = posiZ;
	for(i = 0; i<4; i++){
		for(j = 0; j<4; j++){
			var newdiv = document.createElement('div');
			var divIdName = divNameControl + game15[i][j];
			if(game15[i][j] == '0'){
				newdiv.setAttribute('id','0');
				newdiv.setAttribute('class', 'blank');
				ni.appendChild(newdiv);
			}else{
				newdiv.setAttribute('id',divIdName);
				newdiv.setAttribute('class', 'InnerDiv');
				if(i == aSop && j == ajSop){
					newdiv.setAttribute('onClick', 'muovi(1); return false;');
				}else if(i == aSot && j == ajSot){
					newdiv.setAttribute('onClick', 'muovi(2); return false;');
				}else if(i == aiLeft && j== aLeft){
					newdiv.setAttribute('onClick', 'muovi(3); return false;');
				}else if(i == aiRight && j == aRight){
					newdiv.setAttribute('onClick', 'muovi(4); return false;');
				}
				newdiv.innerHTML = ''+game15[i][j]+'';
				ni.appendChild(newdiv);
			}
		}
	}
}

function shuffle(){
	divNameControl = scegliImg();
	var shuf = 1;
	for(z=0; z<1000; z++){
		valore = Math.floor((Math.random() * 4) + 1);
		muovi(valore,shuf);
	}

}
