const Category = {
  type: 'object',
    required: ['name', 'icon'],
    properties: {
    name: {
      type: 'string',
        example: 'Кафе',
    },
    icon: {
      type: 'object',
        required: ['color'],
        properties: {
        name: {
          type: 'string',
            example: 'some-icon',
        },
        color: {
          type: 'string',
            example: 'blue',
        }
      }
    }
  }
}

export default Category
