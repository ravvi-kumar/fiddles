Here’s a curated list of **interesting and practical problems** to practice **Promises** and **async/await** in JavaScript. They progressively cover all core concepts including:

* Promise creation and chaining
* `Promise.all`, `Promise.race`, `Promise.any`, `Promise.allSettled`
* Async/await with error handling
* Converting callback-based code to Promises
* Real-world simulation (API calls, retries, queues, etc.)

---

###  1. **Simulate an API call with delay**

**Problem:** Write a function `fakeFetch(url)` that returns a promise and resolves after a random time (1-3 sec) with a success message or rejects with an error (20% chance).
**Objective:** Practice `new Promise`, `setTimeout`, and error handling.

---

###  2. **Retry until success**

**Problem:** Using the `fakeFetch(url)` from above, write `retryUntilSuccess(url, maxTries)` that keeps retrying the call until it succeeds or max tries are exhausted.
**Objective:** Loop with async/await, retry logic.

---

###  3. **Run multiple async tasks concurrently and wait for all**

**Problem:** Create 3 fetch functions simulating API calls and use `Promise.all()` to wait for them.
**Bonus:** Handle the case where one fails — use `Promise.allSettled()`.

---

###  4. **First to respond wins**

**Problem:** You have two redundant APIs. Use `Promise.race()` to respond with whichever fetch responds first.

```js
Promise.race([fetch1(), fetch2()])
```

**Objective:** Race conditions, fail-fast strategy.

---

###  5. **Sequential execution with delay**

**Problem:** Given an array of messages, log each one with a 1-second delay between them.

```js
await delayLog(["Hello", "World", "Async", "Rocks"])
```

**Objective:** Looping with `await`, timing control.

---

###  6. **Parallel with limit (Concurrency control)**

**Problem:** Implement a function that takes an array of async tasks and a concurrency limit, and runs at most `N` at a time.
Example: 10 tasks, 3 at a time.
**Objective:** Queue processing, advanced async handling.

---

###  7. **Waterfall / Dependency chaining**

**Problem:** Given an array of functions that return promises, execute them in sequence passing the result of one to the next.

```js
await waterfall([f1, f2, f3], initialInput)
```

**Objective:** Promise chaining manually.

---

###  8. **Convert a callback-based function to a promise**

**Problem:** Given a Node-style callback function (e.g. `fs.readFile(path, cb)`), write a function `promisify(fn)` to convert it to return a promise.
**Bonus:** Implement your own `promisifyAll(obj)` like in Bluebird.

---

###  9. **Time-out a slow async function**

**Problem:** Write a wrapper `withTimeout(promise, ms)` that rejects if a given promise doesn’t resolve within `ms` milliseconds.
**Objective:** Use `Promise.race` for timeout handling.

---

###  10. **Create a polling function**

**Problem:** Write `poll(fn, interval, maxTries)` that repeatedly calls an async function every interval until a success condition is met or tries are exhausted.
**Objective:** Intervals + async/await

---

###  11. **Abort an async task manually**

**Problem:** Create a fetch-like function that you can cancel manually using an `AbortController`.
**Objective:** Work with cancellation patterns and `AbortController` + `fetch`.

---

###  12. **Build a tiny wrapper library**

**Problem:** Create a small `AsyncUtils` module with:

* `wait(ms)`
* `retry(fn, retries)`
* `timeout(fn, ms)`
* `parallelLimit(tasks, limit)`

**Objective:** Combine everything you’ve learned into a utility set.

---

###  13. **Simulate traffic to an API endpoint**

**Problem:** You need to send 100 fake requests to an endpoint. Only 10 should run concurrently. Show progress.
**Bonus:** Retry failed ones up to 3 times.

---

###  14. **Resolve in order**

**Problem:** Given a list of async tasks that complete at different times, print their results in the order they were given.
**Objective:** Don't use `await` inside a loop blindly; preserve order.

---

###  15. **Chained file uploads**

**Problem:** Simulate uploading multiple files one-by-one. Each file should wait for the previous to complete.
**Bonus:** Show per-file progress (using fake `setTimeout`-based progress simulation).

---

###  Concepts covered:

| Concept                             | Covered In Problems |
| ----------------------------------- | ------------------- |
| Basic Promises                      | 1, 2, 4             |
| Async/Await                         | 3, 5, 6, 7          |
| `Promise.all`, `allSettled`, `race` | 3, 4, 9             |
| Retry logic                         | 2, 13               |
| Parallelism/Concurrency             | 3, 6, 13            |
| Sequential execution                | 5, 7, 15            |
| Timeouts and cancellation           | 9, 11               |
| Promisification                     | 8                   |
| Polling                             | 10                  |
| Utility patterns                    | 12                  |
| Order preservation                  | 14                  |

---
