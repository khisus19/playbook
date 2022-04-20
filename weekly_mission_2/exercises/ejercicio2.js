const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   /* Sobre esta lista, realiza lo siguiente:

  1.  Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
  2.  Imprime el stack de cada explorer, usa FOR EACH
  3.  Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
  4.  Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
  5.  Busca el primer explorer que sea de la CDMX, usa FIND
  6.  Obtén la suma de todos los exercises_completed, usa REDUCE
  7.  Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
  8.  Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
 */

// --- 1. Imprimir name ---
console.log('Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH');
explorers.forEach(explorer => console.log(explorer.name))

// --- 2. Imprimir stack ---
console.log('Imprime el stack de cada explorer, usa FOR EACH');
explorers.forEach(explorer => {
    console.log(explorer.name);
    console.log(explorer.stack);
    }
) 

// --- 3. Listar los stacks de cada explorer
console.log("Crea una nueva lista con las listas de stacks de cada explorer, usa MAP:");
let stacks = [];
explorers.forEach(explorer => {
    explorer.stack.map(stck => stacks.push(stck))
    }
)

// explorers.forEach(explorer => stacks.push(explorer.stack));
console.log(stacks);

// --- 4. Listar sólo los que tienen 'js' ---
console.log("Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
console.log("Los Explorer que tiene 'js' de stack son:")
explorers.forEach(explorer => {
  if (explorer.stack.includes('js')) {
    console.log(explorer.name);
  }
})

// --- 5 Busca el primer explorer que sea de la CDMX ---
console.log("Busca el primer explorer que sea de la CDMX, usa FIND")
