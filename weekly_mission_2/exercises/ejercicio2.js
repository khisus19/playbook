const explorers = [
    {
      name: "Carlo",
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
      name: "Jesus",
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
      name: "Fernanda",
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
/* explorers.forEach(explorer => {
    explorer.stack.map(stck => stacks.push(stck))
    }
) */

explorers.map(my_explorer => stacks.push(my_explorer.stack));
console.log(stacks);

// --- 4. Listar sólo los que tienen 'js' ---
console.log("Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")

// Forma de Carlo
const explorerWithJs = explorers.filter(explorer => explorer.stack.includes("js"));
console.log(explorerWithJs);

// Mi forma
console.log("Los Explorer que tiene 'js' de stack son:")
explorers.forEach(explorer => {
  if (explorer.stack.includes('js')) {
    console.log(explorer.name);
  }
})

// --- 5. Busca el primer explorer que sea de la CDMX ---
console.log("Busca el primer explorer que sea de la CDMX, usa FIND")

const firstExplorerCdmx = explorers.find(item => item.city === 'CDMX');
console.log(firstExplorerCdmx);
console.log(`El primer explorer de CDMX es: ${firstExplorerCdmx.name}`);

// --- 6. Obtén la suma de todos los exercises_completed, usa REDUCE ---
console.log("6. Obtén la suma de todos los exercises_completed, usa REDUCE");
const all_exercises = explorers.reduce((acc, item) => acc + item.exercises_completed, 0);
console.log(all_exercises);

// --- 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME ---
console.log('¿Hay algún explorer que haya terminado los ejercicios?:');
const someExercisesFinished = explorers.some(item => item.missions.onboarding.exercisesFinished === false);
console.log(someExercisesFinished);

// --- 8.  Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY. ---
console.log("¿Todos terminaron su misión?:")
const everyoneFinishedMissions = explorers.every(item => item.missions.onboarding.isFinished === true);
console.log(everyoneFinishedMissions)