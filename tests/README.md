# Web SDK JS Interview's Exercises

### Exercise 1 - developement
Implement "calculateDiscount" function which has price, discountPercent and currencyCode as parameters (the currencyCode is optional).
The Price is "USD" and the method should return the size of the discount in the provided currency.

* Desired Outcome:
    * The method should return the amount of the discount 
    * The input can be anything

---

### Exercise 2 - Test Case Design
Imagine we have a function called calculateDiscount(price, discountPercent). It calculates a discounted price based on the original price and a discount percentage. How would you design test cases for this function using any test framework?

* Desired Outcome:
    * Demonstrates understanding of different types of test cases (e.g., valid input, invalid input, edge cases)
    * Shows ability to structure tests effectively within the any test framework (e.g., describe, it, assertions)
    * Uses appropriate assertions (toEqual, toBeGreaterThan, etc.)

---

### Exercise 3 - Mocking
This calculateDiscount function uses an external dependency, an exchangeRateApi to fetch exchange rates for international pricing. How would you mock this API in your tests?

* Desired Outcome:
    * Explains why mocking is important in this scenario (isolating the tested unit, avoiding real API calls)
    * Shows familiarity with mocking functions
    * Can set up a mock to return specific data for testing different scenarios

---

### Exercise 4 - Asynchronous Testing
Let's say calculateDiscount has been modified to fetch the discount percentage from an API asynchronously. How would your tests change?
* Desired Outcome:
    * Uses appropriate techniques for asynchronous testing
    * Handles potential errors (e.g., using try/catch)

---

### Bonus Exercise
Have you used any test coverage tools in combination with any test framework? How did you find the information helpful?
* Desired Outcome:
    * Demonstrates a deeper understanding of testing principles (code coverage, testing effectiveness)
    * If familiar, briefly mentions tool(s) used and the benefits they provided.



