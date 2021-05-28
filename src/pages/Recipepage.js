import React, {useState} from 'react'
import '../styles/Recipe.css'
import Grub from '../components/Grub'
import Table from '../components/Table'
function Recipepage() {

    const [inputs, setInputs] = useState({
        foodName: "",
        ingredient: "",
        recipe: "",
      });
      let recipeData = JSON.parse(localStorage.getItem("grubs"))
      if (recipeData===undefined){
        recipeData =[];
      }

      const [recipeStateData,setRecipeData] = useState(recipeData)
      const [mode,setMode]=useState("Add");
      const [recipeEdit, setRecipeEdit]= useState();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (mode ==="Add"){
        const grubs = JSON.parse(localStorage.getItem("grubs")) || [];
        const grub = grubs.find(
            (item) => item.recipe.toLowerCase() === inputs.recipe.toLowerCase()
          );
        if (grub) {
            alert("You can't add this Ingredients again");
            return;
          }
        
        const data = {
          foodName: inputs.foodName,
          ingredient: inputs.ingredient,
          recipe: inputs.recipe,
        };
        grubs.push(data);
        localStorage.setItem("grubs", JSON.stringify(grubs));
        setRecipeData(grubs)
        setInputs({
          foodName: "",
          ingredient: "",
          recipe: "",
        })
      }else{
        const grubs = JSON.parse(localStorage.getItem("grubs")) || [];
        const grub = grubs.find((item) => item.recipe.toLowerCase() === recipeEdit.recipe.toLowerCase());
        let index = grubs.indexOf(grub);
        grubs[index]=inputs;
        localStorage.setItem("grubs", JSON.stringify(grubs));
        setRecipeData(grubs);
        setInputs({
          foodName: "",
          ingredient: "",
          recipe: "",
        })
        setMode("Add")
       }
      };
     const handleEditButton=(recipe)=>{
       const grubs = JSON.parse(localStorage.getItem("grubs")) || [];
       const grub = grubs.find((item) => item.recipe.toLowerCase() === recipe.recipe.toLowerCase());
       let index = grubs.indexOf(grub);
       if(index!== -1){
        setInputs(recipe)
        setRecipeEdit(recipe)
        setMode("Edit");
       }
     
      }

     const handleDeleteButton =(recipe)=>{
   
        const grubs = JSON.parse(localStorage.getItem("grubs")) || [];
        const grub = grubs.find((item) => item.recipe.toLowerCase() === recipe.recipe.toLowerCase());
        console.log(grubs.indexOf(grub))
        let index = grubs.indexOf(grub);
        if (index > -1){
          grubs.splice(index, 1);
        }
        localStorage.setItem("grubs", JSON.stringify(grubs));
        setRecipeData(grubs);
        
      
    
    
    }

    return (
    
        <div>
           <div><Grub
         foodName={inputs.foodName}
         ingredient={inputs.ingredient}
         recipe={inputs.recipe}
         handleChange={handleChange}
         handleSubmit={handleSubmit}/>
         </div>
         <div id="tab">
         <Table recipeData={recipeStateData} deleteButton = {handleDeleteButton} editButton ={handleEditButton}/>
         </div>
         
        </div>
    )
}

export default Recipepage
