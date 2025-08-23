import { CategoryService } from '../services/categoryService.js'
import { ApiResponse } from '../utils/apiResponse.js'

export class CategoryController {
  categoryService

  constructor() {
    this.categoryService = new CategoryService()
  }

  getAllCategories = async (req, res, next) => {
    try {
      const categories = await this.categoryService.getAllCategories()
      ApiResponse.success(res, categories, 'Categories retrieved successfully')
    } catch (error) {
      next(error)
    }
  }
}
