# BT-20 TOKEN STANDARD

## INTRODUCTION

What is a Token? Tokens can represent virtually anything in Bitcoin: reputation points in an online platform skills of a character in a game lottery tickets financial assets like a share in a company a fiat currency like USD an ounce of gold and more... Such a powerful feature of Bitcoin must be handled by a robust standard, right? That's exactly where the SBT-20 plays its role! This standard allows developers to build smart token applications that are interoperable with other products and services in the Bitcoin Network

## What is SBT-20?

The SBT-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes each Token be exactly the same (in type and value) as another Token. Meaning 1 Token is and will always be equal to all the other Tokens.

## PREREQUISITES

- Accounts
- Smart Contracts
- Token standards

## BODY

The SBT-20 (Bitcoin Smart Tokens 20), builds on the ERC-20 standard proposed by Fabian Vogelsteller in November 2015, which is a Token Standard that implements an API for tokens within Smart Contracts. The SBT-20 standard expands this implementation adding smart functionality to Bitcoin tokens for all Bitcoin EVM scaling networks to adopt. Example functionalities SBT-20 provides:

- transfer tokens from one account to another
- get the current token balance of an account
- get the total supply of the token available on the network
- approve whether an amount of token from an account can be spent by a third-party account

If a Smart Contract implements the following methods and events it can be called an SBT-20 Token Contract and, once deployed, it will be responsible to keep track of the created tokens on Bitcoin.

### METHODS
```solidity
function name() public view returns (string)
function symbol() public view returns (string)
function decimals() public view returns (uint8)
function totalSupply() public view returns (uint256)
function balanceOf(address _owner) public view returns (uint256 balance)
function transfer(address _to, uint256 _value) public returns (bool success)
function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
function approve(address _spender, uint256 _value) public returns (bool success)
function allowance(address _owner, address _spender) public view returns (uint256 remaining)
