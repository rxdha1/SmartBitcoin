import { TatumSDK, Network, Bitcoin } from '@tatumio/tatum'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const tatum = await TatumSDK.init<Bitcoin>({
  network: Network.BITCOIN,
  apiKey: {
    v4: process.env.TESTNET_API_KEY,
  },
});

const subscription = await tatum.notification.subscribe.addressEvent({
  address: '1FWQiwK27EnGXb6BiBMRLJvunJQZZPMcGd',
  url: 'https://webhook.site/0b6c2f1a-8f7f-4f0a-8e9a-0e8f5c5f2f2a',
})
await tatum.destroy()