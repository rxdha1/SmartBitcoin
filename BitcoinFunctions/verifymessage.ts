// yarn add @tatumio/tatum

import { TatumSDK, Bitcoin, Network } from '@tatumio/tatum'

const tatum = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN})

const result = await tatum.rpc.verifyMessage( "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", "HxK7Mw0K6Uox7iGcOe9v9Ll+OZzG7TjTkeTJCD7VHw4yKP4O4a4gFtgm9XNmxfH1tK7JRgYrP/+20xP/ek8iQ2E=", "Hello, this is a signed message.")

await tatum.destroy() // Destroy Tatum SDK - needed for stopping background jobs