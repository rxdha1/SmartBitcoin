// yarn add @tatumio/tatum

import { TatumSDK, Bitcoin, Network } from '@tatumio/tatum'

const tatum = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN})

const result = await tatum.rpc.getTxOutProof(["c7ad51e46a39d136adc2bb7536a236136cc206ab3c8dabcd4277d4cadcf674f2"], "00000000000000000004c6125026f00b76e7b762e645a0b0b7ecfa7a7dafdba2")

await tatum.destroy() // Destroy Tatum SDK - needed for stopping background jobs