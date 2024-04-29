// yarn add @tatumio/tatum
import { TatumSDK, Network, Polygon, ResponseDto, FungibleTokenBalance, Bitcoin } from '@tatumio/tatum';
'@tatumio/tatum'
import { readFileSync } from 'fs'

const tatumClient = await TatumSDK.init<Bitcoin>({
      network: Network.BITCOIN,
      verbose: true,
      apiKey: {
        v4: process.env.TESTNET_API_KEY,
      },
    })

const buffer = readFileSync('/path/to/file/file.jpg')

const result = await tatumClient.ipfs.uploadFile({ file: buffer })
console.log(JSON.stringify(result))

await tatum.destroy();

interface UploadFileDetails {
    /**
     * The file is to be uploaded in binary format.
     */
    file: Buffer
  }

  interface ResponseDto<T> {
    /**
     * Actual payload of the response.
     */
    data: T
    /**
     * Status of the response.
     */
    status: Status
    /**
     * In case of ERROR status, this field contains the error message and detailed description.
     */
    error?: ErrorWithMessage
  }
  
  interface IPFSUploadResponse {
    /**
     * The unique CID (Content Identifier) associated with the uploaded file.
     */
    ipfsHash: string
  }