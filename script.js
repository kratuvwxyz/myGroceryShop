/* Menu ---------------------------------------------------------------- */

//Menu toggle
toggleFunction = () => {
    //console.log('this is toggleFunction');
    $('#sidebar').toggleClass('active').addClass('deactive');
    $('#headOne').toggleClass('activeOne').addClass('deactive');
}
//if click on body to toggle this
toggleBodyFunction = () => {
    if ($('#sidebar').hasClass('deactive')) {
        //console.log('this is toggleBodyfunction');
        $('#sidebar').removeClass('deactive');
        $('#headOne').removeClass('deactive');
    }
    else if ($('#sidebar').hasClass('active')) {
        //console.log('do something like this');
        $('#sidebar').toggleClass('active');
        $('#headOne').toggleClass('activeOne');
    };
}

//Menu slide over
$(document).on('click', '#mainContainer', toggleBodyFunction);
$(document).on('click', '#sidebarCollapse', toggleFunction);
$(document).on('click', '#sidebarCollapse1', toggleFunction);

// When menu item click, close the menu
$(document).on('click', '#jqMenu', toggleFunction);

// a = id name
// p = copy text string
ulMenu = (a, p) => {
    let jqma = $('<ul></ul>').addClass('list-unstyled components').attr('id', a);
    let jqmp = $('<p></p>').addClass('text-uppercase').text(p);
    jqma.append(jqmp);
    $('.jqMenu').append(jqma);
}
/*
b = id name
c = link connect to - if not any use "#" string
e = icon class name string https://fontawesome.bootstrapcheatsheets.com/
ap = copy text string
f = id that gose to ul string #
h = show or hide
*/
liMenu = (b, c, e, ap, f, h, i, j, k, l) => {
    let jqmb = $('<li></li>').addClass('p-1').attr('id', b).attr('type', 'button');
    let jqmc = $('<a></a>').attr('href', c).text(ap).addClass('text-dark text-decoration-none').attr(i,j).attr(k,l);
    let jqmd = $('<span></span>').addClass('boxMenuAF');
    let jqme = $('<i></i>').addClass(e).attr('area-hidden', 'true');
    // let jqmap = $('<p></p>')
    jqmd.append(jqme);
    jqmc.prepend(jqmd);
    jqmb.append(jqmc);
    $(f).append(jqmb);
    $(jqmb).hide();
    if (h === "show") {
        $(jqmb).show();
    }
}

// account
// -- log in
// -- sign up
// -- or --
// -- account info
// -- log out
//
ulMenu('jqmAccount', 'Account');
// login
liMenu('jqmLogIn', '#', 'fas fa-star', 'Log In', '#jqmAccount', 'show');
// signup
liMenu('jqmSignUp', '#', 'fas fa-plug', 'Sign Up', '#jqmAccount', 'show');
// account info
liMenu('jqmAccount', '#', 'fas fa-user', 'Account Info', '#jqmAccount', '');
// logout
liMenu('jqmLogOut', '#', 'fas fa-star-o', 'Log Out', '#jqmAccount', '');

// groceries
// -- add leftover groceries
// -- new shopping list
// -- sms my list
// -- delivery
// 
ulMenu('jqmGroceries', 'Groceries');
// add leftover groceries
liMenu('jqmAddLeftOver', '#', 'fas fa-pencil-alt', 'Add Leftover', '#jqmGroceries', 'show');
// my new shopping groceries
liMenu('jqmMyShopList', '#', 'fas fa-check-square', 'My New List', '#jqmGroceries', 'show');
// SMS my list
liMenu('jqmSMSList', '#', 'fas fa-paper-plane', 'SMS My List', '#jqmGroceries', 'show');
// delivery
liMenu('jqmDeliverList', '#', 'fas fa-truck', 'Delivery', '#jqmGroceries', 'show');

// recipes
// -- search from Leftover
// -- new recipe search
// -- add your recipe
// -- my recipe book
// -- check nutrition
// 
ulMenu('jqmRecipes', 'Recipe Search');
// search new recipes from leftover
liMenu('jqmNewSearch', '#', 'fas fa-share-square', 'From Leftover', '#jqmRecipes', 'show');
// search new recipes
liMenu('jqmNewReci', '#', 'fas fa-search-plus', 'For New Test', '#jqmRecipes', 'show');
// add your recipe
liMenu('jqmYourReci', '#', 'fas fa-plus-circle', 'Add Recipe', '#jqmRecipes', 'show');
// my recipe book
liMenu('jqmReciBook', '#', 'fas fa-bookmark', 'My Recipe Book', '#jqmRecipes', 'show');
// check nutrition
liMenu('jqmNutrition', '#', 'fas fa-chart-bar', 'Check Nutrition', '#jqmRecipes', 'show');

// contact
// -- about
// -- support
// -- rate us
// 
ulMenu('jqmContact', 'Contact');
// about an app
liMenu('jqmAbout', '#about-modal', 'fas fa-info-circle', 'About Us', '#jqmContact', 'show', "data-bs-toggle", "modal", "data-bs-target", "#about-modal");
// support for this app
liMenu('jqmSupport', '#', 'fas fa-concierge-bell', 'Support', '#jqmContact', 'show');
// rate this app
liMenu('jqmRateUs', '#', 'fas fa-heart', 'Rate Us', '#jqmContact', 'show');
// facebook
liMenu('jqmFacebook', '#', 'fab fa-facebook', 'Facebook', '#jqmContact', 'show');

