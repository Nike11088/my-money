import express from 'express'
import type { Response, Request } from 'express'

const router = express.Router()

// In-memory "база данных"
const books = [
  { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: 1954 },
  { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 }
]
let nextId = 3

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: API для управления книгами
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Получить список всех книг
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: Успешный запрос
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/', (req: Request, res: Response) => {
  res.json(books)
})

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Получить книгу по ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID книги
 *     responses:
 *       200:
 *         description: Данные книги
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Книга не найдена
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               message: "Book not found"
 *               error: "NOT_FOUND"
 */
router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const book = books.find(b => b.id === id)

  if (!book) {
    return res.status(404).json({
      message: 'Book not found',
      error: 'NOT_FOUND'
    })
  }

  res.json(book)
})

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Создать новую книгу
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *           example:
 *             title: "New Book"
 *             author: "Author Name"
 *             year: 2023
 *     responses:
 *       201:
 *         description: Книга успешно создана
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Неверные входные данные
 */
router.post('/', (req: Request, res: Response) => {
  const { title, author, year } = req.body

  if (!title || !author) {
    return res.status(400).json({
      message: 'Title and author are required'
    })
  }

  const newBook = {
    id: nextId++,
    title,
    author,
    year: year || null
  }

  books.push(newBook)
  res.status(201).json(newBook)
})

export default router
