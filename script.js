var paysage;
var rogue;
var rogueReverse;
var knight;
var knightReverse;
var slash;
var slashReverse;
var sol = 335;

/////////////////ROGUE////////////////////////////
var vitesseRogueX = 0;
var rogueX = 450;
var vitesseRogueY = 0;
var rogueY = sol;
var vieRogue = true;

/////////////////KNIGHT///////////////////////////
var vitesseKnightX = 0;
var knightX = 1300;
var vitesseKnightY = 0;
var knightY = sol;
var vieKnight = true;

/////////////////Compteur/////////////////////////
var compteurSautRogue = 0;
var compteurSautKnight = 0;
var compteurCoupRogue = 0;
var compteurCoupKnight = 0;

/////////////////KNIGHT///////////////////////////
var bordGauche = 195;
var bordDroite = 1489;
////////////////COMBAT / SLASH///////////////////
var frappeKnight = 0;
var frappeRogue = 0;
var slashKnightX;
var slashRogueX;
var slashKnightXReverse;
var slashRogueXReverse;
var sensKnight = true;
var sensRogue = true;

function preload(){
	paysage = loadImage("img/Stagev2.png");
	rogue = loadImage("img/Rogue.png");
	rogueReverse = loadImage("img/RogueReverse.png");
	knight = loadImage("img/Knight1.png");
	knightReverse = loadImage("img/Knight.png");
	slash = loadImage("img/slash.png");
	slashReverse = loadImage("img/SlashReverse.png");
	}

function setup(){
	createCanvas(1800,800);
	background(paysage);
}

function draw(){
	frameRate(120);
	background(paysage);
	
	/////////Chargement En X///////////////////////////
	if(vieKnight == true && vieRogue == true){
		knightX = knightX + vitesseKnightX;
		rogueX = rogueX + vitesseRogueX;
	}
	
	/////////Chargement en Y////////////////////////////
		knightY = knightY - vitesseKnightY;
		rogueY = rogueY - vitesseRogueY;
	
	if(sensKnight == true){
		image(knight,knightX,knightY,100,100);
		if(frappeKnight == 1){
			slashKnightX = knightX-80;
			image(slashReverse,slashKnightX,knightY,100,100);
			compteurCoupKnight += 1;
			if(slashKnightX-50 <= rogueX +50 && slashKnightX+50 > rogueX-50 &&  knightY == rogueY){
				rogueX -= 10;
			}
			if(compteurCoupKnight == 10){
				frappeKnight = 0;
				compteurCoupKnight = 0;
			}
		}
	}
	if(sensRogue == true){
		image(rogue,rogueX,rogueY,100,100);
		if(frappeRogue == 1){
			slashRogueX = rogueX+ 80;
			image(slash,slashRogueX,rogueY,100,100);
			compteurCoupRogue += 1;
			if(slashRogueX+50 >= knightX -50 && slashRogueX-50 <= knightX+50 && rogueY == knightY){
				knightX += 10;0
0			}
			if(compteurCoupRogue == 10){ 
				frappeRogue =0;
				compteurCoupRogue = 0;
			}
		}
	}
	if(sensKnight == false){
		image(knightReverse,knightX,knightY,100,100);
		if(frappeKnight == 1){
			slashKnightX = knightX+80;
			image(slash,slashKnightX,knightY,100,100);
			compteurCoupKnight += 1;
			if(slashKnightX+50 >= rogueX -50 && slashKnightX-50 < rogueX+50 && knightY == rogueY){
				rogueX += 10;
			}
			if(compteurCoupKnight == 10){
				frappeKnight = 0;
				compteurCoupKnight = 0;
			}
		}
	}
	if(sensRogue == false){
		image(rogueReverse,rogueX,rogueY,100,100);
		if(frappeRogue == 1){
			slashRogueX = rogueX- 80;
			image(slashReverse,slashRogueX,rogueY,100,100);
			compteurCoupRogue += 1;
			if(slashRogueX-50 <= knightX +50 && slashRogueX+50 > knightX-50 && rogueY == knightY){
				knightX -= 10;
				
			}
			if(compteurCoupRogue == 10){ 
				frappeRogue =0;
				compteurCoupRogue = 0;
			}
		}
	}
	

////////Test / Controle//////////////////////////////
	
	/////////////////ROGUE//////////////////////////////
	if (rogueY < 165){
		vitesseRogueY = vitesseRogueY - 2;
	}
	
	if(rogueY > sol && rogueX > bordGauche && rogueX < bordDroite){
		rogueY = sol;
		vitesseRogueY = 0;
		compteurSautRogue = 0;
	}

	if (rogueX < bordGauche || rogueX > bordDroite) {
		vitesseRogueY = vitesseRogueY - 2;
		if (rogueY > sol+20){
			vieRogue = false;
		}
	}
	
	/////////////////KNIGHT/////////////////////////////
	if(knightY < 165){
		vitesseKnightY = vitesseKnightY - 2;
	}
	if(knightY > sol && knightX > bordGauche && knightX < bordDroite){
		knightY = sol;
		vitesseKnightY = 0;
		compteurSautKnight = 0;
	}
	if (knightX < bordGauche || knightX > bordDroite) {
		vitesseKnightY = vitesseKnightY - 2;
		if (knightY > sol+20){
			vieKnight = false;
		}
	}
	
}

function keyPressed()
{
/////////////////ROGUE////////////////////////////

	if(keyCode == RIGHT_ARROW){
		vitesseRogueX = 5;	
		sensRogue = true;
	}
	
	if(keyCode == LEFT_ARROW){
		vitesseRogueX = -5;
		sensRogue = false;
	}
	
	if(keyCode == UP_ARROW && compteurSautRogue <1){
		vitesseRogueY = vitesseRogueY + 20;
		compteurSautRogue = compteurSautRogue + 1;
	}
	
/////////////////KNIGHT///////////////////////////
	if(keyCode == '68'){
		vitesseKnightX = 5;
		sensKnight = false;
	}
	if(keyCode == '81') {
		vitesseKnightX = -5;
		sensKnight = true;
	}
	if(keyCode == '90' && compteurSautKnight <1){
		vitesseKnightY = vitesseKnightY + 20;
		compteurSautKnight = compteurSautKnight + 1;
	}

///////////////COMBAT////////////////////////////
	if(keyCode == '32'){
		frappeKnight = 1;
	}
	if(keyCode == '96'){
		frappeRogue = 1;
	}
}	


function keyReleased(){
/////////////////ROGUE////////////////////////////
	if (keyCode ==  RIGHT_ARROW){
		vitesseRogueX = 0;
	}
	if(keyCode == LEFT_ARROW){
		vitesseRogueX = 0;
	}
/////////////////KNIGHT///////////////////////////
	if (keyCode == '68'){
		vitesseKnightX = 0;
	}
	if (keyCode == '81'){
		vitesseKnightX = 0;
	}
}

