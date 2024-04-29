// yarn add @tatumcom/js
import {TatumSDK, Network, Bitcoin, ResponseDto, AddressTransaction} from '@tatumio/tatum'

const tatum = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN})

const balance: ResponseDto<AddressTransaction[]> = await tatum.address.getTransactions({
  address: 'tb1qrd9jz8ksy3qqm400vt296udlvk89z96p443mv0', // replace with your address
})

console.log(balance.data)

/// Expected outcome
// [{
//    address: 'tb1qrd9jz8ksy3qqm400vt296udlvk89z96p443mv0',
//    amount: '0.001',
//    blockNumber: 2427655,
//    chain: 'bitcoin-testnet',
//    hash: '954b246cdebf7338f561e2fdfb869fedd75302e2b233f339639b36d880e9c983',
//    timestamp: 1680779879,
//    transactionType: 'incoming',
//  }]