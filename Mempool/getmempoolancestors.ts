// yarn add @tatumio/tatum

import { TatumSDK, Bitcoin, Network } from '@tatumio/tatum'

const tatum = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN})

const result = await tatum.rpc.getMempoolAncestors("3b3c3bc559deddb0991e1fe9fb6d9f10c1c4a0dab4a18c12e8566b37ad4f06e4")

await tatum.destroy() // Destroy Tatum SDK - needed for stopping background jobs