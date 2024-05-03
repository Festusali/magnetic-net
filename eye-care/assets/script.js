// Script for managing orders for Vista Eye Drop Website

// Assigns corresponding value to price based on eye drop quantity
function checkForm() {
    orderQty = document.orderForm.quantity
    if (orderQty.value == 2) {
        document.orderForm.price.value = "₦16,500";
        return true;
    }
    if (orderQty.value == 4) {
        document.orderForm.price.value = "₦33,000";
        return true;
    }
}
