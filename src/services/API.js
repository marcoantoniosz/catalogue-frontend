export const fetchAllProducts = async () => {
    const products = await fetch('https://backendcatalogue.herokuapp.com/products');
    const productsJSON = await products.json();
    return productsJSON;
}

export const fetchProductsByCategoryId = async (categoryId) => {
    const products = await fetch(`https://backendcatalogue.herokuapp.com/products/category/${categoryId}`);
    const productsJSON = await products.json();
    return productsJSON;
};

export const fetchProductById = async (id) => {
    const product = await fetch(`https://backendcatalogue.herokuapp.com/products/${id}`);
    const productJSON = await product.json();
    return productJSON;
};

export const fetchAllCategories = async () => {
    const categories = await fetch('https://backendcatalogue.herokuapp.com/categories');
    const categoriesJSON = await categories.json();
    return categoriesJSON;
};

export const fetchImagesByProductId = async (id) => {
    const images = await fetch(`https://backendcatalogue.herokuapp.com/images/${id}`);
    const imagesJSON = await images.json();
    return imagesJSON;
};