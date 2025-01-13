// const permet de déclarer une variable en lecture seule. 
// Une variable déclarée avec const ne peut pas être modifiée ultérieurement.
// C'est une façon de "protéger" une variable pour éviter qu'elle soit modifiée par erreur.

// fetch permet de lire le fichier à l'emplacement indiqué.
// cette lecture est une opération qui "prend du temps" (asynchrone).
// await est donc l'instruction utilisée pour dire que l'on attend que l'opération soit terminée.
const templateFile = await fetch("component/Hero/template.html");

// templateFile.text() pemret de lire et retourner le contenu du fichier sous forme de chaîne de caractères.
// c'est aussi une opération asynchrone, donc on utilise aussi await pour attendre la fin de l'opération.
const template = await templateFile.text();

// A ce stade template contient le contenu du fichier template.html sous forme de chaîne de caractères.


/* Objet Hero
   Hero est un objet qui symbolise le composant Hero. Il relève de la vue de notre "application".
*/
let Hero = {}; 


/* Hero.format
   . paramètre r : un objet similaire à oneHero 
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template
*/
Hero.format = function(obj){
    let html = template;
    html = html.replace('{{title}}', obj.title);
    if (obj.subtitle == undefined){
        html = html.replace('{{subtitle}}', "");
    }
    else{
        html = html.replace('{{subtitle}}', obj.subtitle);
    }
    return html;
}


/* Hero.render
  
*/
Hero.render = function( where, what ){
    let html = "";
    for (let h of what){
        html += Hero.format(h);
    }
    let element = document.querySelector(where)
    element.innerHTML = html;
}


// On "exporte" l'objet Hero pour qu'il soit utilisable ailleurs.
// Seul Hero pourra être utilisé ailleurs, pas le reste.
// Par exemple la variable/constante template ne sera pas accessible depuis l'extérieur.
export {Hero};