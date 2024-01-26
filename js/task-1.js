// * Task 1. User account * //

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  
  getBalance() {
    return this.balance;
  },

  getDiscount() {
    return this.discount;
  },

  setDiscount(value) {
    this.discount = value;
  },
  
  getOrders() {
    return this.orders;
  },

  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

console.log(customer.getDiscount()); // 0.1

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15

console.log(customer.getBalance()); // 24000

console.log(customer.getOrders() ); // ['Burger', 'Pizza', 'Salad']

customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750

console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// ---------- REMARKS OF THE MENTOR ---------- //

// task-1.js - Well executed moments/Добре виконані моменти //

// Гарне використання ключового слова this: ти правильно використав ключове слово this у всіх методах,
// щоб забезпечити доступ до властивостей з правильного контексту.

// Описові назви змінних: назви змінних вибрані добре і описові, що допомагає зрозуміти, що кожна з них представляє.

// Послідовне форматування: код форматується послідовно з правильним відступом та прогалинами, що значно поліпшує читабельність.

// Правильне форматування коду: твій код має правильне форматування зі стабільним відступом та прогалиною, що полегшує читання
// та розуміння.

// Включення тестових випадків: ти включив команди console.log для тестування методів об'єкту customer.
// Це хороша практика, оскільки вона допомагає перевірити функціональність коду.

// task-1.js - Improvement/Покращення //

// Коментар на іноземній мові: твоє використання коментаря на іноземній мові (українській, "Задача" означає "Task") можна покращити,
// переклавши його на англійську мову, щоб зберегти послідовність з основною мовою коду, якщо код призначений для такої мови.
