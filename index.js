 "before all"  hook:
 function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }
  function Monday() {
    runFiveMiles();
    liftWeights();
  } function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
  });
  
  // "Go for a five-mile run"
  // "Stretch! Work that core!"
  exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
  });
  
  // Or even shorter:
  exerciseRoutine(() => console.log("Stretch! Work that core!"));
  exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
  });
  
  // Or even shorter:
  exerciseRoutine(() => console.log("Stretch! Work that core!"));
  const afterExercise = morningRoutine(liftWeights);
// LOG: Go for a five-mile run
// LOG: Pump iron

afterExercise;
//=> ƒ () { console.log(`Nom nom nom, this ${breakfast} is delicious!`); }
afterExercise();
// LOG: Nom nom nom, this protein bar is delicious!