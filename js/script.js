"use strict";


(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        var submitBurger = $("#submit_burger");
        var submitPizza = $("#submit_pizza");
        var submitRibs = $("#submit_ribs");
        var submitIcecream = $("#submit_icecream");
        var tbody = $('#tbody');
        var subtotal = 0;
        var taxRate = 0.1;
        var tax = 0;
        var total = 0;
        var subtotalTable = $("#subtotal");
        var taxTable = $("#tax");
        var totalTable = $("#total");
        var formName = $("#icon_prefix");
        var formNumber = $("#icon_telephone");
        var formAddress = $("#icon_businesse");

        var addBurger = function() {
            tbody.prepend("<tr><td>Royale with Cheese</td><td></td><td>$8.99</td></tr>");
            subtotal += (8.99);
            subtotalTable.html(subtotal.toFixed(2));
            tax = taxRate * subtotal;
            taxTable.html(tax.toFixed(2));
            total = tax + subtotal;
            totalTable.html(total.toFixed(2));

        };
        var addPizza = function() {
            tbody.prepend("<tr><td>Arugula Pie</td><td></td><td>$11.99</td></tr>");
            subtotal += (11.99);
            subtotalTable.html(subtotal.toFixed(2));
            tax = taxRate * subtotal;
            taxTable.html(tax.toFixed(2));
            total = tax + subtotal;
            totalTable.html(total.toFixed(2));
        };
        var addRibs = function() {
            tbody.prepend("<tr><td>Smoked Swine</td><td></td><td>$14.99</td></tr>");
            subtotal += (14.99);
            subtotalTable.html(subtotal.toFixed(2));
            tax = taxRate * subtotal;
            taxTable.html(tax.toFixed(2));
            total = tax + subtotal;
            totalTable.html(total.toFixed(2));
        };
        var addIcecream = function() {
            tbody.prepend("<tr><td>Ice Cream Biscuits</td><td></td><td>$7.99</td></tr>");
            subtotal += (7.99);
            subtotalTable.html(subtotal.toFixed(2));
            tax = taxRate * subtotal;
            taxTable.html(tax.toFixed(2));
            total = tax + subtotal;
            totalTable.html(total.toFixed(2));
        };
        var submitting = function() {
            console.log(tbody.children().length);
            if ((formName.val().length > 0) && (formNumber.val().length > 0) && (formAddress.val().length > 0) && (tbody.children().length > 3)) {
                console.log("I'm working");
                Materialize.toast('Success! Your order has been placed.', 5000);
            } else {
                Materialize.toast('Please completely fill out order form.', 5000);
            }
        };

        $(submitBurger).on("click", addBurger);
        $(submitPizza).on("click", addPizza);
        $(submitRibs).on("click", addRibs);
        $(submitIcecream).on("click", addIcecream);
        $("#toasted").on("click", submitting);

    }); // end of document ready
})(jQuery); // end of jQuery name space
