import RecipeApi from "./recipe-api.js";

const api = new RecipeApi();
const recipeSection = document.getElementById("recipeList");

function createRecipeCards() {
    recipeSection.innerHTML = ""; 
    for (let i = 0; i < 10; i++) {
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("recipe__item");

        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe__card");

        const recipeFront = document.createElement("div");
        recipeFront.classList.add("recipe__front");

        const placeholder = document.createElement("h3");
        placeholder.classList.add("recipe__placeholder");
        placeholder.textContent = "?";
        recipeFront.appendChild(placeholder);

        const recipeBack = document.createElement("div");
        recipeBack.classList.add("recipe__back");

        const recipeTitle = document.createElement("h3");
        recipeTitle.classList.add("recipe__title");
        recipeTitle.textContent = "Recipe Title"; 
        recipeBack.appendChild(recipeTitle);

        const recipeIngredients = document.createElement("ul");
        recipeIngredients.classList.add("recipe__ingredients");
        recipeBack.appendChild(recipeIngredients);

        recipeCard.appendChild(recipeFront);
        recipeCard.appendChild(recipeBack);
        recipeItem.appendChild(recipeCard);
        recipeSection.appendChild(recipeItem);
    }
}

async function getRecipeDetails(recipeId) {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${api.apiKey}`);
        if (!response.ok) {
            throw new Error("Failed to fetch recipe details");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        return null;
    }
}

async function getRecipesAndRender(formattedInput) {
    try {
        const recipes = await api.getRecipes(formattedInput);
        const recipeCards = document.querySelectorAll(".recipe__item");

        for (let i = 0; i < recipeCards.length; i++) {
            const recipe = recipes[i];

            const recipeFront = recipeCards[i].querySelector(".recipe__front");
            const recipeBack = recipeCards[i].querySelector(".recipe__back");
            const recipeTitle = recipeCards[i].querySelector(".recipe__title");
            const recipeIngredients = recipeCards[i].querySelector(".recipe__ingredients");

            if (!recipe) {
                recipeFront.innerHTML = `<h3 class="recipe__placeholder">?</h3>`;
                recipeBack.innerHTML = `<h3 class="recipe__title">Recipe Title</h3><ul class='recipe__ingredients'></ul>`;
                continue;
            }

            const fullRecipe = await getRecipeDetails(recipe.id);

            if (fullRecipe) {
                const recipeImage = document.createElement("img");
                recipeImage.classList.add("recipe__img");
                recipeImage.src = fullRecipe.image;
                recipeImage.alt = fullRecipe.title;
                recipeFront.innerHTML = ""; 
                recipeFront.appendChild(recipeImage);

                recipeTitle.textContent = fullRecipe.title;

                recipeIngredients.innerHTML = "";

                fullRecipe.extendedIngredients.forEach(ing => {
                    const ingredientItem = document.createElement("li");
                    ingredientItem.textContent = ing.original;
                    recipeIngredients.appendChild(ingredientItem);
                });
            }
        }
    } catch (e) {
        console.log(e);
    }
}

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputString = e.target.ingredients;
    const userString = inputString.value;
    const formattedInput = userString.replace(/,\s*/g, ",+");

    await getRecipesAndRender(formattedInput);

    inputString.value = "";
});

createRecipeCards();