// Initialize Firebase
var config = {
    // apiKey: "AIzaSyAv4LEtQLVpVXB-gGFVPR1F4sLAUEc3-jA",
    // authDomain: "team-awesome-recipe2list.firebaseapp.com",
    // databaseURL: "https://team-awesome-recipe2list.firebaseio.com",
    // projectId: "team-awesome-recipe2list",
    // storageBucket: "team-awesome-recipe2list.appspot.com",
    // messagingSenderId: "1046269523078"
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();

  var myIngredientObject = {
    amount: [],
    unit: [],
    name: [] 
  };

  var myIngredients = [];

  // Button for adding ingredients.

  $("#add-ingredient-btn").on("click", function(event) {
    event.preventDefault();
  
    var recipeAmount = $("#amount").val().trim();
    myIngredientObject.amount.push(recipeAmount);

    var recipeName = $("#name").val().trim();
    myIngredientObject.name.push(recipeName);

    var recipeUnit = $("#unit").val().trim();
    myIngredientObject.unit.push(recipeUnit);

    // for (var i=0; i<myIngredientObject.length; i++){
    //    var newAmount =  myIngredientObject.amount[i];
    //    var newUnit =  myIngredientObject.unit[i];
    //    var newName =  myIngredientObject.name[i];

    var newIngredient = recipeAmount + 
       " "+ recipeUnit + " " + recipeName +" ";

    myIngredients.push(newIngredient);
  
    $("myIngredient-view").text(myIngredients);

    console.log(myIngredientObject);
    console.log(newIngredient);
    console.log(myIngredients);

    $("#amount").val("");
    $("#name").val("");
    $("#unit").val("");

    $("#add-ingredient-btn").text("Add Another Ingredient");
    $("#myIngredient-view").text(newIngredient+ " added to this recipe.");

  });

  
  //Button for adding recipes
  $("#add-recipe-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var recipeName = $("#recipe-name-input").val().trim();
    var recipeMin = $("#recipe-min-input").val().trim();
    var recipeDiet = $("#recipe-diet-input").val().trim();
    var recipeType = $("#recipe-type-input").val().trim();

    var recipeIngredients = myIngredients.join(",");

    console.log(recipeIngredients);

    //Creates local "temporary" object for holding recipe data
  
    var newRecipe = {
      title: recipeName,
      minutes: recipeMin,
      diet: recipeDiet,
      type: recipeType,
      ingredients: recipeIngredients,
    };
  
    // Uploads recipe data to the database
    database.ref().push(newRecipe);
  
    // Logs everything to console
    console.log(newRecipe.title);
    console.log(newRecipe.minutes);
    console.log(newRecipe.diet);
    console.log(newRecipe.type);
    console.log(newRecipe.ingredients);

    // Alert
    $("#myIngredient-view").text(recipeName+ " successfully added!");
  
    // Clears all of the text-boxes
    $("#recipe-name-input").val("");
    $("#recipe-min-input").val("");
    $("#recipe-diet-input").val("");
    $("#recipe-type-input").val("");  
  });
  

  // 3. Create Firebase event for adding recipe to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var recipeName = childSnapshot.val().title;
    var recipeMin = childSnapshot.val().minutes;
    var recipeDiet = childSnapshot.val().diet;
    var recipeType = childSnapshot.val().type;
    var recipeIngredients = childSnapshot.val().ingredients;
  
    // recipe Info
    console.log(recipeName);
    console.log(recipeMin);
    console.log(recipeDiet);
    console.log(recipeType);
    console.log(recipeIngredients);
  
    $("#recipe-table > tbody").append("<tr id = "+myIngredients+"><td>" + recipeName + "</td><td>" + recipeMin + " minutes</td><td>" + recipeDiet + "</td><td>" + recipeType + "</td><td>" + recipeIngredients + "</td></tr>");

  });