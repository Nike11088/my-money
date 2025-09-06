import type { Response } from 'express'

export class ApiResponse {
  static success(res: Response, data: any = null, message: string = 'Success') {
    res.status(200).json({
      success: true,
      message,
      data
    })
  }

  static created(res: Response , data: any = null, message: string = 'Created') {
    res.status(201).json({
      success: true,
      message,
      data
    })
  }

  static error(res: Response, message: string = 'Error', statusCode: number = 500) {
    res.status(statusCode).json({
      success: false,
      message,
      data: null
    })
  }
}
