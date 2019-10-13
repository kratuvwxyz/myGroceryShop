toggleFunction = () => {
    $('#sidebar').toggleClass('active');
    $('#headOne').toggleClass('activeOne');
}

//Menu slide over
$(document).on('click', '#sidebarCollapse', toggleFunction);
$(document).on('click', '#sidebarCollapse1', toggleFunction);
$(document).on('click', '#homeLi', toggleFunction);
$(document).on('click', '#aboutLi', toggleFunction);

//Receipe Sections
//a = ; b = ; c = ; d = ; e = background color
recFolder = (a, b, c, d, e) => {
    let aa = $('<div></div>').addClass('col-6 col-md-3').css('background-color', '#'+e);
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