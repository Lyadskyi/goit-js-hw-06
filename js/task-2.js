// * Task 2. Storage * //

class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }
  
  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
};

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

console.log(storage.getItems()); // ['Nanitoids', 'Prolonger', 'Antigravitator']

storage.addItem("Droid");
console.log(storage.getItems()); // ['Nanitoids', 'Prolonger', 'Antigravitator', 'Droid']

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ['Nanitoids', 'Antigravitator', 'Droid']

// ---------- REMARKS OF THE MENTOR ---------- //

// task-2.js - Well executed moments/Добре виконані моменти //

// Гарна структура класу: твій клас Storage має чітку структуру з зрозумілим конструктором та визначенням методів.

// Використання приватної властивості: ти правильно визначив #items, як приватну властивість,
// дотримуючись принципу інкапсуляції в ООП.

// Виконання методів: усі три методи: getItems, addItem і removeItem - правильно реалізовані й виконують поставлену мету.

// Тестування: ти включив тестовий випадок для демонстрації функціональності методів класу, що є гарною практикою.

// Включення тестових випадків: ти включив команди console.log для тестування методів об'єкту customer.
// Це хороша практика, оскільки вона допомагає перевірити функціональність коду.
