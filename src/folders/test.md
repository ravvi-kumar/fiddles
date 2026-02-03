Ahhh got it — you want **real object practice**, not “hello dot notation” 😄
Let’s crank this up. These are **still beginner–intermediate**, but they’ll force you to *think* about objects, nesting, mutation, and logic.

No answers. No hand-holding. Just good problems.

---

## 🏰 1. RPG Player Profile (Nested Objects)

```js
const player = {
  name: "Aria",
  level: 7,
  stats: {
    strength: 14,
    agility: 11,
    intelligence: 16
  },
  inventory: {
    gold: 120,
    items: ["dagger", "cloak", "health potion"]
  }
};
```

**Tasks:**

* Increase the player’s level by 1.
* Increase strength by 2 **inside stats**.
* Spend 30 gold.
* Add `"magic ring"` to the items list.
* Remove `"cloak"` from the inventory.

---

## 🚀 2. Space Mission Control

```js
const mission = {
  name: "Odyssey",
  crew: {
    commander: "Reyes",
    pilot: "Chen",
    engineer: "Morgan"
  },
  status: "active",
  distanceFromEarth: 384400 // km
};
```

**Tasks:**

* Print the commander’s name.
* Add a new crew role: `scientist`.
* Update the mission status to `"completed"`.
* Increase the distance by 5000 km.
* Rename the mission to `"Odyssey II"`.

---

## 🧾 3. Online Store Order

```js
const order = {
  id: "ORD-001",
  customer: {
    name: "Liam",
    email: "liam@example.com"
  },
  items: [
    { name: "Keyboard", price: 50, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 }
  ],
  isPaid: false
};
```

**Tasks:**

* Calculate the total cost of the order.
* Increase the quantity of `"Keyboard"` by 1.
* Add a new item to the order.
* Mark the order as paid.
* Remove an item by name.

---

## 🧠 4. Quiz App Question Bank

```js
const quiz = {
  title: "JavaScript Basics",
  questions: {
    q1: { text: "What is let?", difficulty: "easy" },
    q2: { text: "Explain closures.", difficulty: "hard" }
  }
};
```

**Tasks:**

* Add a new question.
* Change the difficulty of `q1`.
* Delete `q2`.
* Print all question texts.
* Count how many questions exist.

---

## 🏙️ 5. City Population Database

```js
const city = {
  name: "Neo Tokyo",
  districts: {
    north: 120000,
    south: 95000,
    east: 143000,
    west: 87000
  }
};
```

**Tasks:**

* Calculate the total population.
* Find which district has the highest population.
* Increase every district’s population by 5%.
* Add a new district.
* Remove one district.

---

## 🎬 6. Streaming Service Library

```js
const library = {
  movies: [
    { title: "Inception", rating: 8.8, watched: true },
    { title: "Interstellar", rating: 8.6, watched: false }
  ],
  series: []
};
```

**Tasks:**

* Print all movie titles.
* Mark `"Interstellar"` as watched.
* Add a new movie.
* Remove movies with rating below 8.7.
* Count total watched movies.

---

## 🧪 7. Science Experiment Tracker

```js
const experiment = {
  name: "Plant Growth",
  trials: [
    { day: 1, height: 2 },
    { day: 2, height: 3.5 },
    { day: 3, height: 5 }
  ]
};
```

**Tasks:**

* Find the average plant height.
* Add a new trial.
* Update the height for day 2.
* Find the day with the maximum growth.
* Remove a trial by day number.

---

## 🕹️ 8. Game Achievement System

```js
const achievements = {
  unlocked: ["First Kill", "Explorer"],
  locked: ["Master Hacker", "Speed Runner"]
};
```

**Tasks:**

* Unlock `"Master Hacker"`.
* Prevent duplicate achievements.
* Check if `"Explorer"` is unlocked.
* Move all unlocked achievements into a new object called `completed`.
* Count total achievements.

---

## 🏦 9. Bank Account Manager

```js
const account = {
  owner: "Nina",
  balance: 1500,
  transactions: [
    { type: "deposit", amount: 500 },
    { type: "withdrawal", amount: 200 }
  ]
};
```

**Tasks:**

* Recalculate the balance from transactions.
* Add a new transaction.
* Prevent withdrawals that exceed balance.
* Print a mini bank statement.
* Delete a transaction by index.

---

## 🧩 10. Configurable App Settings

```js
const settings = {
  theme: {
    mode: "dark",
    accent: "blue"
  },
  notifications: {
    email: true,
    sms: false
  },
  privacy: {
    tracking: false
  }
};
```

**Tasks:**

* Toggle dark/light mode.
* Enable all notifications.
* Add a new privacy setting.
* Reset all settings to defaults.
* Deep-copy the settings object (no shared references).

---

If you want next-level pain 😈:

* **immutability-only rules**
* **write helper functions for each object**
* **convert everything to Map / Set**
* **interview-style constraints (1 loop max, no loops, etc.)**

Just tell me how hard you want it.
