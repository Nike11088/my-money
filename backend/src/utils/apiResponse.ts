export class ApiResponse {
  static success(res, data = null, message = 'Success') {
    res.status(200).json({
      success: true,
      message,
      data
    })
  }

  static created(res, data = null, message = 'Created') {
    res.status(201).json({
      success: true,
      message,
      data
    })
  }

  static error(res, message = 'Error', statusCode = 500) {
    res.status(statusCode).json({
      success: false,
      message,
      data: null
    })
  }
}
