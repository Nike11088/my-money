const Error = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      description: 'Error message'
    },
    error: {
      type: 'string',
      description: 'Error code'
    }
  }
}

export default Error
