import express from 'express'
import swaggerUi from 'swagger-ui-express'
import router from './routes/index.js'
import getSpecs from './swagger/swagger.js'
// import indexRouter from './routes/index.js'
// import booksRouter from './routes/books.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Routes
app.use('/api', router)

// Роут для документации Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(getSpecs({ port: PORT })))

// Подключаем роутеры
// app.use('/api/index', indexRouter)
// app.use('/api/books', booksRouter)

// Запуск сервера
app.listen(PORT, () => {
  // console.log(`Express сервер запущен на порту ${PORT}`)
  console.log(`Server is running on http://localhost:${PORT}`)
  console.debug(`Swagger docs available at http://localhost:${PORT}/api-docs`)
})

export default app
