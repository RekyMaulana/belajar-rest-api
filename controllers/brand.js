import Brand from "../models/brand.js";


// Get semua product
export const getBrands = async (req, res) => {
    try {
        const brand = await Brand.findAll();
        res.send(brand);
    } catch (err) {
        console.log(err);
    }
}
 
// Get product berdasarkan id
export const getBrandsById = async (req, res) => {
    try {
        const brand = await Brand.findAll({
            where: {
                id: req.params.id
            },
        });
        res.send(brand[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create product baru
export const createBrands = async (req, res) => {
    try {
        await Brand.create(req.body);
        res.json({
            "message": "Brand Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update product berdasarkan id
export const updateBrands = async (req, res) => {
    try {
        await Brand.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Brand Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete product berdasarkan id
export const deleteBrands = async (req, res) => {
    try {
        await Brand.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": " Brand Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}

