// Initialize Firebase
var config = {
  apiKey: "AIzaSyAv4LEtQLVpVXB-gGFVPR1F4sLAUEc3-jA",
  authDomain: "team-awesome-recipe2list.firebaseapp.com",
  databaseURL: "https://team-awesome-recipe2list.firebaseio.com",
  projectId: "team-awesome-recipe2list",
  storageBucket: "team-awesome-recipe2list.appspot.com",
  messagingSenderId: "1046269523078"
};

firebase.initializeApp(config);

var database = firebase.database();

//MENU

function openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
}
function closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
}
function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
}
function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}

//----- masterList displays saved ingredients in Shopping List

//-- ingredientArray item appears as "1 tps sugar" 
//-- ingredientObject lists unit, amount and name in separate arrays ie. amount (1), unit (tps), and name (sugar)

var masterList = [];

var masterObject = {
  amount: [],
  unit: [],
  name: [],
}

// ---------Ingredients for specific recipe stored here for display in Learn More panel
var ingredientArray = [];

var ingredientObject = {
  amount: [],
  unit: [],
  name: [],
}

// ---------myIngredient OBJECT For Recipes Added By User

var myIngredientObject = {
  amount: [],
  unit: [],
  name: [] 
};

var myIngredients = [];

// ---------RecipeAPP OBJECT

var recipeApp = {

  // ----- OPEN NEW RECIPE SEARCH MODAL 

  openRecipeSearch: function(){
      
  
    // Get the modal
    var modal = document.getElementById('mySearchModal');

    // Get the button that opens the modal
    var btn = document.getElementById("complexSearch");

    // Get the search button that closes the modal
    var closebtn = document.getElementById("recipe-search");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("searchClose")[0];

    // When the user clicks on the button, open the modal 

    modal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    closebtn.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    
    if (event.target == modal) {
          modal.style.display = "none";
        }
        console.log("Opened New Recipe Search");
    
  },

  // ----- ADD NEW RECIPE FORM MODAL 

  openAddRecipe: function(){

    // Get the modal
    var modal = document.getElementById('yourRecipeModal');

    // Get the button that opens the modal
    var btn = document.getElementById("addRecipeButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("addClose")[0];

    // When the user clicks on the button, open the modal 

    modal.style.display = "block";
    
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
    
      if (event.target == modal) {
            modal.style.display = "none";
          }
      
      console.log("Opened Add Recipe Modal"); 
  },

  // ----- OPEN SEARCH BY INGREDIENT MODAL 

  openIngredientSearch: function(){

    // Get the modal
    var modal = document.getElementById('byIngredientModal');

    // Get the button that opens the modal
    var btn = document.getElementById("openIngredientSearch");

    // Get the button that closes the modal
    var closebtn = document.getElementById("byIngredientSearch");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("byIngredientClose")[0];

    // When the user clicks on the button, open the modal 

    modal.style.display = "block";
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

     // When the user clicks on <span> (x), close the modal
     closebtn.onclick = function() {
      modal.style.display = "none";
     }

    // When the user clicks anywhere outside of the modal, close it
    
    if (event.target == modal) {
          modal.style.display = "none";
        }
    console.log("Opened Search By Ingredient Modal");
    
    },

  // ------------- OPEN RECIPE INFORMATION MODAL 

  openLearnMore: function() {
  
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("learn-more");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    
    if (event.target == modal) {
          modal.style.display = "none";
        }

    console.log("Opened Learn More Modal");
  },

  // ----- OPEN NUTRITION SEARCH RESULTS MODAL 

  openNutritionResults: function(){ 
    
    // Get the modal
    var modal = document.getElementById('myNutritionModal');

    // Get the button that opens the modal
    var btn = document.getElementById("nutritionSearch");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("nutritionClose")[0];

    // When the user clicks on the button, open the modal 
    modal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        $(".nutrition-header").empty();
        $(".nutrition-body").empty();
    }

    // When the user clicks anywhere outside of the modal, close it
    
    if (event.target === modal) {
          modal.style.display = "none";
    }
    
    console.log("Opened Nutrition Results Modal");

  },

    // ----- OPEN USER ADDED RECIPES MODAL 
  openUserAddedRecipes: function(){
  
    // Get the modal
    var modal = document.getElementById('addedRecipesModal');

    // Get the button that opens the modal
    var btn = document.getElementById("addedRecipes");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("addedRecipesClose")[0];

    // When the user clicks on the button, open the modal 

    modal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    
    if (event.target == modal) {
          modal.style.display = "none";
        }
    console.log("Opened Added Recipes Modal");

  },

  // Creates buttons for each ingredient in selected recipe. 

  listIngredients: function(){

    // Looping through the array of ingredients
    for (var i = 0; i < ingredientArray.length; i++) {
  
      var ingredientItem = $("<button>").attr("id", "ingredient-item").attr("ingredient-name", ingredientObject.name[i]).attr("ingredient-unit", ingredientObject.unit[i]).attr("ingredient-amount", ingredientObject.amount[i]);

      ingredientItem.text(ingredientArray[i]).addClass("w3-btn").attr("ingredient-full", ingredientArray[i]);
      
    // Adding the button to the buttons-view div
    $("#ingredient-view").append(ingredientItem);
    }
    
  },

  // ----- PERFORM SEARCH FOR NEW RECIPES BASED ON USER PARAMETER (AJAX CALL TO SPOONACULAR) 

  searchRecipeComplex: function(){

    // Searching 20 recipes from filtered search input

    var searchedFood = $("#food-input").val().trim();

    // CUT FOR SIMPLICITY

    // var cuisine = $("#cuisine-input").val().trim();
    // One or more (comma separated) of the following: african, chinese, japanese, korean, vietnamese, thai, indian, british, irish, french, italian, mexican, spanish, middle eastern, jewish, american, cajun, southern, greek, german, nordic, eastern european, caribbean, or latin american. 

    var exclusions = $("#exclude-input").val().trim();
    // A comma-separated list of ingredients or ingredient types that must not be contained in the recipes.

    // Getting values from checked checkboxes for intolerances
    var selected = [];
    $('.intolerances input:checked').each(function() {
    selected.push($(this).val());
    });

    // Joining checked intolerances into one string for search parameter
    var intolerances = selected.join(",");

    // Getting value of drop down "Meal Type" selection
    var m = document.getElementById("mealType");
    var mealType = m.options[m.selectedIndex].value;

    // Getting value of drop down "Diet" selection
    var d = document.getElementById("dietType");
    var diet = d.options[d.selectedIndex].value;

    console.log(searchedFood);
    console.log(intolerances);
    // console.log(cuisine);
    console.log(diet);
    console.log(exclusions);
    console.log(mealType);

    $.ajax({
      url:"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?diet="+diet+"&excludeIngredients="+exclusions+"&instructionsRequired=true&intolerances="+intolerances+"&limitLicense=false&number=12&offset=0&query="+searchedFood+"&type="+mealType,
      beforeSend: function(xhr) { 
        xhr.setRequestHeader("X-Mashape-Key", "B6aQubD0MzmshaDtr6oXZPh36w3Qp17hKoqjsnoDFeTMOaQT32");
      },
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
        console.log(data);
      },
      error: function(){
        console.log("Cannot get data");
      }
    })
    
    .then(function(response) {
  
      var recipeList = response.results;
      
    
      console.log(recipeList);

    for (var i = 0; i < recipeList.length; i++) {

        // Storing the recipe ID
        var recipeID = recipeList[i].id;
        console.log(recipeID);

        // Storing image associated with returned recipe and getting the file type of each (.jpg, .png etc) for proper display
        var image = recipeList[i].image;
        imageType = image.split(".");
        fileType = imageType[1];

          // Storing the recipe title
          var title = recipeList[i].title;
        
        // Creating a w3 cards for recipe photo and title and button to "Learn More" about specific recipe
        var recipeContainer = $("<div>").addClass("w3-card-4").addClass("recipe");
        var recipeTextBlock = $("<span>").addClass("w3-container w3-pale-red").addClass("recipeTextBlock");
        var learnMoreBtn = $("<button>").attr("id", "learn-more").text("Learn more").addClass("w3-button w3-hover-red w3-display-bottomright w3-small w3-black learnMore").attr("recipeID", recipeID);

        // Creating a paragraph tag with the result recipe's title
        var h = $("<h5>").text(title);

        // Creating an image tag
        var recipeImage = $("<img>").addClass("recipeImage");

        // Giving the image tag an src attribute of a proprty pulled off the result recipe
        recipeImage.attr("src", "https://spoonacular.com/recipeImages/"+recipeID+"-312x231."+fileType);
        
        recipeTextBlock.append(h);
        recipeContainer.prepend(recipeTextBlock);
        recipeContainer.append(learnMoreBtn);
        recipeContainer.append(recipeImage);

        // Prepending the recipeContainer to the "#recipes-appear-here" div in the HTML
        $("#recipe-view").append(recipeContainer);
      }

    })
  },

  // ----- PERFORM SEARCH FOR RECIPES BASED ON INGREDIENTS (AJAX CALL TO SPOONACULAR) 

  searchByIngredients: function(){

    var ingredients = $("#ingredient-input").val().trim();
    // A comma-separated list of ingredients that the recipes should contain.

    $.ajax({
        url:"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients="+ingredients+"&limitLicense=false&number=12&ranking=1",
        // Ranking = Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
        beforeSend: function(xhr) { 
          xhr.setRequestHeader("X-Mashape-Key", "B6aQubD0MzmshaDtr6oXZPh36w3Qp17hKoqjsnoDFeTMOaQT32");
        },
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
          console.log(data);
        },
        error: function(){
          console.log("Cannot get data");
        }
      })
  
    .then(function(response) {

      console.log(response);

      // CUT FOR SIMPLICITY
      // var recipes = response.filter(recipe => recipe.spoonacularScore > 75);
      // console.log(recipes);

      var recipeList = response;

    for (var i = 0; i < recipeList.length; i++) {

    if (recipeList[i].title !== "Lavash") {

      // Storing the recipe ID
      var recipeID = recipeList[i].id;
      console.log(recipeID);

      // Storing image associated with returned recipe and getting the file type of each (.jpg, .png etc) for proper display
      var image = recipeList[i].image;
      imageType = image.split(".");
      fileType = imageType[2];

      // Storing the recipe title
      var title = recipeList[i].title;
      
      // Creating a w3 cards for recipe photo and title and button to "Learn More" about specific recipe
      var recipeContainer = $("<div>").addClass("w3-card-4").addClass("recipe");
      var recipeTextBlock = $("<span>").addClass("w3-container w3-pale-red").addClass("recipeTextBlock");
      var learnMoreBtn = $("<button>").attr("id", "learn-more").text("Learn more").addClass("w3-button w3-hover-red w3-display-bottomright w3-small w3-black learnMore").attr("recipeID", recipeID);

      // Creating a paragraph tag with the result recipe's title
      var h = $("<h5>").text(title);

      // Creating an image tag
      var recipeImage = $("<img>").addClass("recipeImage");

      // Giving the image tag an src attribute of a proprty pulled off the result recipe
      recipeImage.attr("src", "https://spoonacular.com/recipeImages/"+recipeID+"-312x231."+fileType);
      
      recipeTextBlock.append(h);
      recipeContainer.prepend(recipeTextBlock);
      recipeContainer.append(learnMoreBtn);
      recipeContainer.append(recipeImage);

      // Prepending the recipeContainer to the "#recipes-appear-here" div in the HTML
      $("#recipe-view").append(recipeContainer);

        }
      else 
      console.log("HELP");}
      })
  },

  // ----- PERFORM NUTRITION SEARCH (EDAMAM API AJAX CALL)

  nutritionSearch: function() {

    $("#nutrition-header").empty();
    $(".nutrition-body").empty();

    var searchedNutrition = $(".nutrition-input").val().trim();

    console.log(searchedNutrition);
            
    // Performing an AJAX request with the nutritionQuery
      $.ajax({
        url: "https://api.edamam.com/api/nutrition-data?app_id=dd8b998e&app_key=e728ac0838caa165f2400074d1072016&ingr=" + searchedNutrition,

          type: "GET",
          dataType: "json",
          contentType: "application/json",

          error: function(){
            console.log("Cannot get data");
          }
        })
        
        .then(function(response) {
  
          console.log(response);

          // Empty nutrition view div
          $(".nutrition-body").empty();
          $(".nutrition-header").empty();
          
          var nutritionTitle = $("<h1>").text(searchedNutrition);  

            $("#nutrition-header").append(nutritionTitle);

            // Pulling various nutrition stats from EDAMAM API and storing in variables

            var calciumPercent = response.totalDaily.CA;
            var calciumNutrients = response.totalNutrients.CA;

            var carbPercent = response.totalDaily.CHOCDF;
            var carbNutrients = response.totalNutrients.CHOCDF;

            var proteinPercent = response.totalDaily.PROCNT;
            var proteinNutrients = response.totalNutrients.PROCNT;

            var fatPercent = response.totalDaily.FAT;
            var fatNutrients = response.totalNutrients.FAT;

            var calories = response.calories;

            // Creating elements for nutrition stats to be appended to nutrition view

            var c = $("<h3>").text("Calories: 71 kcal");
            var br = $("<br>");
            var c = $("<h3>").text("Calories: "+calories+ " kcal");
            var carbs = $("<h3>").text("Carbohydrates: "+carbNutrients.quantity+" "+carbNutrients.unit);
            var protein = $("<h3>").text("Protein: "+proteinNutrients.quantity+" "+proteinNutrients.unit);
            var fat = $("<h3>").text("Fat: "+fatNutrients.quantity+" "+fatNutrients.unit);

            $(".nutrition-body").append(c).append(br);
            $(".nutrition-body").append(carbs).append(br);
            $(".nutrition-body").append(protein).append(br);
            $(".nutrition-body").append(fat).append(br);
      
          })
  },
     
 // ----- ADD AN INDIVIDUAL INGREDIENT ITEM TO MASTER LIST  
 
 // IN PROGRESS

  addIngredientToMaster: function(){
      
        var listItem = $("<li>").addClass("w3-bar w3-card-2 w3-margin");
  
        var span = $("<span>").addClass("w3-button w3-white w3-xlarge w3-right w3-circle w3-margin").attr("onclick", "this.parentElement.style.display='none'");

        var x = $("<i>").addClass("far fa-times-circle");

        span.append(x);

        var listImageDiv = $("<div>");
        
        var img = $("<img>").attr("src", "assets/images/shopping/cut.svg").addClass("w3-bar-item w3-circle w3-hide-small w3-left").attr("style", "width:85px");

        listImageDiv.append(img);

        var itemDiv = $("<div>").addClass("w3-bar-item");

        var itemAmount = masterObject.amount[i];
        var itemUnit = masterObject.unit[i];
        var itemName = masterObject.name[i];

        console.log(itemAmount);

        // if (itemUnit == null){
          
        // }

        var nameSpan = $("<span>").addClass("w3-large");

        var h = $("<h3>").text(itemName);
        nameSpan.append(h);
        var amountSpan = $("<span>").text(" "+itemAmount);
        var unitSpan = $("<span>").text(" "+itemUnit);

        itemDiv.append(nameSpan).append(amountSpan).append(unitSpan);

        listItem.append(span).append(listImageDiv).append(itemDiv);

        $(".w3-ul").append(listItem);

      
  },

  // ----- OPEN USER ADDED RECIPE INGREDIENT
  openUserAddedIngredients: function(){
  
      // Get the modal
      var modal = document.getElementById('addedIngredientsModal');
  
      // Get the button that opens the modal
      var btn = document.getElementById("addedIngredients");
  
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("addedIngredientsClose")[0];
  
      // When the user clicks on the button, open the modal 
  
      modal.style.display = "block";
      
  
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
      }
  
      // When the user clicks anywhere outside of the modal, close it
      
      if (event.target == modal) {
            modal.style.display = "none";
          }
      console.log("Opened Added Ingredients Modal");
  
    },

};

// ----- SEND AJAX CALL FOR SPECIFIC RECIPE INFO BY ID

$(document).on('click','.learnMore',function(){
  event.preventDefault();

  var id = $(this).attr("recipeID");
  console.log(id);

  $(".recipeInfo-modal-header").empty();
  $(".recipeInfo-modal-body").empty();
  $("#ingredient-view").empty();

  $.ajax({
    url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+id+"/information",
    beforeSend: function(xhr) { 
      xhr.setRequestHeader("X-Mashape-Key", "B6aQubD0MzmshaDtr6oXZPh36w3Qp17hKoqjsnoDFeTMOaQT32");
    },
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
    },
    error: function(){
      console.log("Cannot get data");
    }
  })
  
  .then(function(response) {

    console.log(response);

    var fullInstructions = response.instructions;

    var instructions = fullInstructions.split(". ");

    var ol = $("<ol>");

    for (var i = 0; i < instructions.length; i++){
      var li = $("<li>").text((i+1+". ")+instructions[i]);
      ol.append(li);
    }

    var minutes = response.readyInMinutes;
    var title = $("<h1>").text(response.title);

    var m = $("<p>").text("Ready in "+minutes+" minutes.");


    $(".recipeInfo-modal-header").append(title);
    $(".recipeInfo-modal-header").append(m);
    $(".recipeInfo-modal-body").append(ol);

    var ingredientResult = response.extendedIngredients;

    console.log(instructions);
    console.log("Ready in "+minutes+" minutes.");

    for (var i = 0; i <ingredientResult.length; i++){

    var ingredientList = ingredientResult[i].original;
    var amountList = ingredientResult[i].amount;
    var unitList = ingredientResult[i].unit;
    var nameList = ingredientResult[i].name;

    ingredientArray.push(ingredientList);
    ingredientObject.amount.push(amountList);
    ingredientObject.unit.push(unitList);
    ingredientObject.name.push(nameList);
  
  }
    console.log(ingredientArray);
    console.log(ingredientObject);

    recipeApp.listIngredients();
  
  })
});

//--------OPEN USER ADDED RECIPES MODAL
$(document).on('click','#addedRecipes',function(){
  event.preventDefault();
  recipeApp.openUserAddedRecipes();
});

//--------OPEN USER ADDED INGREDIENTS MODAL
$(document).on('click','#addedIngredients',function(){
  event.preventDefault();

  $(".addedIngredients-modal-header").empty();
  $(".addedIngredients-body").empty();

  var theseIngredients = $(this).attr("these-ingredients");
  console.log(theseIngredients);

  splitIngredients = theseIngredients.split(", ");

  var amountIngredients;
  var unitIngredients;
  
  for (var i = 0; i < splitIngredients.length; i++) {

    amounttIngredients = splitIngredients[i].split(" ");
    // unitIngredients = theseIngredients[i].split(" ");
    console.log(amountIngredients);
    
    // console.log(unitIngredients);
  
    var ingredientItem = $("<button>").attr("ingredient-name", splitIngredients[i]).addClass("w3-btn ingredientSpec").text(splitIngredients[i]).attr("id", "ingredient-item");
      
    // Adding the button to the buttons-view div
    $(".addedIngredients-body").append(ingredientItem);
    }

  recipeApp.openUserAddedIngredients();
});

//--------OPEN SEARCH NEW RECIPE MODAL
$(document).on('click','#complexSearch',function(){
  event.preventDefault();
  recipeApp.openRecipeSearch();
});

//---------OPEN SEARCH BY INGREDIENT MODAL
$(document).on('click','#openIngredientSearch',function(){
  event.preventDefault();
  recipeApp.openIngredientSearch();
});

//---------OPEN ADD RECIPE

$(document).on('click','#addRecipeButton',function(){
  event.preventDefault();
  recipeApp.openAddRecipe();
});

//---------OPEN LEARN MORE ABOUT RECIPE MODAL

$(document).on('click','#learn-more',function(){
  event.preventDefault();
  recipeApp.openLearnMore();
});

//---------SEARCH NEW RECIPES BY FILTER

$(document).on('click','#recipe-search',function(){
  event.preventDefault();
  $("#recipe-view").empty();
  recipeApp.searchRecipeComplex();
});

//----------SEARCH RECIPES USING INGREDIENTS YOU HAVE

$(document).on('click','#byIngredientSearch',function(){
  event.preventDefault();
  $("#recipe-view").empty();
  recipeApp.searchByIngredients();
});

//--------SELECT INGREDIENTS TO PUSH TO MASTER LIST

$(document).on('click','#ingredient-item' ,function(){
  event.preventDefault();

  var ingredient = $(this).attr("ingredient-full");
  var name = $(this).attr("ingredient-name");
  var unit = $(this).attr("ingredient-unit");
  var amount = $(this).attr("ingredient-amount");
  console.log(ingredient);

  var checkmark = $("<img>").attr("src", "assets/images/checkmark.png");
  $(this).append(checkmark);

  masterList.push(ingredient);
  masterObject.amount.push(amount);
  masterObject.unit.push(unit);
  masterObject.name.push(name);

  console.log(masterList);
  console.log(masterObject);

  var listItem = $("<li>").addClass("w3-bar w3-card-2 w3-margin");
  
  var span = $("<span>").addClass("w3-button w3-white w3-xlarge w3-right w3-circle w3-margin").attr("onclick", "this.parentElement.style.display='none'");

  var x = $("<i>").addClass("far fa-times-circle");

  span.append(x);

  var listImageDiv = $("<div>");
  
  var img = $("<img>").attr("src", "assets/images/shopping/cut.svg").addClass("w3-bar-item w3-circle w3-hide-small w3-left").attr("style", "width:85px");

  listImageDiv.append(img);

  var itemDiv = $("<div>").addClass("w3-bar-item");

  var nameSpan = $("<span>").addClass("w3-large");

  var h = $("<h3>").text(name);
  nameSpan.append(h);
  var amountSpan = $("<span>").text(" "+amount+" "+unit);

  console.log(amount);
  console.log(unit);

  if (amount == null){
    var amountSpan = $("<span>").text(" ");
  }

  if (amount && unit == undefined){
    var amountSpan = $("<span>").text(" ");
  }

  itemDiv.append(nameSpan).append(amountSpan);

  listItem.append(span).append(listImageDiv).append(itemDiv);

  $(".w3-ul").append(listItem);

});

//-------------PUSH ALL INGREDIENTS FROM ONE RECIPE TO MASTER LIST

$(document).on('click','#add-all',function(){
  event.preventDefault();

  var checkmark = $("<img>").attr("src", "assets/images/checkmark.png");
  $(this).append(checkmark);

  for (var i = 0; i<ingredientArray.length; i++){
    masterList.push(ingredientArray[i]);
  }

  for (var i = 0; i<ingredientObject.amount.length; i++){
    masterObject.amount.push(ingredientObject.amount[i]);
  }

  for (var i = 0; i<ingredientObject.name.length; i++){
    masterObject.name.push(ingredientObject.name[i]);
  }

  for (var i = 0; i<ingredientObject.unit.length; i++){
    masterObject.unit.push(ingredientObject.unit[i]);
  }

  console.log(masterList);
  console.log(masterObject);

  // Looping through the array of topics
  for (var i = 0; i < masterList.length; i++) {
      
    var listItem = $("<li>").addClass("w3-bar w3-card-2 w3-margin");

    var span = $("<span>").addClass("w3-button w3-white w3-xlarge w3-right w3-circle w3-margin").attr("onclick", "this.parentElement.style.display='none'");

    var x = $("<i>").addClass("far fa-times-circle");

    span.append(x);

    var listImageDiv = $("<div>");
    
    var img = $("<img>").attr("src", "assets/images/shopping/cut.svg").addClass("w3-bar-item w3-circle w3-hide-small w3-left").attr("style", "width:85px");

    listImageDiv.append(img);

    var itemDiv = $("<div>").addClass("w3-bar-item");

    var itemAmount = masterObject.amount[i];
    var itemUnit = masterObject.unit[i];
    var itemName = masterObject.name[i];

    console.log(itemAmount);

    var nameSpan = $("<span>").addClass("w3-large");

    var h = $("<h3>").text(itemName);
    nameSpan.append(h);
    var amountSpan = $("<span>").text(" "+itemAmount);
    var unitSpan = $("<span>").text(" "+itemUnit);

    itemDiv.append(nameSpan).append(amountSpan).append(unitSpan);

    listItem.append(span).append(listImageDiv).append(itemDiv);

    $(".w3-ul").append(listItem);
  }
});

//-------------CHECKOUT // Opens Shopping List

$(document).one('click','#checkout',function(){
  event.preventDefault();
  $("#recipe-view").empty();
  openRightMenu();
});

//-------------NUTRITION SEARCH

$(document).on('click','#nutrition-search',function(){
  event.preventDefault();
  $("#nutrition-view").empty();
  recipeApp.nutritionSearch();
  recipeApp.openNutritionResults();
});


//-------------ADD YOUR OWN RECIPE 

$("#add-recipe-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var recipeName = $("#recipe-name-input").val().trim();
  var recipeMin = $("#recipe-min-input").val().trim();
  var recipeDiet = $("#recipe-diet-input").val().trim();
  var recipeType = $("#recipe-type-input").val().trim();
  var recipeIngredients = $("#userAddedIngredients").val().trim();


  // Alert for recipe successfully addded.

  $("#addSuccess").text(recipeName+" successfully added!")

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
  // console.log(newRecipe.title);
  // console.log(newRecipe.minutes);
  // console.log(newRecipe.diet);
  // console.log(newRecipe.type);
  // console.log(newRecipe.ingredients);

  // Clears all of the text-boxes
  $("#recipe-name-input").val("");
  $("#recipe-min-input").val("");
  $("#recipe-diet-input").val("");
  $("#recipe-type-input").val("");  
  $("#userAddedIngredients").val(""); 
});


// Create Firebase event for adding recipe to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var recipeName = childSnapshot.val().title;
  var recipeMin = childSnapshot.val().minutes;
  var recipeDiet = childSnapshot.val().diet;
  var recipeType = childSnapshot.val().type;
  var recipeIngredients = childSnapshot.val().ingredients;

  // recipe Info
  // console.log(recipeName);
  // console.log(recipeMin);
  // console.log(recipeDiet);
  // console.log(recipeType);
  console.log(recipeIngredients);

  var recipeIngredientsArray = recipeIngredients.split(", ");
 
  console.log(recipeIngredientsArray);

  $("#recipe-table > tbody").append("<tr"+myIngredients+"><td>" + recipeName + "</td><td>" + recipeMin + "</td><td>" + recipeDiet + "</td><td>" + recipeType + "</td><td>" + "<button class='w3-btn' id = 'addedIngredients' these-ingredients='"+recipeIngredients+"'>View Ingredients</button>" + "</td></tr>");

});