// form to create a dropdown
//ww = name attribute and ID; xx = an array list; yy = an id to display in html
runThisDropdown = (ww, xx, yy) => {
    let a = $('<select></select>').addClass('custom-select').attr('name', ww).attr('id', ww);
    let b = $('<option selected>Select one of the option</option>');
    $(a).append(b);
    for (let i = 0; i < xx.length; i++) {
        console.log(xx[i]);

        let aa = $('<option></option>').attr('value', xx[i]).text(xx[i]);
        $(a).append(aa);
    }
    $(yy).append(a);
}

// form to create a checkbox
//n = col-md-#; xx = an array list; yy = an id to display in html; zz = name attribute
runThisRadioBox = (n, xx, yy, zz) => {
    for (let i = 0; i < xx.length; i++) {
        console.log(xx[i]);
        let aa = $('<div></div>').addClass('input-group mb-3 col-md-'+n);
        let bb = $('<div></div>').addClass('input-group-prepend');
        let cc = $('<div></div>').addClass('input-group-text');
        let dd = $('<input type="radio">').attr('value', xx[i]).attr('aria-label', xx[i]).attr('name', zz);
        let ee = $('<div></div>').addClass('form-control h5').text(xx[i]);
        $(cc).append(dd);
        $(bb).append(cc);
        $(aa).append(bb);
        $(aa).append(ee);

        $(yy).append(aa);

    }
}

// form to create a checkbox
//n = col-md-#; xx = an array list; yy = an id
runThisCheckbox = (n, xx, yy) => {
    for (let i = 0; i < xx.length; i++) {
        console.log(xx[i]);
        let aa = $('<div></div>').addClass('input-group mb-3 col-md-'+n);
        let bb = $('<div></div>').addClass('input-group-prepend');
        let cc = $('<div></div>').addClass('input-group-text');
        let dd = $('<input type="checkbox">').attr('value', xx[i]).attr('aria-label', xx[i]);
        let ee = $('<div></div>').addClass('form-control h5').text(xx[i]);
        $(cc).append(dd);
        $(bb).append(cc);
        $(aa).append(bb);
        $(aa).append(ee);

        $(yy).append(aa);

    }
}

// new recepie forms
//MealType
let mealtype = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
runThisRadioBox(3, mealtype, '.mealType', 'meal');

//DishType
let dishtype = ['Bread', 'Cereals', 'Condiments and sauces', 'Drinks', 'Desserts', 'Main course', 'Pancake', 'Preps', 'Preserve', 'Salad', 'Sandwiches', 'Side dish', 'Soup', 'Starter', 'Sweets'];
runThisDropdown('dish', dishtype, '.dishType');

//CuisionType
let cuisiontype = ["American", "Asian", "British", "Caribbean", "Central Europe", "Chinese", "Eastern Europe", "French", "Indian", "Italian", "Japanese", "Kosher", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "South American", "South East Asian"];
runThisDropdown('cuision', cuisiontype, '.cuisionType');

//Healthy Diet Options
let diettype = ['Balanced', 'High-Fiber', 'High-Protein', 'Low-Carb', 'Low-Fat', 'Low-Sodium'];
runThisDropdown('diet', diettype, '.dietType');

//Anything you have in mind to choose
let interupt = ['Alcohol Free', 'Celery Free', 'Crustcean Free', 'Dairy', 'Eggs', 'Fish', 'Gluten', 'Paleo', 'Peanuts', 'Keto', 'Kosher', 'Low Potassium', 'Lupine Free', 'Mustard Free', 'No oil added', 'No Sugar', 'Pescatarian', 'Pork Free', 'Red Meat Free', 'Sesame Free', 'Shellfish', 'Soy', 'Tree Nuts', 'Vegan', 'Vegetarian', 'Wheat Free'];
runThisCheckbox(4, interupt, '.specialRequest');


