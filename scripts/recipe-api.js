class RecipeApi{

    constructor(){
        this.apiKey = "973ec70410ab47f3abc43060b20795ed";
        this.baseURL = "https://api.spoonacular.com/recipes/findByIngredients";
    }
    async getRecipes(ingredients){
        try{
            const getRecipe = await axios.get(`${this.baseURL}?ingredients=${ingredients}&number=10&apiKey=${this.apiKey}`);
            return getRecipe.data;
        }
        catch(error){
            console.log(error); 
        }
    }

}

export default RecipeApi;

