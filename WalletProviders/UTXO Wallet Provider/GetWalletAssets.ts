// yarn add @tatumcom/js
import {TatumSDK, Network, Bitcoin, ResponseDto, AddressBalance} from '@tatumio/tatum'

const tatum = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN})

const balance: ResponseDto<AddressBalance[]> = await tatum.address.getBalance({
  addresses: ['bc1q7zw9ax8tm4jk2k2674u6lcd9fwjut8kqtvfeg8'], // replace with your address
})

console.log(balance.data)

// Expected outcome
// [{
//     asset: 'BTC',
//     address: 'bc1q7zw9ax8tm4jk2k2674u6lcd9fwjut8kqtvfeg8',
//     decimals: 8,
//     balance: '0.001',
//     type: 'native',
// }]