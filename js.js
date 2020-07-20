var colorpion = 2;

function init(){ /* On initialise le tableau */ 

	td = document.getElementsByTagName("td"); /* Retourne un tableau d'objets HTML à partir de nom de la balise.  On récupére les éléments par rapport à leur nom dans un élément. Ici td. */

	for( var i = 0; i < td.length; i++ ) {

		td[i].onclick = function(){

			var number = parseInt(this.id);

			ligne = Math.ceil(number/7); /* Retrouve le plus petit entier supérieur ou égal à 7  */

			base = number + ((6-ligne)*7) /* Permet de trouver la plus petite case de la colonne pour y placer le pion (le pion, au puissance 4, se place de bas en haut) */

			while( true ){

				if( document.getElementById(base).style.backgroundImage != 'url("jaune.png")' && document.getElementById(base).style.backgroundImage != 'url("rouge.png")' ){

					if ( base > 0 ) {

						if ( colorpion%2 == 1 ) { /* si le quotient est impaire, les cases seront coloriées en rouge... */

							document.getElementById(base).style.background = "url(rouge.png)";  /* Ajoute l'image pion rouge en fond */ 
							colorpion++; /* Ajoute un coup au jeu */ 

						}else { /* ...sinon en jaune. C'est donc les pions jaunes qui commencent */

							document.getElementById(base).style.background = "url(jaune.png)"; /* Ajoute l'image pion jaune en fond */ 
							colorpion++; /* Ajouteun coup au jeu */ 

						}
					}

					break; /* Permet d'interrompre la boucle while */ 

				}else { 

					base -=7; /* Permet de passer à la case du dessus */ 

				}

			}


	 	}

	}

}
