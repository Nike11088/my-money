export class CategoryService {
  // В реальном приложении здесь будет работа с базой данных
  categories = [
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

  async getAllCategories() {
    return this.categories
  }
}
