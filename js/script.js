// Script for managing Screen Magnetic Net website

// Assigns curresponding value to price based on quantity
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
        document.orderForm.price.value = "₦22,000";
        return true;
    }
    if (orderQty.value == 4) {
        document.orderForm.price.value = "₦30,000";
        return true;
    }
    if (orderQty.value == 5) {
        document.orderForm.price.value = "₦35,000";
        return true;
    }
    return false;
}
