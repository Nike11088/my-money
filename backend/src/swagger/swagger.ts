import swaggerJsdoc from 'swagger-jsdoc'
import Category from './schemas/Category.js'
import Book from './schemas/Book.js'
import Error from './schemas/Error.js'

export type SpecsParams = {
  port: number
}

const getSpecs = ({ port }: SpecsParams): object => {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'MyMoney API',
        version: '1.0.0',
      },
      servers: [
        {
          url: `http://localhost:${port}`,
          description: 'Development server',
        },
      ],
      components: {
        schemas: {
          Category,
          Book,
          Error
        }
      }
    },
    // Пути к файлам с JSDoc комментариями
    apis: ['./src/routes/*.js'],
  }

  return swaggerJsdoc(options)
}

export default getSpecs
