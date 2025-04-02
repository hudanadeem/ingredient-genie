class RecipeApi{

    constructor(){
        this.apiKey = "";
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

