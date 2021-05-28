import React from 'react'
import Input from './Input';

function Grub({foodName, ingredient,recipe, handleSubmit, handleChange }) {
    return (
      <form onSubmit={handleSubmit}>
        <h3> Hello</h3>
  
        
        <div className="form-group">
          <Input
            type="text"
            name="foodName"
            value={foodName}
            label="Food Name"
            className="form-control"
            placeholder="Enter Food Name"
            handleChange={handleChange}
          />
        </div>
  
        <div className="form-group">
          <Input
            type="text"
            name="ingredient"
            value={ingredient}
            label="Ingredient"
            className="form-control"
            placeholder="Enter Ingredient"
            handleChange={handleChange}
          />
        </div>

        <div className="form-group">
          <Input
            type="text"
            name="recipe"
            value={recipe}
            label="Recipe"
            className="form-control"
            placeholder="Enter Recipe"
            handleChange={handleChange}
          />
        </div>
  
        <div className="form-group">
          <label></label>
          <button className="" type="submit">
          Add
          </button>
        </div>
      </form>
    );
  }  
export default Grub;
