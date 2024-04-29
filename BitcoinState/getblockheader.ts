// yarn add @tatumio/tatum

import { TatumSDK, Bitcoin, Network } from '@tatumio/tatum'

const tatum = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN})

const result = await tatum.rpc.getBlockHeader("0000000000000000001b4fedbfb3672963c37f965686c2bf6350e32e77f9941f", true)

await tatum.destroy() // Destroy Tatum SDK - needed for stopping background jobs