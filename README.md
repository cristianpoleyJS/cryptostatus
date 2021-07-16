# CryptoNine

# Ninety Nine Frontend Challenge

## **Description**

Create a simple flow for users to navigate and see information of Cryptocurrencies.

To obtain the raw data, you will be able to use Coincap, an open data API that provides lots of info about crypto: https://docs.coincap.io/

## **Requirements**

- Create two pages:
   * A page that displays all cryptos available in the API (for example using rows or tiles). Include at least for each crypto the name and symbol. You can create a backend service from where to query the API, or just get the info directly from the front end.
   * When user clicks on a crypto should navigate to a new page displaying more info of the crypto, including at least name and symbol, market cap and last price in USD.
- Add a basic layer of tests you would consider important (no need to be comprehensive, we just want to understand how you would structure them)
- If you feel creative and have extra time these are some extras:
   * Add a graph to the crypto page with historic prices
   * In the crypto page also display the price in Euros
   * Add caching
   * You can also just add interesting ideas to the README

## **Deliverables**

- Zip file or private repo, please include in the README instructions about how to run it locally

We hope you have fun! We appreciate your time completing this exercise.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```