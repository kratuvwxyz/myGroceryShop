//<div class="input-group mb-3">
//<div class="input-group-prepend">
//    <div class="input-group-text">
//        <input type="checkbox" aria-label="Checkbox for following text input">
//    </div>
//</div>
//<div class="form-control h5">Alcohol-Free</div>
//</div>
let interupt = ['Alcohol Free', 'Celery Free', 'Crustcean Free', 'Dairy', 'Eggs', 'Fish', 'Gluten', 'Paleo', 'Peanuts'];
let interupttwo = ['Keto', 'Kosher', 'Low Potassium', 'Lupine Free', 'Mustard Free', 'No oil added', 'No Sugar', 'Pescatarian', 'Pork Free'];
let interuptthree = ['Red Meat Free', 'Sesame Free', 'Shellfish', 'Soy', 'Tree Nuts', 'Vegan', 'Vegetarian', 'Wheat Free'];

runThis = (xx, yy) => {
    for ( let i = 0; i < xx.length; i++){
        console.log(xx[i]);
        let aa = $('<div></div>').addClass('input-group mb-3');
        let bb = $('<div></div>').addClass('input-group-prepend');
        let cc = $('<div></div>').addClass('input-group-text');
        let dd = $('<input type="checkbox">');
        let ee = $('<div></div>').addClass('form-control h5').text(xx[i]);
        $(cc).append(dd);
        $(bb).append(cc);
        $(aa).append(bb);
        $(aa).append(ee);

        $(yy).append(aa);
        
    }
}
runThis(interupt, '.specialRequest');
runThis(interupttwo, '.specialRequesttwo');
runThis(interuptthree, '.specialRequestthree');