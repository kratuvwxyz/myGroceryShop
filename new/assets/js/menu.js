    
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
    liMenu = (b, c, e, ap, f, h) => {
        let jqmb = $('<li></li>').addClass('p-1').attr('id', b);
        let jqmc = $('<a></a>').attr('href', c).text(ap);
        let jqmd = $('<span></span>').addClass('boxMenuAF');
        let jqme = $('<i></i>').addClass('fa').addClass('fa-'+e).attr('area-hidden', 'true');
        // let jqmap = $('<p></p>')
        jqmd.append(jqme);
        jqmc.prepend(jqmd);
        jqmb.append(jqmc);
        $(f).append(jqmb);
        $(jqmb).hide();
        if(h === "show"){
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
    ulMenu ('jqmAccount', 'Account');
    // login
    liMenu ('jqmLogIn', '#', 'star', 'Log In', '#jqmAccount', 'show');
    // signup
    liMenu ('jqmSignUp', '#', 'plug', 'Sign Up', '#jqmAccount', 'show');
    // account info
    liMenu ('jqmAccount', '#', 'user', 'Account Info', '#jqmAccount', '');
    // logout
    liMenu ('jqmLogOut', '#', 'star-o', 'Log Out', '#jqmAccount', '');
    
    // groceries
    // -- add leftover groceries
    // -- new shopping list
    // -- sms my list
    // -- delivery
    // 
    ulMenu ('jqmGroceries', 'Groceries');
    // add leftover groceries
    liMenu ('jqmAddLeftOver', '#', 'pencil', 'Add Leftover', '#jqmGroceries', 'show');
    // my new shopping groceries
    liMenu ('jqmMyShopList', '#', 'check-square-o', 'My New List', '#jqmGroceries', 'show');
    // SMS my list
    liMenu ('jqmSMSList', '#', 'paper-plane', 'SMS My List', '#jqmGroceries', 'show');
    // delivery
    liMenu ('jqmDeliverList', '#', 'truck', 'Delivery', '#jqmGroceries', 'show');

    // recipes
    // -- search from Leftover
    // -- new recipe search
    // -- add your recipe
    // -- my recipe book
    // -- check nutrition
    // 
    ulMenu ('jqmRecipes', 'Recipe Search');
    // search new recipes from leftover
    liMenu ('jqmSearchLeftOver', '#', 'share-square-o', 'From Leftover', '#jqmRecipes', 'show');
    // search new recipes
    liMenu ('jqmSearchReci', '#', 'search-plus', 'For New Test', '#jqmRecipes', 'show');
    // add your recipe
    liMenu ('jqmSMSList', '#', 'plus-circle', 'Add Reipe', '#jqmRecipes', 'show');
    // my recipe book
    liMenu ('jqmDeliverList', '#', 'bookmark', 'My Recipe Book', '#jqmRecipes', 'show');
    // check nutrition
    liMenu ('jqmDeliverList', '#', 'bar-chart', 'Check Nutrition', '#jqmRecipes', 'show');
    
    // contact
    // -- about
    // -- support
    // -- rate us
    // 
    ulMenu ('jqmContact', 'Contact');
    // search new recipes from leftover
    liMenu ('jqmSearchLeftOver', '#about', 'info-circle', 'About Us', '#jqmContact', 'show');
    // search new recipes
    liMenu ('jqmSearchReci', '#', 'support', 'Support', '#jqmContact', 'show');
    // add your recipe
    liMenu ('jqmSMSList', '#', 'heart', 'Rate Us', '#jqmContact', 'show');
    // facebook
    liMenu ('jqmSMSList', '#', 'facebook', 'Facebook', '#jqmContact', 'show');

