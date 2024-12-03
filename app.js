// j'appelle l'url du site qui me fournira les données
// ou du fichier jeson
fetch("data.json")
.then((reponse)=>{
    //cette reponse la n'est pas exploitable directement
    // il faut la transformer en json
    return reponse.json()
})
.then((recettes)=>{
    console.log(recettes)
    // Recette ici est un tableau qui contient 5 recettes
    // je boucle dessus et pour chaque recettes:
    // je l'affiche dans ma page web
    recettes.forEach(recettes=>{
    afficher(recettes)
    })
})

function afficher(recette) {
    // Extraction des données des recettes
    let nomRecette = recette.nom; // Nom de la recette
    let imag = recette.img; // Url de l'image de la recette
    let difcult = recette.difficulte; // Niveau de difficulte de la recette
    let tempsCuisson = recette.tempCuisson; // Delai de cuisson
    let nbrPersn = recette.portions; // Nombre de personnes qui peuvent manger cette recette
    let ingrd = recette.ingredients; // Liste des ingredients
    let tempsPrep = recette.tempPreparation; // Le temps de preparation de la recette
    console.log(ingrd)
// Sélection de l'élément du DOM qui contiendra les produits
    let recetteContainer = document.querySelector('#recetteContainer');

// pour les ingredients on a besoin de reconstruire 
// <li>200 gr de pate</li>
let listeIng = ""
recette.ingredients.forEach(ing=>{
    listeIng+=`<li>${ing.quantite} ${ing.unite} ${ing.aliment}</li>`
})
console.log(listeIng)

recetteContainer.innerHTML += `
<div class="details">
                <h2>${nomRecette}</h2>
                <p><strong>Difficulté:</strong>${difcult}</p>
                <p><strong>Temps de préparation:</strong> ${tempsPrep}</p>
                <p><strong>Portions:</strong> ${nbrPersn} </p>
                <p><strong>Temps de cuisson:</strong> ${tempsCuisson}</p>
                <div class="ingredients">
                    <h3>Ingrédients</h3>
                    <ul>
                       ${listeIng}
                    </ul>
                </div>
                <div class="steps">
                    <h3>Étapes</h3>
                    <ol>
                        <li>Hacher l'ail, l'oignon, puis coupez la carotte et le céleri en petits dés.</li>

                        <li>Faites chauffer l'huile dans une grande casserole. Faites revenir l'oignon, la carotte et le céleri à feu doux pendant 5 min en remuant.</li>

                        <li>Ajoutez la viande hachée et faites-la revenir en l'émiettant à l'aide d'une cuillère en bois. Faites brunir et remuez de façon à ce que la viande ne fasse pas de gros paquets.</li>

                        <li>Ajoutez le bouillon, les tomates préalablement coupées ainsi grossièrement, le sucre et le persil haché. Portez à ébullition.</li>
                    </ol>
                </div>
                <div class="recipe-image">
                    <img src="${imag}" alt="Spaghetti Bolognaise">
                </div>
            </div>`

}

