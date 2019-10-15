/*
- account
    -- log in
    -- sign up
    -- or --
    -- account info
    -- log out
- groceries
    -- add leftover groceries
    -- new shopping list
    -- sms my list
    -- delivery
- recipes
    -- search from Leftover
    -- new recipe search
    -- add your recipe
    -- my recipe book
    -- check nutrition
- contact
    -- about
    -- support
    -- rate us
*/

    
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
    ulMenu ('jqmAccount', 'Account');
    // login
    liMenu ('jqmLogIn', '#', 'star', 'Log In', '#jqmAccount', 'show');
    // signup
    liMenu ('jqmSignUp', '#', 'plug', 'Sign Up', '#jqmAccount', 'show');
    // account info
    liMenu ('jqmAccount', '#', 'user', 'Account Info', '#jqmAccount', '');
    // logout
    liMenu ('jqmLogOut', '#', 'star-o', 'Log Out', '#jqmAccount', '');



/* <ul class="">
<p class="">Contact</p>
            <!-- Home  -->
            <li id="homeLi"><a href="#"><span class=""><i class="fa fa-home" aria-hidden="true"></i></span>
                    HOME</i></a></li>
            <!-- About  -->
            <li id="aboutLi"><a href="#about"><span class="boxMenuAF"><i class="fa fa-check"
                            aria-hidden="true"></i></span> ABOUT</a>
            </li>
            <!-- Leftover Grocery  -->
            <li><a href="#"><span class="boxMenuAF"><i class="fa fa-leaf" aria-hidden="true"></i></span> Leftover
                    Groceries</a></li>
            <!-- Recipes  -->
            <li>
                <a href="#recipeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <span class="boxMenuAF">
                        <i class="fa fa-cutlery" aria-hidden="true"></i>
                    </span>
                    RECIPES
                </a>
                <ul class="collapse list-unstyled" id="recipeSubmenu">
                    <li>
                        <a href="#recipeSearch">
                            <span class="boxMenuAF">
                                <i class="fa fa-search align-bottom" aria-hidden="true"></i>
                            </span>
                            Search From Leftover
                        </a>
                    </li>
                    <li>
                        <a href="#recipeSearch">
                            <span class="boxMenuAF">
                                <i class="fa fa-search align-bottom" aria-hidden="true"></i>
                            </span>
                            Search New Recipes
                        </a>
                    </li>
                    <li>
                        <a href="#recipeSearch">
                            <span class="boxMenuAF">
                                <i class="fa fa-plus align-bottom" aria-hidden="true"></i>
                            </span>
                            Add Recipe
                        </a>
                    </li>
                    <li>
                        <a href="#recipeSearch">
                            <span class="boxMenuAF">
                                <i class="fa fa-book align-bottom" aria-hidden="true"></i>
                            </span>
                            My Recipes
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <span class="boxMenuAF">
                        <i class="fa fa-pie-chart" aria-hidden="true"></i>
                    </span>
                    NUTRITION
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="boxMenuAF">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    SHOPING LIST
                </a>
            </li>
        </ul> */