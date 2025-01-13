// const permet de déclarer une variable en lecture seule. 
// Une variable déclarée avec const ne peut pas être modifiée ultérieurement.
// C'est une façon de "protéger" une variable pour éviter qu'elle soit modifiée par erreur.

// fetch permet de lire le fichier à l'emplacement indiqué.
// cette lecture est une opération qui "prend du temps" (asynchrone).
// await est donc l'instruction utilisée pour dire que l'on attend que l'opération soit terminée.
const templateFile = await fetch("component/Navigation/template.html");

// templateFile.text() pemret de lire et retourner le contenu du fichier sous forme de chaîne de caractères.
// c'est aussi une opération asynchrone, donc on utilise aussi await pour attendre la fin de l'opération.
const template = await templateFile.text();

const templateFile2 = await fetch("component/Navigation/template-li.html");

// templateFile.text() pemret de lire et retourner le contenu du fichier sous forme de chaîne de caractères.
// c'est aussi une opération asynchrone, donc on utilise aussi await pour attendre la fin de l'opération.
const templateLi = await templateFile2.text();

// A ce stade template contient le contenu du fichier template.html sous forme de chaîne de caractères.


/* Objet Navigation
   Navigation est un objet qui symbolise le composant Navigation. Il relève de la vue de notre "application".
*/
let Navigation = {}; 


/* Navigation.format
   . paramètre obj : un objet contenant les données de la navigation
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template
*/
Navigation.format = function(obj){
    let html = template;
    let items = "";
    for(let m of obj.menus){
        let htmlLi = templateLi;
        htmlLi = htmlLi.replace('{{label}}', m.label)
        htmlLi = htmlLi.replace('{{link}}', m.link);
        items = items + htmlLi;
    }
    html = html.replace('{{items}}', items);
    return html;
}


/* Navigation.render
  
*/
Navigation.render = function( where, what ){
    let html = "";
    for (let h of what){
        html += Navigation.format(h);
    }
    let element = document.querySelector(where)
    element.innerHTML = html;
}


// On "exporte" l'objet Navigation pour qu'il soit utilisable ailleurs.
// Seul Navigation pourra être utilisé ailleurs, pas le reste.
// Par exemple la variable/constante template ne sera pas accessible depuis l'extérieur.
export {Navigation};