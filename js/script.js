// Script for managing orders for Screen Magnetic Net and Portable Blender

// Assigns corresponding value to price based on Net quantity
function checkForm() {
    orderQty = document.orderForm.quantity
    if (orderQty.value == 1) {
        document.orderForm.price.value = "₦25,500";
        return true;
    }
    if (orderQty.value == 2) {
        document.orderForm.price.value = "₦46,000";
        return true;
    }
    if (orderQty.value == 3) {
        document.orderForm.price.value = "₦67,500";
        return true;
    }
    if (orderQty.value == 4) {
        document.orderForm.price.value = "₦88,000";
        return true;
    }
    if (orderQty.value == 5) {
        document.orderForm.price.value = "₦107,500";
        return true;
    }
    if (orderQty.value == 6) {
        document.orderForm.price.value = "₦126,000";
        return true;
    }
}


// Assigns corresponding value to price based on blender quantity
function checkBlenderForm() {
    orderQty = document.blenderOrderForm.quantity
    if (orderQty.value == 1) {
        document.blenderOrderForm.price.value = "₦15,000";
        return true;
    }
    if (orderQty.value == 2) {
        document.blenderOrderForm.price.value = "₦30,000";
        return true;
    }
    if (orderQty.value == 3) {
        document.blenderOrderForm.price.value = "₦45,000";
        return true;
    }
    if (orderQty.value == 4) {
        document.blenderOrderForm.price.value = "₦60,000";
        return true;
    }
    // alert("Choose a valid quantity to continue!");
    // return false;
}


// Assigns corresponding value to price based on massager quantity
function checkMassagerForm() {
    orderQty = document.massagerOrderForm.quantity
    if (orderQty.value == 1) {
        document.massagerOrderForm.price.value = "₦17,000";
        return true;
    }
    if (orderQty.value == 2) {
        document.massagerOrderForm.price.value = "₦32,000";
        return true;
    }
    if (orderQty.value == 3) {
        document.massagerOrderForm.price.value = "₦46,000";
        return true;
    }
    // alert("Choose a valid quantity to continue!");
    // return false;
}


// Assigns corresponding value to price based on egg cracker quantity
function checkEggCrackerForm() {
    orderQty = document.eggCrackerOrderForm.quantity
    if (orderQty.value == 1) {
        document.eggCrackerOrderForm.price.value = "₦15,500";
        return true;
    }
    if (orderQty.value == 2) {
        document.eggCrackerOrderForm.price.value = "₦25,000";
        return true;
    }
    if (orderQty.value == 3) {
        document.eggCrackerOrderForm.price.value = "₦36,000";
        return true;
    }
    if (orderQty.value == 4) {
        document.eggCrackerOrderForm.price.value = "₦44,000";
        return true;
    }
}
