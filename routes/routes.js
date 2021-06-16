// Import express
import express from "express";
// Import Controller Product
import { 
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
 } from "../controllers/Product.js";

// Import Controller Brand
import {
    getBrands,
    getBrandsById,
    createBrands,
    updateBrands,
    deleteBrands
} from "../controllers/brand.js";

import {
    createUser,
    loginUser,
    getUser
} from "../controllers/Users.js"
 
 // Init express router
const router = express.Router();
 
// Route get semua product
router.get('/products', getProducts);
// Route get product by id
router.get('/products/:id', getProductById);
// Route create product baru
router.post('/products', createProduct);
// Route update product by id
router.put('/products/:id', updateProduct);
// Route delete product by id
router.delete('/products/:id', deleteProduct);

router.get('/products?sortBy=desc')

// Route get semua brand
router.get('/brands', getBrands);
// Route get semua brand by id 
router.get('/brands/:id', getBrandsById);
// Route create brabd baru
router.post('/brands', createBrands);
// Route update brand baru
router.put('/brands/:id', updateBrands);
// Route delete brand baru
router.delete('/brands/:id', deleteBrands)

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/user', getUser)

 
// export router
export default router;