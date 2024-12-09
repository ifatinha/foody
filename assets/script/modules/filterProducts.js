export const filterProducts = () => {
  const productsContainer = document.querySelector(".products__list");
  const products = Array.from(document.querySelectorAll(".product-card"));
  const buttons = document.querySelectorAll(".products__filter button");

  if (!products.length || !buttons.length) return;

  // ativar todos os cards
  const activatedAllCards = () => {
    products.forEach((product) => product.classList.add("activated"));
  };

  const removeCards = () => {
    products.forEach((product) => product.classList.remove("activated"));
  };

  const handleProductList = (event) => {
    if (event?.type === "touchstart") event.preventDefault();
    const button = event.currentTarget;
    const typeProduct = button.dataset.product;

    buttons.forEach((btn) => btn.classList.remove("activated"));
    button.classList.add("activated");

    if (typeProduct === "all") {
      activatedAllCards();
    } else {
      const filteredProducts = products.filter((product) => {
        const type = product.dataset.productType.split(" ")[1];
        return type === typeProduct;
      });

      removeCards();
      filteredProducts.forEach((product) => product.classList.add("activated"));
    }
  };

  activatedAllCards();

  buttons.forEach((button) => {
    ["touchstart", "click"].forEach((eventType) => {
      button.addEventListener(eventType, handleProductList);
    });
  });
};
