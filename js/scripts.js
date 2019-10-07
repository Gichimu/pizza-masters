
$(document).ready(function(){
    $("input#show_address").change(function(){
        $("div#address").show();
    });
    $("input#no_address").change(function(){
        $("div#address").hide();
    });


    //User interface logic

    $("button#submit").click(function(){
        
        var locale = $("select#inputState3").val();
        var estate = $("input#estate").val();
        var hse = $("input#house_number").val();

        
        
        var inputSize = $("select#inputState1").val();
        var inputCrust = $("select#inputState2").val();
        var inputQuantity = $("input#quantity").val();
        var inputToppings = "";

        /*$.each($("input[type='checkbox']:checked"), function(){
            inputToppings.push($(this).val());
        });*/

        var newPizza = new Pizza(inputSize, inputCrust, inputQuantity, inputToppings)
        
        
        $("p#message1").append("<p>Your pizza will be delivered to "+estate+" estate, house number "+hse+" in "+locale+"</p>");
        $("p#message2").append("<p>Your total will be: Ksh. "+newPizza.getCost()+"</p>");

       

    });




    //Business logic
    /*var Pizza = {
        size : {
            small : 100,
            medium : 200,
            large : 300
        },
        crust : {
            regular : 0,
            extra_crust : 200,
            vegetarian : 300
        },
        toppings : {
            extra_tomato : 200,
            extra_cheese : 300,
            veggie : 400
        }
    }*/

    function Pizza (size, crust, quantity, toppings){
        this.size = size;
        this.crust = crust;
        this.quantity = quantity;
        this.toppings = toppings;
    }

    Pizza.prototype.getCost = function(){
        var size = $("select#inputState1").val();
        var crust = $("select#inputState2").val();
        var quantity = $("input#quantity").val();
        var toppings = "";
        var price = 0;
        var delivery = false;

        if ($('#inlineCheckbox1').is(":checked"))
        {
            toppings = "extra_tomato";
        }else if($('#inlineCheckbox2').is(":checked")){
            toppings = "extra_cheese";
        }else if($('#inlineCheckbox3').is(":checked")){
            toppings = "veggie";
        }else{
            toppings = "";
        }

        if ($('#show_address').is(":checked"))
        {
            delivery = true;
        }else{
            delivery = false; 
        }

        if((size === "small")&&(crust === "regular")&&(toppings === "extra_tomato")){
            price = 300;

        }else if((size === "small")&&(crust === "regular")&&(toppings === "extra_cheese")){
            price = 400;
        }else if((size === "small")&&(crust === "regular")&&(toppings === "veggie")){
            price = 500;
        }else if((size === "small")&&(crust === "extra_crust")&&(toppings === "extra_tomato")){
            price = 500;
        }else if((size === "small")&&(crust === "extra_crust")&&(toppings === "extra_cheese")){
            price = 600;
        }else if((size === "small")&&(crust === "extra_crust")&&(toppings === "veggie")){
            price = 700;
        }else if((size === "small")&&(crust === "vegetarian")&&(toppings === "extra_tomato")){
            price = 600;
        }else if((size === "small")&&(crust === "vegetarian")&&(toppings === "extra_cheese")){
            price = 700;
        }else if((size === "small")&&(crust === "vegetarian")&&(toppings === "veggie")){
            price = 800;
        }else if((size === "small")&&(crust === "extra_crust")&&(toppings === "extra_tomato")){
            price = 500;
        }else if((size === "medium")&&(crust === "regular")&&(toppings === "extra_tomato")){
            price = 400;

        }else if((size === "medium")&&(crust === "regular")&&(toppings === "extra_cheese")){
            price = 500;
        }else if((size === "medium")&&(crust === "regular")&&(toppings === "veggie")){
            price = 600;
        }else if((size === "medium")&&(crust === "extra_crust")&&(toppings === "extra_tomato")){
            price = 600;
        }else if((size === "medium")&&(crust === "extra_crust")&&(toppings === "extra_cheese")){
            price = 700;
        }else if((size === "medium")&&(crust === "extra_crust")&&(toppings === "veggie")){
            price = 800;
        }else if((size === "medium")&&(crust === "vegetarian")&&(toppings === "extra_tomato")){
            price = 700;
        }else if((size === "medium")&&(crust === "vegetarian")&&(toppings === "extra_cheese")){
            price = 800;
        }else if((size === "medium")&&(crust === "vegetarian")&&(toppings === "veggie")){
            price = 900;
        }else if((size === "medium")&&(crust === "extra_crust")&&(toppings === "extra_tomato")){
            price = 600;
        }else if((size === "large")&&(crust === "regular")&&(toppings === "extra_tomato")){
            price = 500;

        }else if((size === "large")&&(crust === "regular")&&(toppings === "extra_cheese")){
            price = 600;
        }else if((size === "large")&&(crust === "regular")&&(toppings === "veggie")){
            price = 700;
        }else if((size === "large")&&(crust === "extra_crust")&&(toppings === "extra_tomato")){
            price = 700;
        }else if((size === "large")&&(crust === "extra_crust")&&(toppings === "extra_cheese")){
            price = 800;
        }else if((size === "large")&&(crust === "extra_crust")&&(toppings === "veggie")){
            price = 900;
        }else if((size === "large")&&(crust === "vegetarian")&&(toppings === "extra_tomato")){
            price = 800;
        }else if((size === "large")&&(crust === "vegetarian")&&(toppings === "extra_cheese")){
            price = 900;
        }else if((size === "large")&&(crust === "vegetarian")&&(toppings === "veggie")){
            price = 1000;
        }else if((size === "large")&&(crust === "extra_crust")&&(toppings === "extra_tomato")){
            price = 700;
        }else{
            price = 0;
        }*/


        if(delivery === true){
            price += 200;
        }else{
            price += 0;
        }

        return price * quantity;
        
    }


});