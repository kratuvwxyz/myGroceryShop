// form to create a dropdown
//ww = name attribute and ID; xx = an array list; yy = an id to display in html
runThisDropdown = (ww, xx, yy, idd) => {
    let a = $('<select></select>').addClass('custom-select').attr('name', ww).attr('id', idd);
    let b = $('<option selected>Select one of the option</option>').attr('value', '');
    $(a).append(b);
    for (let i = 0; i < xx.length; i++) {
        console.log(xx[i]);

        let aa = $('<option></option>').attr('value', xx[i]).text(xx[i]);
        $(a).append(aa);
    }
    $(yy).append(a);
}

// form to create a Radio Buttons
//n = col-md-#; xx = an array list; yy = an id to display in html; zz = name attribute
runThisRadioBox = (n, m, xx, yy, zz, idd) => {
    for (let i = 0; i < xx.length; i++) {
        console.log(xx[i]);
        let aa = $('<div></div>').addClass('input-group mb-3').addClass('col-md-'+n).addClass('col-lg-'+m);
        let bb = $('<div></div>').addClass('input-group-prepend');
        let cc = $('<div></div>').addClass('input-group-text').attr('id', idd);
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
runThisCheckbox = (n, m, xx, yy, zz) => {
    for (let i = 0; i < xx.length; i++) {
        console.log(xx[i]);
        let aa = $('<div></div>').addClass('input-group mb-3').addClass('col-md-'+m).addClass('col-lg-'+n);
        let bb = $('<div></div>').addClass('input-group-prepend');
        let cc = $('<div></div>').addClass('input-group-text').attr('id', zz);
        let dd = $('<input type="checkbox">').attr('value', xx[i]).attr('aria-label', xx[i]);
        let ee = $('<div></div>').addClass('form-control h5').text(xx[i]);
        $(cc).append(dd);
        $(bb).append(cc);
        $(aa).append(bb);
        $(aa).append(ee);

        $(yy).append(aa);

    }
}




// Find New Recipes Form

    //MealType
    let mealtype = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
    runThisRadioBox(6, 3, mealtype, '.mealType', 'meal', 'inputRadioCheck1');

    //DishType
    let dishtype = ['Bread', 'Cereals', 'Condiments and sauces', 'Drinks', 'Desserts', 'Main course', 'Pancake', 'Preps', 'Preserve', 'Salad', 'Sandwiches', 'Side dish', 'Soup', 'Starter', 'Sweets'];
    runThisDropdown('dish', dishtype, '.dishType', 'inputDishType');

    //CuisionType
    let cuisiontype = ["American", "Asian", "British", "Caribbean", "Central Europe", "Chinese", "Eastern Europe", "French", "Indian", "Italian", "Japanese", "Kosher", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "South American", "South East Asian"];
    runThisDropdown('cuision', cuisiontype, '.cuisionType', 'inputCuisionType');

    //Healthy Diet Options
    let diettype = ['Balanced', 'High-Fiber', 'High-Protein', 'Low-Carb', 'Low-Fat', 'Low-Sodium'];
    runThisDropdown('diet', diettype, '.dietType', 'inputDietType');

    //Anything you have in mind to choose
    let interupt = ['Alcohol Free', 'Celery Free', 'Crustcean Free', 'Dairy', 'Eggs', 'Fish', 'Gluten', 'Paleo', 'Peanuts', 'Keto', 'Kosher', 'Low Potassium', 'Lupine Free', 'Mustard Free', 'No oil added', 'No Sugar', 'Pescatarian', 'Pork Free', 'Red Meat Free', 'Sesame Free', 'Shellfish', 'Soy', 'Tree Nuts', 'Vegan', 'Vegetarian', 'Wheat Free'];
    runThisCheckbox(4, 6, interupt, '.specialRequest', 'checkInteruptType');


