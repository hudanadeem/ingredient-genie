class RecipeApi{

    constructor(){
        this.apiKey = "85a52c550463450788b18bf59ac4209c";
        this.baseURL = "https://api.spoonacular.com/recipes/findByIngredients";
    }
    async getRecipes(ingredients){
        try{
            const getRecipe = await axios.get(`${this.baseURL}?ingredients=${ingredients}&number=3&apiKey=${this.apiKey}`);
            return getRecipe.data;
        }
        catch(error){
            console.log(error); 
        }
    }

}

export default RecipeApi;

