import React from 'react'

function Table({recipeData,deleteButton,editButton}) {
    return (
        <div>
            <table>
                <tr>
                    <th>Food Name</th>
                    <th>Ingredient</th>
                    <th>Recipe</th>
                </tr>
                {recipeData.map((row,index)=>(
                    <tr key={index}>
                    <td>{row.foodName}</td>
                    <td>{row.ingredient}</td>
                    <td>{row.recipe}</td>
                    <td><button className="" onClick={()=>editButton(row)}>Edit</button></td>
                    <td><button className="" onClick={()=>deleteButton(row)}>Delete</button></td>
                </tr>
                ))
                }
                
            </table>
        </div>
    )
}

export default Table
