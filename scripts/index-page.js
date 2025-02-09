import RecipeApi from "./recipe-api.js";

const api = new RecipeApi();
const recipeSection = document.getElementById("recipeList");

// Function to dynamically create 10 empty cards on page load
function createRecipeCards() {
    recipeSection.innerHTML = ""; // Clear existing content
    for (let i = 0; i < 10; i++) {
        const recipeItem = document.createElement("div");
        recipeItem.classList.add("recipe__item");

        recipeItem.innerHTML = `
            <div class="recipe__card">
                <div class="recipe__front">
                    <h3 class="recipe__placeholder">?</h3>
                </div>
                <div class="recipe__back">
                    <h3>Ingredients</h3>
                    <ul class="recipe__ingredients"></ul>
                </div>
            </div>
        `;

        recipeSection.appendChild(recipeItem);
    }
}

// Function to get full recipe details using recipe ID
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

// Function to fetch recipes and update UI
async function getRecipesAndRender(formattedInput) {
    try {
        const recipes = await api.getRecipes(formattedInput);
        const recipeCards = document.querySelectorAll(".recipe__item");

        for (let i = 0; i < recipeCards.length; i++) {
            const recipe = recipes[i];

            const recipeFront = recipeCards[i].querySelector(".recipe__front");
            const recipeBack = recipeCards[i].querySelector(".recipe__back");
            const recipeIngredients = recipeCards[i].querySelector(".recipe__ingredients");

            if (!recipe) {
                recipeFront.innerHTML = `<h3 class="recipe__placeholder">?</h3>`;
                recipeBack.innerHTML = `<h3>Ingredients</h3><ul class='recipe__ingredients'></ul>`;
                continue;
            }

            // Fetch full recipe details using the recipe ID
            const fullRecipe = await getRecipeDetails(recipe.id);

            if (fullRecipe) {
                // Update front side (title & image)
                recipeFront.innerHTML = `
                    <h3 class="recipe__title">${fullRecipe.title}</h3>
                    <img class="recipe__img" src="${fullRecipe.image}" alt="${fullRecipe.title}">
                `;

                // Update back side (ingredients list)
                recipeIngredients.innerHTML = fullRecipe.extendedIngredients
                    .map(ing => `<li>${ing.original}</li>`)
                    .join("");
            }
        }
    } catch (e) {
        console.log(e);
    }
}

// Attach event listener to form
const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputString = e.target.ingredients;
    const userString = inputString.value;
    const formattedInput = userString.replace(/,\s*/g, ",+");

    await getRecipesAndRender(formattedInput);

    inputString.value = "";
});

// Initialize 10 empty cards on page load
createRecipeCards();
