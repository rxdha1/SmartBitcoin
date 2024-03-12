# Smart Bitcoin Token Standards

#About: 

## General:
With rise of viable "E"VM solutions directly on Bitcoin there are a few things to consider. These Virtual Machine networks on Bitcoin are sure to have their own tokens.  Since these VM Bitcoin networks are adoping the EVM aka Ethereum Virtual Machine they will have "EVM" style tokens, aka ERC20, ERC721, etc will have unique programmability capabilities. These tokens will be more of "Smart Bitcoin Tokens" compared to the existing BRC20 tokens which are made to be very simple and non programmable.  The Smart Bitcoin Tokens will need to have a new identity.  And let's face it, "B"RC20 is already taken so we wanted to define them as what they are, Smart Bitcoin Tokens or SBTs.  The term maybe inspired in branding is actually very discriptive of this new asset class that is starting to mature in Bitcoin.

### Smart Bitcoin Tokens:
SBTs differ from BRC Tokens and ERC Tokens in sometimes suddle but important ways. For example:
SBTs can be minted from a Smart Contract without the need for them to be demoniated in Sats Like BRC tokens.
SBTs are a new Smart Token class that is directly on top of Bitcoin, the most decentralized and secure blockchain unlike ERC tokens which are on ETH POS Chain [No Shade there, I am an etherean :]
SBTs have many different forms fungible, nonfungible, hybrid, dynamic, recursive, and more.
SBTs have native staking capabilities on VMs (Virtual Machines) on Bitcoin.
SBTs are wildly programmable unlike BRC and other Meta tokens on Bitcoin currently.
SBTs offer a new path for creators and projects to launch tokens with sofisticated functions such as presales, vesting, voting, and others.
SBTs are completely permissionless and on-chain. No need for external indexers.

SBTs generally work very similarily to ERC tokens on ETH. Using token case studies from the ETH Defi narratives we've adopted some examples here:[under construction]

## SBT-20 TOKEN STANDARD

## INTRODUCTION

What is a Token? Tokens can represent virtually anything in Bitcoin: reputation points in an online platform skills of a character in a game lottery tickets financial assets like a share in a company a fiat currency like USD an ounce of gold and more... Such a powerful feature of Bitcoin must be handled by a robust standard, right? That's exactly where the SBT-20 plays its role! This standard allows developers to build smart token applications that are interoperable with other products and services in the Bitcoin Network

## What is SBT-20?

The SBT-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes each Token be exactly the same (in type and value) as another Token. Meaning 1 Token is and will always be equal to all the other Tokens.

## PREREQUISITES

- [Account](https://ethereum.org/en/developers/docs/accounts/)
- [Smart Contracts](https://ethereum.org/en/developers/docs/smart-contracts/)
- [Token standards](https://ethereum.org/en/developers/docs/standards/tokens/)

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
```

### EVENTS
```solidity
event Transfer(address indexed _from, address indexed _to, uint256 _value)
event Approval(address indexed _owner, address indexed _spender, uint256 _value)
```

### Interface
Let's see how a Standard is so important to make things simple for us to inspect any SBT-20 Token Contract on Bitcoin. We just need the Contract Application Binary Interface (ABI) to create an interface to any SBT-20 Token. As you can see below we will use a simplified ABI, to make it a low friction example.

#### First install Web3.py
```py
pip install web3.py
```

#### Web3.py Example
```py
from web3 import Web3


w3 = Web3(Web3.HTTPProvider("https://cloudflare-eth.com")) [NEEDS TO BE UPDATED WITH https://cloudflare-btc.com"]

dai_token_addr = "0x6B175474E89094C44Da98b954EedeAC495271d0F"     # STABLE
weth_token_addr = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"    # Wrapped

acc_address = "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11"        # AVOSWAP V2: STABLE 2

# This is a simplified Contract Application Binary Interface (ABI) of an ERC-20 Token Contract.
# It will expose only the methods: balanceOf(address), decimals(), symbol() and totalSupply()
simplified_abi = [
    {
        'inputs': [{'internalType': 'address', 'name': 'account', 'type': 'address'}],
        'name': 'balanceOf',
        'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
        'stateMutability': 'view', 'type': 'function', 'constant': True
    },
    {
        'inputs': [],
        'name': 'decimals',
        'outputs': [{'internalType': 'uint8', 'name': '', 'type': 'uint8'}],
        'stateMutability': 'view', 'type': 'function', 'constant': True
    },
    {
        'inputs': [],
        'name': 'symbol',
        'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}],
        'stateMutability': 'view', 'type': 'function', 'constant': True
    },
    {
        'inputs': [],
        'name': 'totalSupply',
        'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
        'stateMutability': 'view', 'type': 'function', 'constant': True
    }
]

dai_contract = w3.eth.contract(address=w3.to_checksum_address(dai_token_addr), abi=simplified_abi)
symbol = dai_contract.functions.symbol().call()
decimals = dai_contract.functions.decimals().call()
totalSupply = dai_contract.functions.totalSupply().call() / 10**decimals
addr_balance = dai_contract.functions.balanceOf(acc_address).call() / 10**decimals

#  STABLE
print("===== %s =====" % symbol)
print("Total Supply:", totalSupply)
print("Addr Balance:", addr_balance)

weth_contract = w3.eth.contract(address=w3.to_checksum_address(weth_token_addr), abi=simplified_abi)
symbol = weth_contract.functions.symbol().call()
decimals = weth_contract.functions.decimals().call()
totalSupply = weth_contract.functions.totalSupply().call() / 10**decimals
addr_balance = weth_contract.functions.balanceOf(acc_address).call() / 10**decimals

#  WRAPPED
print("===== %s =====" % symbol)
print("Total Supply:", totalSupply)
print("Addr Balance:", addr_balance)
```

### Implementation Examples
- [OpenZeppelin](https://docs.openzeppelin.com/contracts/3.x/erc20)

#### SBT-20 Token in Solidity
```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Silk {
    string public name = "@SmartBitcoin.cc";
    string public symbol = "SBT";
    string public standard = "Smart Bitcoin Token 0.5";
    uint256 public totalSupply;
    address public ownerOfContract;
    uint256 public _userId;

    uint256 constant initialSupply = 1000000 * (10**18);

    address[] public holderToken;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    mapping(address => TokenHolderInfo) public tokenHolderInfos;

    struct TokenHolderInfo {
        uint256 _tokenId;
        address _from;
        address _to;
        uint256 _totalToken;
        bool _tokenHolder;
    }

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor() {
        ownerOfContract = msg.sender;
        balanceOf[msg.sender] = initialSupply;
        totalSupply = initialSupply;
    }

    function inc() internal {
        _userId++;
    }

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        require(balanceOf[msg.sender] >= _value);
        inc();

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        TokenHolderInfo storage tokenHolderInfo = tokenHolderInfos[_to];

        tokenHolderInfo._to = _to;
        tokenHolderInfo._from = msg.sender;
        tokenHolderInfo._totalToken = _value;
        tokenHolderInfo._tokenHolder = true;
        tokenHolderInfo._tokenId = _userId;

        holderToken.push(_to);

        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    function approve(address _spender, uint256 _value)
        public
        returns (bool success)
    {
        allowance[msg.sender][_spender] = _value;

        emit Approval(msg.sender, _spender, _value);

        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;

        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, _value);

        return true;
    }

    function getTokenHolderData(address _address)
        public
        view
        returns (
            uint256,
            address,
            address,
            uint256,
            bool
        )
    {
        return (
            tokenHolderInfos[_address]._tokenId,
            tokenHolderInfos[_address]._to,
            tokenHolderInfos[_address]._from,
            tokenHolderInfos[_address]._totalToken,
            tokenHolderInfos[_address]._tokenHolder
        );
    }

    function getTokenHolder() public view returns (address[] memory) {
        return holderToken;
    }
}
```
### Coming Soon:
SBT721, SBT1155, SBT404
Tooling and web3/eth packages reconstruction
Creating BIPs system in Repo.
MEV in VM networks on Bitcoin
Scaling VM networks on Bitcoin
Virtual Machines on Bitcoin Usecases

###  History:
Historical links related to this standard and the inspiration for it:

[https://bitcoin.org/en/bitcoin-paper](https://bitcoinpaper.org/bitcoin.pdf)
https://github.com/bitcoin/bips
Original proposal from Vitalik Buterin: https://github.com/ethereum/wiki/wiki/Standardized_Contract_APIs/499c882f3ec123537fc2fccd57eaa29e6032fe4a
Reddit discussion: https://www.reddit.com/r/ethereum/comments/3n8fkn/lets_talk_about_the_coin_standard/
Original Issue #20: https://github.com/ethereum/EIPs/issues/20

### Copyright:
Copyright and related rights waived via CC0.

### Citations:

Fabian Vogelsteller <fabian@ethereum.org>, Vitalik Buterin <vitalik.buterin@ethereum.org>, "ERC-20: Token Standard," Ethereum Improvement Proposals, no. 20, November 2015. [Online serial]. Available: https://eips.ethereum.org/EIPS/eip-20, Ryda Almogtaba <admin@pickslabs.xyz>, "SBT-20: Token Standard," Smart Bitcoin Improvement Proposals No. 20, March 2023. [Online serial]. Available: https://www.smartbitcoin.cc



