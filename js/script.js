// Script for managing orders for Screen Magnetic Net and Portable Blender

// Assigns corresponding value to price based on Net quantity
function checkForm() {
    orderQty = document.orderForm.quantity
    if (orderQty.value == 2) {
        document.orderForm.price.value = "₦18,000/ GHC400";
        return true;
    }
    if (orderQty.value == 4) {
        document.orderForm.price.value = "₦34,000/ GHC780";
        return true;
    }
    if (orderQty.value == 6) {
        document.orderForm.price.value = "₦48,000/ GHC1140";
        return true;
    }
    if (orderQty.value == 8) {
        document.orderForm.price.value = "₦60,000/ GHC1480";
        return true;
    }
    if (orderQty.value == 10) {
        document.orderForm.price.value = "₦70,000/ GHC1800";
        return true;
    }
    // if (orderQty.value == 5) {
    //     document.orderForm.price.value = "₦39,000";
    //     return true;
    // }
    // alert("Choose a valid quantity to continue!");
    // return false;
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
