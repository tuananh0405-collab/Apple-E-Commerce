import Category from '../models/categoryModel.js'
import asyncHandler from '../middlewares/asyncHandler.js'

const getAllCategories = asyncHandler(async(req,res)=>{
    const categories = await Category.find({})
    if(categories){
        res.json(categories)

    }else{
        res.status(400)
        throw new Error('Cannot find categories')
    }
})
const getCategoryByID = asyncHandler(async(req,res)=>{
    try {
        const category = await Category.findOne({ _id: req.params.id });
        res.json(category);
      } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
      }
})
const createCategory = asyncHandler(async(req,res)=>{
    try {
        const {name} = req.body 

        if(!name) return res.json({error: 'Please enter a name for this category'})

            const existingCategory = await Category.findOne({name})
            if(existingCategory) return res.json({error: 'Category already exists'})

                const category = await new Category({name}).save()

                res.json(category)
    } catch (error) {
        console.log(error);
        return res.status(400).json(error)
    }
})
const deleteCategoryByID = asyncHandler(async(req,res)=>{
    try {
        const removed = await Category.findByIdAndDelete(req.params.categoryID);
        res.json(removed);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
})
const updateCategoryByID = asyncHandler(async(req,res)=>{
    try {
        const {name} = req.body 
        const {categoryID} = req.params

        const category = await Category.findOne({_id: categoryID})

        if(!category) return res.status(400).json({error: 'Not Found'});

        category.name = name || category.name

        const updatedCategory = await category.save()
        res.json(updatedCategory)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error"})
    }
})

export {getAllCategories, getCategoryByID,createCategory,deleteCategoryByID,updateCategoryByID}