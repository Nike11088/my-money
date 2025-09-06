import { CategoryService } from '../services/categoryService.js'
import { ApiResponse } from '../utils/apiResponse.js'
import type { Response, Request, NextFunction } from 'express'

export class CategoryController {
  categoryService

  constructor() {
    this.categoryService = new CategoryService()
  }

  getAllCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const categories = await this.categoryService.getAllCategories()
      ApiResponse.success(res, categories, 'Categories retrieved successfully')
    } catch (error) {
      next(error)
    }
  }
}
