# About my app

I took ~10 hours to make this app, including 3 hours to write unit tests (separated on some days).

# Process

I have started by create navigation page with conversation with error 500 and 404. After that I added messaging. I have based my design on desktop Messages app from Apple.

To get messages from other users, I have used SWR. It allows to auto refresh datas simply.

# Unit Tests

When my app was good for me, I have added some tests.

I Dont want to have a 100% coverage. You can show coverage by running `yarn test:coverage` to see coverage. Apart from the Form component every components are globally tested, utils are globally tested, and App page is tested (but not index).

I searched to make differents tests likes component with mock or function tests.

I have never used testing-library but Enzyme to write my unit tests, so it was more long to write them.

# Features

I have make basic features.

I have not added bonus 1.

Bonus 2 is added, by differents ways. For SSR 500 returns, 500 page exists. For messages updates, I have added toasts when errors are catched.

---

# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

Your job is to create the interface to consult those messages.
The interface needs to work on both desktop & mobile devices.

In addition to your code, a README explaining your thought process and your choices would be appreciated.

# Exercice :

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation

**As your application can be used by millions of users, make sure to provide some robust safety guards.**

### Sketches :

Obvisouly, it is up to you to make something nice and pretty, you are free to design it the way you like. The sketches are here to give you an idea on how it should look.

<details>
  <summary>Click to see the sketches</summary>
  
Mobile list :

![](./sketches/list-mobile.jpg)

Desktop list :

![](./sketches/list-desktop.jpg)

Mobile conversation :

![](./sketches/conv-mobile.jpg)

Desktop conversation :

![](./sketches/conv-desktop.jpg)

</details>

### API :

You can find the API swagger file in `docs/api-swagger.yaml`.

For a better readibility, you can view it on [https://leboncoin.tech/frontend-technical-test/](https://leboncoin.tech/frontend-technical-test/).

---

## Bonus 1 :

We provide some conversation samples, but can you improve the app so the user can now create new conversations ?

## Bonus 2 :

Our infrastructure is a bit shaky.. Sometimes the servers are crashing. “It’s not you, it’s me”, but maybe you can display something nice to warn the user and handle it gracefully.

## Do you want to make the app even better ?

Feel free to make as many improvements as you like.
We love creativity and technical challenges.

If you are out of ideas, here are some thoughts :

- As we want to reach our users anywhere, we need to make sure the app is performing well. What can you do to make it really fast ?

- Our goal is to support everybody in the country, including people with disabilities. As a good citizen and a good developer, can you make sure the app is accessible for everyone ?

- We all love to relax after a hard day’s work. It would be a shame if we didn’t feel confident enough about the upcoming automatic deployment. Are you sure everything has been tested thoroughly ?
