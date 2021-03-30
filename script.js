/* Menu ---------------------------------------------------------------- */

//Menu toggle
toggleFunction = () => {
  //console.log('this is toggleFunction');
  $("#sidebar").toggleClass("active").addClass("deactive");
  $("#headOne").toggleClass("activeOne").addClass("deactive");
};
//if click on body to toggle this
toggleBodyFunction = () => {
  if ($("#sidebar").hasClass("deactive")) {
    //console.log('this is toggleBodyfunction');
    $("#sidebar").removeClass("deactive");
    $("#headOne").removeClass("deactive");
  } else if ($("#sidebar").hasClass("active")) {
    //console.log('do something like this');
    $("#sidebar").toggleClass("active");
    $("#headOne").toggleClass("activeOne");
  }
};

//Menu slide over
$(document).on("click", "#mainContainer", toggleBodyFunction);
$(document).on("click", "#sidebarCollapse", toggleFunction);
$(document).on("click", "#sidebarCollapse1", toggleFunction);

// When menu item click, close the menu
$(document).on("click", "#jqMenu", toggleFunction);

// a = id name
// p = copy text string
ulMenu = (a, p) => {
  let jqma = $("<ul></ul>").addClass("list-unstyled components").attr("id", a);
  let jqmp = $("<p></p>").addClass("text-uppercase").text(p);
  jqma.append(jqmp);
  $(".jqMenu").append(jqma);
};
/*
b = id name
c = link connect to - if not any use "#" string
e = icon class name string https://fontawesome.bootstrapcheatsheets.com/
ap = copy text string
f = id that gose to ul string #
h = show or hide
*/
liMenu = (b, c, e, ap, f, h, i, j, k, l) => {
  let jqmb = $("<li></li>").addClass("p-1").attr("id", b).attr("type", "button");
  let jqmc = $("<a></a>").attr("href", c).text(ap).addClass("text-dark text-decoration-none").attr(i, j).attr(k, l);
  let jqmd = $("<span></span>").addClass("boxMenuAF");
  let jqme = $("<i></i>").addClass(e).attr("area-hidden", "true");
  // let jqmap = $('<p></p>')
  jqmd.append(jqme);
  jqmc.prepend(jqmd);
  jqmb.append(jqmc);
  $(f).append(jqmb);
  $(jqmb).hide();
  if (h === "show") {
    $(jqmb).show();
  }
};

// account
// -- log in
// -- sign up
// -- or --
// -- account info
// -- log out
//
ulMenu("jqmAccount", "Account");
// login
liMenu("jqmLogIn", "#", "fas fa-star", "Log In", "#jqmAccount", "show");
// signup
liMenu("jqmSignUp", "#", "fas fa-plug", "Sign Up", "#jqmAccount", "show");
// account info
liMenu("jqmAccount", "#", "fas fa-user", "Account Info", "#jqmAccount", "");
// logout
liMenu("jqmLogOut", "#", "fas fa-star-o", "Log Out", "#jqmAccount", "");

// groceries
// -- add leftover groceries
// -- new shopping list
// -- sms my list
// -- delivery
//
ulMenu("jqmGroceries", "Groceries");
// add leftover groceries
liMenu("jqmAddLeftOver", "#", "fas fa-pencil-alt", "Add Leftover", "#jqmGroceries", "show", "data-bs-toggle", "modal", "data-bs-target", "#add-leftover-modal");
// my new shopping groceries
liMenu("jqmMyShopList", "#", "fas fa-check-square", "My New List", "#jqmGroceries", "show");
// SMS my list
liMenu("jqmSMSList", "#", "fas fa-paper-plane", "SMS My List", "#jqmGroceries", "show");
// delivery
liMenu("jqmDeliverList", "#", "fas fa-truck", "Delivery", "#jqmGroceries", "show");

// recipes
// -- search from Leftover
// -- new recipe search
// -- add your recipe
// -- my recipe book
// -- check nutrition
//
ulMenu("jqmRecipes", "Recipe Search");
// search new recipes from leftover
liMenu("jqmNewSearch", "#", "fas fa-share-square", "From Leftover", "#jqmRecipes", "show", "data-bs-toggle", "modal", "data-bs-target", "#add-to-list-modal");
// search new recipes
liMenu("jqmNewReci", "#", "fas fa-search-plus", "For New Test", "#jqmRecipes", "show");
// add your recipe
liMenu("jqmYourReci", "#", "fas fa-plus-circle", "Add Recipe", "#jqmRecipes", "show");
// my recipe book
liMenu("jqmReciBook", "#", "fas fa-bookmark", "My Recipe Book", "#jqmRecipes", "show");
// check nutrition
liMenu("jqmNutrition", "#", "fas fa-chart-bar", "Check Nutrition", "#jqmRecipes", "show");

// contact
// -- about
// -- support
// -- rate us
//
ulMenu("jqmContact", "Contact");
// about an app
liMenu("jqmAbout", "#about-modal", "fas fa-info-circle", "About Us", "#jqmContact", "show", "data-bs-toggle", "modal", "data-bs-target", "#about-modal");
// support for this app
liMenu("jqmSupport", "#", "fas fa-concierge-bell", "Support", "#jqmContact", "show");
// rate this app
liMenu("jqmRateUs", "#", "fas fa-heart", "Rate Us", "#jqmContact", "show");
// facebook
liMenu("jqmFacebook", "#", "fab fa-facebook", "Facebook", "#jqmContact", "show");

/* Form ---------------------------------------------------------------- */

// form to create a dropdown
//ww = name attribute and ID; xx = an array list; yy = an id to display in html
runThisDropdown = (ww, xx, yy, idd) => {
  let a = $("<select></select>").addClass("form-select").attr("name", ww).attr("id", idd);
  let b = $("<option selected>Select one of the option</option>").attr("value", "");
  $(a).append(b);
  for (let i = 0; i < xx.length; i++) {
    //console.log(xx[i]);

    let aa = $("<option></option>").attr("value", xx[i]).text(xx[i]);
    $(a).append(aa);
  }
  $(yy).append(a);
};

// form to create a Radio Buttons
//n = col-md-#; xx = an array list; yy = an id to display in html; zz = name attribute
runThisRadioBox = (n, m, xx, yy, zz, idd) => {
  for (let i = 0; i < xx.length; i++) {
    //console.log(xx[i]);
    let aa = $("<div></div>")
      .addClass("input-group mb-3")
      .addClass("col-md-" + n)
      .addClass("col-lg-" + m);
    let bb = $("<div></div>").addClass("input-group-prepend");
    let cc = $("<div></div>").addClass("input-group-text").attr("id", idd);
    let dd = $('<input type="radio">').attr("value", xx[i]).attr("aria-label", xx[i]).attr("name", zz);
    let ee = $("<div></div>").addClass("form-control h5").text(xx[i]);
    $(cc).append(dd);
    $(bb).append(cc);
    $(aa).append(bb);
    $(aa).append(ee);

    $(yy).append(aa);
  }
};

// form to create a checkbox
//n = col-md-#; xx = an array list; yy = an id
/* <div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div> */
runThisCheckbox = (n, m, xx, yy, zz) => {
  for (let i = 0; i < xx.length; i++) {
    //console.log(xx[i]);
    let aa = $("<div></div>")
      .addClass("input-group mb-3");
    let bb = $("<div></div>").addClass("col-md-" + m).addClass("col-lg-" + n);
    let cc = $("<div></div>").addClass("input-group-text").attr("id", zz);
    let dd = $('<input type="checkbox">').attr("value", xx[i]).attr("aria-label", xx[i]).addClass("form-check-input mt-0");
    let ee = $("<div></div>").addClass("form-control").attr("aria-label", xx[i]).text(xx[i]);
    $(cc).append(dd);
    $(aa).append(cc);
    $(aa).append(ee);
    $(bb).append(aa);

    $(yy).append(bb);
  }
};

// Find New Recipes Form

//MealType
let mealtype = ["Breakfast", "Lunch", "Dinner", "Snack"];
runThisRadioBox(6, 3, mealtype, ".mealType", "meal", "inputRadioCheck1");
// 2
// DishType
// let dishtype = ['Appetizer', 'Bread', 'Cereals', 'Condiments and sauces', 'Drinks', 'Desserts', 'Main course', 'Pancake', 'Preps', 'Preserve', 'Salad', 'Sandwiches', 'Side dish', 'Soup', 'Starter', 'Sweets'];
let dishtype = ["Appetizer", "Beverage", "Bread", "Breakfast", "Dessert", "Drink", "Fingerfood", "Main Course", "Marinade", "Salad", "Sauce", "Side Dish", "Snack", "Soup"];
runThisDropdown("dish", dishtype, ".dishType", "inputDishType");

// 3
// CuisionType
let cuisiontype = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"];
runThisDropdown("cuision", cuisiontype, ".cuisionType", "inputCuisionType");

// 4
// Healthy Diet Options
// let diettype = ['Balanced', 'High-Fiber', 'High-Protein', 'Low-Carb', 'Low-Fat', 'Low-Sodium'];
let diettype = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Whole30"];
runThisDropdown("diet", diettype, ".dietType", "inputDietType");

// 5
// Anything you have in mind to choose
// let interupt = ['Alcohol Free', 'Celery Free', 'Crustcean Free', 'Dairy', 'Eggs', 'Fish', 'Gluten', 'Paleo', 'Peanuts', 'Keto', 'Kosher', 'Low Potassium', 'Lupine Free', 'Mustard Free', 'No oil added', 'No Sugar', 'Pescatarian', 'Pork Free', 'Red Meat Free', 'Sesame Free', 'Shellfish', 'Soy', 'Tree Nuts', 'Vegan', 'Vegetarian', 'Wheat Free'];
let interupt = ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"];
runThisCheckbox(3, 6, interupt, ".specialRequest", "checkInteruptType");

// 7
// Time Range
$(document).on("input", "#timeRange", () => {
  let t = $("input[type=range]").val();
  //console.log(t);
  $("#rangeDemo").text(t).val(t);
});
