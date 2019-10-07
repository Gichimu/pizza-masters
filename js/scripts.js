
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

        

        var newPizza = new Pizza(inputSize, inputCrust, inputQuantity, inputToppings)
        
        
        $("p#message1").append("<p>Your pizza will be delivered to "+estate+" estate, house number "+hse+" in "+locale+"</p>");
        $("p#message2").append("<p>Your total will be: Ksh. "+newPizza.getCost()+"</p>");

       

    });




    //Business logic
   
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
        var toppings = 0;
        var cost = 0;
        

        
        var price = 0;
        var delivery = false;

        if ($('#show_address').is(":checked"))
        {
            delivery = true;
        }else{
            delivery = false; 
        }

        if((size === "small")&&(crust === "regular")){
            price = 100;
        
        }else if((size === "small")&&(crust === "extra_crust")){
            price = 300;
        
        }else if((size === "small")&&(crust === "vegetarian")){
            price = 400;
        
        }else if((size === "medium")&&(crust === "regular")){
            price = 200;
        
        }else if((size === "medium")&&(crust === "extra_crust")){
            price = 400;
        
        }else if((size === "medium")&&(crust === "vegetarian")){
            price = 500;
        
        }else if((size === "large")&&(crust === "regular")){
            price = 500;

        }else if((size === "large")&&(crust === "regular")){
            price = 300;
        
        }else if((size === "large")&&(crust === "extra_crust")){
            price = 500;
        
        }else if((size === "large")&&(crust === "vegetarian")){
            price = 600;

        }else{
            price = 0;
        }

        $.each($("input[type='checkbox']:checked"), function(){
            toppings += 200;
        });

        price += toppings;
        cost = price * quantity;
        if(delivery === true){
            cost += 200;
        }else{
            cost += 0;
        }
        
        
        return cost;
        
    }


});