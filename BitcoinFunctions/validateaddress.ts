// yarn add @tatumio/tatum

import { TatumSDK, Bitcoin, Network } from '@tatumio/tatum'

const tatum = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN})

const result = await tatum.rpc.validateAddress("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa")

await tatum.destroy() // Destroy Tatum SDK - needed for stopping background jobs