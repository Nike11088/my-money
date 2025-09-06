import { Router } from 'express'
import { CategoryController } from '../controllers/categoryController.js'

const router = Router()
const categoryController = new CategoryController()

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: API для управления категориями
 */

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Получить список всех категорий
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Успешный запрос
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.get('/categories', categoryController.getAllCategories)

export default router
