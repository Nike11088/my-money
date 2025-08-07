// Импорт express
const express = require('express');
const app = express();

// Middleware для обработки JSON
app.use(express.json());

// Простой маршрут GET
app.get('/', (req, res) => {
  res.send('Добро пожаловать на мой сервер!');
});

// Маршрут POST с обработкой тела запроса
  app.post('/api/data', (req, res) => {
  console.log('Получены данные:', req.body);
  res.json({status: 'Данные получены', data: req.body});
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express сервер запущен на порту ${PORT}`);
});
