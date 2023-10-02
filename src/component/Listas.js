import { people } from './data.js';
import { getImageUrl } from './utils.js';
import { recipes } from './recetas.js';
  
export default function List() {
    
    const chemists = people.filter(person =>
      person.profession === 'chemist'
    );
   
    const everyoneElse = people.filter(person =>
        person.profession !== 'chemist'
    );
    //retrona solo los filtrados
   /*  const listItems = chemists.map(person =>
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    );
    return <ul>{listItems}</ul>; */

    //retorna todo
    return (
        <article>
          <h1>Scientists</h1>
          <h2>Chemists</h2>
          <ul>
            {chemists.map(person =>
              <li key={person.id}>
                <img
                  src={getImageUrl(person)}
                  alt={person.name}
                />
                <p>
                  <b>{person.name}:</b>
                  {' ' + person.profession + ' '}
                  known for {person.accomplishment}
                </p>
              </li>
            )}
          </ul>
          <h2>Everyone Else</h2>
          <ul>
            {everyoneElse.map(person =>
              <li key={person.id}>
                <img
                  src={getImageUrl(person)}
                  alt={person.name}
                />
                <p>
                  <b>{person.name}:</b>
                  {' ' + person.profession + ' '}
                  known for {person.accomplishment}
                </p>
              </li>
            )}
          </ul>

          <h1>Recipes</h1>
            {recipes.map(recipe =>
                <div key={recipe.id}>
                <h2>{recipe.name}</h2>
                <ul>
                    {recipe.ingredients.map(ingredient =>
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                    )}
                </ul>
                </div>
            )}

        </article>
      );

  }