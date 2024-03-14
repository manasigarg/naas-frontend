# NFT-as-a-service

This application provides an implementation for using NFT-as-a-service. It contains front end screens and related code for integrating a wallet to provide a seamless experience for users to sign transactions and execute NFT operations securely.

The codebase for NFT smart contract is available in a separate repository:
https://github.com/manasigarg/naas-backend

## Features

- **Frontend Screens**: The DApp includes frontend screens with intuitive interfaces for users to interact with.
- **Wallet Integration**: Seamless integration with Ethereum wallet allows users to sign transactions securely.
- **NFT Functionality**: Users can purchase tickets through the NFT smart contract and use other available NFT functions.

## Contents

```
1) src
    2.1) App.js...........................Main app
    2.2) MintStepperForm..................Stepper to create a transaction to send to wallet
    2.3) Sidebar..........................Sidebar to show options like view NFT, connect wallet
2) src/Cards
    2.1) Card1............................NFT 1
    2.2) Card2............................NFT 2
    2.3) CardCirculation..................Show available circulation for each NFT
    2.4) CardMint.........................Show NFT to buy
    2.5) CardOwners.......................Show owners for each NFT
3) src/Pages
    4.1) Page1............................Login page
    4.2) Page2............................Create NFT
    4.3) Page3............................Show NFT
    4.4) Page4............................Show circulation and owners cards
    4.5) Page5............................Buy NFT
4) src/Tables
    4.1) TableOwners......................Table for NFT owners
```
