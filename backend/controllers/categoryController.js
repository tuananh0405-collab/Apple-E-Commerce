import Category from '../models/categoryModel.js'
import asyncHandler from '../middlewares/asyncHandler.js'

const getAllCategories = asyncHandler(async(req,res)=>{
    res.send('getAllCategories')
})
const getCategoryByID = asyncHandler(async(req,res)=>{
    res.send('getCategoryByID')
})
const createCategory = asyncHandler(async(req,res)=>{
    res.send('createCategory')
})
const deleteCategoryByID = asyncHandler(async(req,res)=>{
    res.send('deleteCategoryByID')
})
const updateCategoryByID = asyncHandler(async(req,res)=>{
    res.send('updateCategoryByID')
})

export {getAllCategories, getCategoryByID,createCategory,deleteCategoryByID,updateCategoryByID}