// Функція для додавання значення до поля виводу калькулятора.
// Приймає значення, яке потрібно додати (наприклад, число або оператор).
function appendToDisplay(value) {
  // Знаходимо елемент з ID "display" та додаємо до його значення (value) нове значення (value).
  document.getElementById('display').value += value;
}

// Функція для очищення поля виводу калькулятора.
function clearDisplay() {
  // Знаходимо елемент з ID "display" та встановлюємо його значення на пустий рядок (''),
  // щоб очистити поле виводу.
  document.getElementById('display').value = '';
}

// Функція для обчислення виразу, введеного у полі виводу.
function calculate() {
  // Отримуємо текст (вираз) з поля виводу.
  const expression = document.getElementById('display').value;

  // Спробуємо обчислити вираз, що введено в поле виводу.
  try {
    // Використовуємо функцію eval() для обчислення математичного виразу.
    const result = eval(expression);
    // Встановлюємо результат обчислення в поле виводу.
    document.getElementById('display').value = result;
  } catch (error) {
    // Якщо виникає помилка (наприклад, через неправильний вираз),
    // виводимо 'Помилка' в полі виводу.
    document.getElementById('display').value = 'Ошибка';
  }
}