export type Category = {
  name: string
  icon: {
    color: string
  }
}

export class CategoryService {
  // В реальном приложении здесь будет работа с базой данных
  categories: Category[] = [
    {
      name: 'Кафе',
      icon: {
        color: 'yellow'
      }
    },
    {
      name: 'Продукты',
      icon: {
        color: 'green'
      }
    }
  ]

  async getAllCategories(): Promise<Category[]> {
    return this.categories
  }
}
