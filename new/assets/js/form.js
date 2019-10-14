// form to create a dropdown
//ww = name attribute and ID; xx = an array list; yy = an id to display in html
runThisDropdown = (ww, xx, yy, idd) => {
    let a = $('<select></select>').addClass('custom-select').attr('name', ww).attr('id', idd);
    let b = $('<option selected>Select one of the option</option>').attr('value', '');
    $(a).append(b);
    for (let i = 0; i < xx.length; i++) {
        //console.log(xx[i]);

        let aa = $('<option></option>').attr('value', xx[i]).text(xx[i]);
        $(a).append(aa);
    }
    $(yy).append(a);
}

// form to create a Radio Buttons
//n = col-md-#; xx = an array list; yy = an id to display in html; zz = name attribute
runThisRadioBox = (n, m, xx, yy, zz, idd) => {
    for (let i = 0; i < xx.length; i++) {
        //console.log(xx[i]);
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
        //console.log(xx[i]);
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
    // 2
    // DishType
    // let dishtype = ['Appetizer', 'Bread', 'Cereals', 'Condiments and sauces', 'Drinks', 'Desserts', 'Main course', 'Pancake', 'Preps', 'Preserve', 'Salad', 'Sandwiches', 'Side dish', 'Soup', 'Starter', 'Sweets'];
    let dishtype = ['Appetizer','Beverage','Bread','Breakfast','Dessert','Drink','Fingerfood','Main Course','Marinade','Salad','Sauce','Side Dish','Snack','Soup'];
    runThisDropdown('dish', dishtype, '.dishType', 'inputDishType');

    // 3
    // CuisionType
    let cuisiontype = ['African','American','British','Cajun','Caribbean','Chinese','Eastern European','European','French','German','Greek','Indian','Irish','Italian','Japanese','Jewish','Korean','Latin American','Mediterranean','Mexican','Middle Eastern','Nordic','Southern','Spanish','Thai','Vietnamese'];
    runThisDropdown('cuision', cuisiontype, '.cuisionType', 'inputCuisionType');

    // 4
    // Healthy Diet Options
    // let diettype = ['Balanced', 'High-Fiber', 'High-Protein', 'Low-Carb', 'Low-Fat', 'Low-Sodium'];
    let diettype = ['Gluten Free', 'Ketogenic', 'Vegetarian', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Vegan', 'Pescetarian', 'Paleo', 'Primal', 'Whole30'];
    runThisDropdown('diet', diettype, '.dietType', 'inputDietType');

    // 5
    // Anything you have in mind to choose
    // let interupt = ['Alcohol Free', 'Celery Free', 'Crustcean Free', 'Dairy', 'Eggs', 'Fish', 'Gluten', 'Paleo', 'Peanuts', 'Keto', 'Kosher', 'Low Potassium', 'Lupine Free', 'Mustard Free', 'No oil added', 'No Sugar', 'Pescatarian', 'Pork Free', 'Red Meat Free', 'Sesame Free', 'Shellfish', 'Soy', 'Tree Nuts', 'Vegan', 'Vegetarian', 'Wheat Free'];
    let interupt = ['Dairy','Egg','Gluten','Grain','Peanut','Seafood','Sesame','Shellfish','Soy','Sulfite','Tree Nut','Wheat'];
    runThisCheckbox(3, 6, interupt, '.specialRequest', 'checkInteruptType');

    // 7
    // Time Range
    $(document).on('input', '#timeRange', () => {
        let t = $("input[type=range]").val();
        //console.log(t);
        $('#rangeDemo').text(t).val(t);
    });
    