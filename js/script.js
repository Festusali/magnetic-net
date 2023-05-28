// Script for managing Screen Magnetic Net website

// Assigns corresponding value to price based on quantity
function checkForm() {
    orderQty = document.orderForm.quantity
    if (orderQty.value == 2) {
        document.orderForm.price.value = "₦16,000/ GHC400";
        return true;
    }
    if (orderQty.value == 4) {
        document.orderForm.price.value = "₦30,000/ GHC780";
        return true;
    }
    if (orderQty.value == 6) {
        document.orderForm.price.value = "₦42,000/ GHC1140";
        return true;
    }
    if (orderQty.value == 8) {
        document.orderForm.price.value = "₦50,500/ GHC1480";
        return true;
    }
    // if (orderQty.value == 5) {
    //     document.orderForm.price.value = "₦33,500";
    //     return true;
    // }
    // if (orderQty.value == 5) {
    //     document.orderForm.price.value = "₦39,000";
    //     return true;
    // }
    // alert("Choose a valid quantity to continue!");
    // return false;
}
