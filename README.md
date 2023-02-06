# blinkist-web-coding-challenge-2023


# Context

---

To get a better understanding of your work and thinking process, we’ve put together a coding problem we’d like you to solve. It's meant to help us make informed and fair hiring decisions. Feel free to reach out to us (**web-circle@blinkist.com**) if you have any questions.

We’d love to see your code and get insights into:

- how you approach such a task in general
- assumptions and rationale behind your decisions
- how you construct an architecture

Please make sure to cover technical insights as well as process and product considerations.

### **Description**

Imagine we have a blog with many articles. The goal of these articles is to inspire readers to learn and become Blinkist users. We’re constantly experimenting with different content formats – book lists, images and videos, quotes, etc.

**The challenge: We’d like to use AB-testing to learn which content formats work and which don’t.**

### **A/B Testing 101**

In this case, launching an AB-test means having a couple of versions (variations) of the same article and randomly show some users one variation and some users the other. The variation that leads to more clicks on the “Sign up” button (or any action/metric we want) wins and we roll it out to all users.

A default version of an article (or a part of an article) that we want to test is called **a control variation**. A new version we’re introducing is called **a test variation**.

### **Tech Details**

- The app is a statically served single-page application and has no active classical server. Hence all variation contents are included by content editors into the article's html markup.
- We’re using an in-house web analytics tool. It has “pageview” and “event” endpoints that we talk to via our `analytics-api.js`. For the challenge, you can assume visitor’s consent to tracking was given already #gdpr. ;)

Here’s a sandbox where you can see how an article would look like without AB-test logic on the page: [https://codesandbox.io/s/blinkist-web-coding-challenge-2023-w4z4uo](https://codesandbox.io/s/blinkist-web-coding-challenge-2023-w4z4uo)

### **Acceptance Criteria**

Implement the following logic while keeping the broader goal in mind:

1. A visitor sees only one variation (assigned randomly) when they land on the page.

2. The assigned variation doesn’t change after page reload.  

3. Track a pageview via the `analytics-api.js` methods when a visitor lands on the page.

4. Track an event via the `analytics-api.js` methods when a visitor clicks on the “Sign up” button.

5. Every single pageview and click is tracked.

6. We want to determine a winning variation by comparing CTR (click-through rate) of clicks on the “Sign up” button. The CTR of a page is "number of clicks" divided by "number of page views". As a user can only effectively convert (sign up) once, the counts for the CTR computation need to be unique per user. This means a single user clicking ten times and reloading the page 5 times should only count towards one conversion. Make sure this is possible with the data you send and explain on a high level how.

Feel free to use a Codesandbox, deploy your solution to Github Pages or use any other way to share it with us. We hope you'll enjoy the challenge.

Thanks for your time and good luck!
