import { Router } from 'express'
import categoryRoute from './categoryRoute.js'

const router = Router()

router.use(categoryRoute)

export default router

// import express from 'express'
//
// const router = express.Router()
//
// /**
//  * @swagger
//  * tags:
//  *   name: MyMoney
//  *   description: API для управления расходами
//  */
//
// /**
//  * @swagger
//  * /api/index:
//  *   get:
//  *     summary: Получить приветсвтенное сообщение
//  *     tags: [MyMoney]
//  *     responses:
//  *       200:
//  *         description: Успешный запрос
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                message:
//  *                  type: string
//  *             example:
//  *               message: 'Добро пожаловать на мой сервер!'
//  *
//  */
// router.get('/', (req, res) => {
//   // res.send('Добро пожаловать на мой сервер!')
//   res.json({ message: 'Добро пожаловать на мой сервер!' })
// })
//
// // Маршрут POST с обработкой тела запроса
// router.post('/api/data', (req, res) => {
//   console.log('Получены данные:', req.body)
//   res.json({status: 'Данные получены', data: req.body})
// })
//
// export default router
