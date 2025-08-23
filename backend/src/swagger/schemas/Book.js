const Book = {
  type: 'object',
  required: ['title', 'author'],
  properties: {
    id: {
      type: 'integer',
      description: 'The auto-generated id of the book',
      example: 1
    },
    title: {
      type: 'string',
      description: 'The title of the book',
      example: 'The Lord of the Rings'
    },
    author: {
      type: 'string',
      description: 'The author of the book',
      example: 'J.R.R. Tolkien'
    },
    year: {
      type: 'integer',
      description: 'The year of publication',
      example: 1954
    }
  }
}

export default Book
