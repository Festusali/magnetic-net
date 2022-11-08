// Script for managing Screen Magnetic Net website

// Assigns corresponding value to price based on quantity
function checkForm() {
    orderQty = document.orderForm.quantity
    if (orderQty.value == 1) {
        document.orderForm.price.value = "₦10,000";
        return true;
    }
    if (orderQty.value == 2) {
        document.orderForm.price.value = "₦15,000";
        return true;
    }
    if (orderQty.value == 3) {
        document.orderForm.price.value = "₦21,000";
        return true;
    }
    if (orderQty.value == 4) {
        document.orderForm.price.value = "₦27,500";
        return true;
    }
    if (orderQty.value == 5) {
        document.orderForm.price.value = "₦33,500";
        return true;
    }
    if (orderQty.value == 5) {
        document.orderForm.price.value = "₦39,000";
        return true;
    }
    alert("Choose a valid quantity to continue!");
    return false;
}
