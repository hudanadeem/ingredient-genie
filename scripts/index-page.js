import RecipeApi from "./recipe-api.js";

const api = new RecipeApi();

const recipeSectionEl = document.getElementById("recipeList");
const recipeFooterEl = document.getElementById("recipeSection");

recipeFooterEl.classList.add("hidden");

async function getRecipesAndRender(formattedInput){
    try{  

        const resp = await api.getRecipes(formattedInput);
        recipeSectionEl.innerHTML="";
        resp.forEach(displayRecipes);

        if (resp.length > 0) {
            recipeFooterEl.classList.remove("hidden");
        } else {
            recipeFooterEl.classList.add("hidden");
        }
  
    }catch(e){
        console.log(e);
    }
}

getRecipesAndRender();

function displayRecipes(recipe) {
    // Recipe container
    const recipeContainer = document.createElement("div");
    recipeContainer.className = "recipe-section__item";

    // Recipe title
    const recipeTitle = document.createElement("h3");
    recipeTitle.textContent = recipe.title;

    // Recipe image
    const recipeImg = document.createElement("img");
    recipeImg.src = recipe.image;
    recipeImg.alt = recipe.title;
    recipeImg.className = "recipe-section__img";

    recipeContainer.append(recipeTitle, recipeImg);

    recipeSectionEl.append(recipeContainer);
}


const form = document.getElementById("form");

form.addEventListener("submit", async(e) =>{
    e.preventDefault();

    const inputString = e.target.ingredients;
    const userString = inputString.value;
    const formattedInput = userString.replace(/,\s*/g, ",+");

    if (userString ==="") {
        recipeFooterEl.classList.add ("hidden");
        return;
    }
    
    getRecipesAndRender(formattedInput);

    inputString.value = "";
})