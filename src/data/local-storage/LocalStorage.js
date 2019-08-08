const SHOPPING_CART_KEY = "shopping_cart";

class LocalStorageHandler {
  static saveShoppingCartIdToLocalStorage(shoppingCartId) {
    localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(shoppingCartId));
  }

  static getShoppingCartIdFromLocalStorage() {
    if (localStorage.getItem(SHOPPING_CART_KEY) !== null)
      return JSON.parse(localStorage.getItem(SHOPPING_CART_KEY));
    else return '';
  }
}

export default LocalStorageHandler;
