// src/event handling/eventHandlingProductList.js
export const fetchProducts = async (setProducts) => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);

  } catch (error) {
    console.error("Error fetching data:", error);

  }
};

// Logic phân trang
export const paginateProducts = (products, currentPage, productsPage) => {
  const LastProduct = currentPage * productsPage;
  const FirstProduct = LastProduct - productsPage;
  return products.slice(FirstProduct, LastProduct);
};
