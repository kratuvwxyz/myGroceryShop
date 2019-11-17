//Scroll menu display
$(window).on('scroll', () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        // $('#navbar').addClass('background-image-1');
        $('#navbar').css('background', '#FDEDB1');
        // $('#navbar').css('background-image', 'url(' + ../images/food.png + ')');
    } else {
        $('#navbar').css('background', '#FDEDB166');
    }
});

//Receipe Sections
//a = ; b = ; c = ; d = ; e = background color
recFolder = (a, b, c, d, e) => {
    let aa = $('<div></div>').addClass('col-sm-6').css('background-color', '#' + e);
    let bb = $('<div></div>').addClass('row');
    let cc = $('<div></div>').addClass('h3 p-3').text(a);
    let br = $('<br><br><br>');
    let dd = $('<div></div>').addClass('btn btn-dark btn-block btnFooter').attr('data-toggle', 'modal').attr('data-target', b).text(c);
    $(cc).append(br);
    $(bb).append(cc).append(dd);
    $(aa).append(bb);
    $(d).append(aa);
}

recFolder('Leftover Groceries', '.add-to-list-01', 'Add To List', '.r1', 'DDCC00');
recFolder('Recipes from Leftover', '.lefover-recipe-03', 'Search', '.r1', 'CCCC00');
recFolder('New Recipes', '.new-recipe-04', 'Search', '.r1', 'BBCC00');
recFolder('Nutrition', '.nutrition-05', 'Search', '.r1', 'AACC00');


$(document).on('click', '#newRecipeSearchBtn', (event) => {
    event.preventDefault();

    // gather values
    // 1 includeIngredients
    // user ingredient in a string
    let a1 = $('#userIngredients').val().trim();
    // 2 type
    // dish type selection
    let b2 = $('#inputDishType option:selected').val();
    // 3 cuisine
    // cuision type selection
    let c3 = $('#inputCuisionType option:selected').val();
    // 4 diet
    // healthy diet options selection
    let d4 = $('#inputDietType option:selected').val();
    // 5 intolerances
    // special kind of request
    // adding selection in an array first
    let e = [];
    $('#checkInteruptType input:checked').each(function () {
        e.push($(this).val());
    });
    // use this array to join in a string
    let f5 = e.join(', ');
    // 6 excludeIngredients
    // user ingredient intaularance in a string
    let g6 = $('#userExcludeIng').val().trim();
    // 7 maxReadyTime
    // Max time range
    let h7 = $('#rangeDemo').val();
    // 8 instructionsRequired = true
    //console.log(a1,b2,c3,d4,f5,g6,h7);
    $('form').get(0).reset();
    //console.log(a1,b2,c3,d4,f5,g6,h7);
    $.ajax({
        url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/complexSearch?includeIngredients=" + a1 + "&type=" + b2 + "&cuisine=" + c3 + "&diet=" + d4 + "&intolerances=" + f5 + "&excludeIngredients=" + g6 + "&maxReadyTime=" + h7,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-Mashape-Key", "B6aQubD0MzmshaDtr6oXZPh36w3Qp17hKoqjsnoDFeTMOaQT31");
        },
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        error: function (a) {
            //console.log("Cannot get data");
            //console.log(a);

        },
        success: function (data) {
            //console.log(data);
        }
    }).then(function (response) {
        let recipeList = response.results;
        //console.log(recipeList);
    })
});