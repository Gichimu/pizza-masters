
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

        var inputToppings = [];
        $.each($("input[type='checkbox']:checked"), function(){
            inputToppings.push($(this).val());
        });

        

        $("p#message1").append("<p>Your pizza will be delivered to "+estate+" estate, house number "+hse+" in "+locale+"</p>");
        $("p#message2").append("<p>Your total will be: Ksh. "+newPizza.getCost(inputSize, inputCrust, inputToppings)+"</p>");

       

    });




    //Business logic
    var Pizza = {
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
    }

    function Pizza (size, crust, toppings){
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }

    Pizza.prototype.getCost = function(){
        
        var price = 0;
        var delivery = false;

        if(size === "small"){
            price += this.size.small;

        }else if(size === "medium"){
            price += this.size.medium;
        }else{
            price += this.size.large;
        }

        if(crust === "extra_crust"){
            price += this.crust.extra_crust;
        }else if(crust === "vegetarian"){
            price += this.crust.vegetarian;
        }else{
            price += this.crust.regular;
        }

        toppings.forEach(function(topping){
            price += this.toppings.topping;
        })

        if(delivery === true){
            price += 200;
        }else{
            price += 0;
        }

        return price;
        
    }


    var newPizza = new Pizza(inputSize, inputCrust, inputToppings);
    
    


});