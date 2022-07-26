// Script for managing Screen Magnetic Net website

// Assigns curresponding value to price based on quantity
function checkForm() {
    orderQty = document.orderForm.quantity
    if (orderQty.value == 2) {
        document.orderForm.price.value = "₦16,000";
        return true;
    }
    if (orderQty.value == 3) {
        document.orderForm.price.value = "₦24,000";
        return true;
    }
    if (orderQty.value == 4) {
        document.orderForm.price.value = "₦32,000";
        return true;
    }
    if (orderQty.value == 5) {
        document.orderForm.price.value = "₦40,000";
        return true;
    }
    alert("Choose a valid quantity to continue!");
    return false;
}
