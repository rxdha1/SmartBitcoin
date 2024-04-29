// yarn add @tatumio/tatum

import { TatumSDK, Bitcoin, Network } from '@tatumio/tatum'

const tatum = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN})

const result = await tatum.rpc.getBlock('000000000000000000013d0a85b72c591500abe074a7f9175c596a194f67b82d')

await tatum.destroy() // Destroy Tatum SDK - needed for stopping background jobs