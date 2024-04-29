import { TatumSDK, Network } from "@tatumio/tatum";

const addButton = document.getElementById("add-input");
const fetchButton = document.getElementById("fetch-rates");
const inputContainer = document.getElementById("input-container");
const ratesContainer = document.getElementById('rates-container');

addButton.addEventListener("click", () => {
    const newInputSet = document.createElement('div');
    newInputSet.className = 'input-set';
    newInputSet.innerHTML = `
        <input type="text" class="currency" placeholder="Enter currency (e.g. BTC)" />
        <input type="text" class="base-pair" placeholder="Enter base pair (e.g. EUR)" />
    `;
    inputContainer.appendChild(newInputSet);
});

fetchButton.addEventListener("click", async () => {
  const tatum = await TatumSDK.init({ network: Network.ETHEREUM });
  const inputs = Array.from(document.getElementsByClassName('input-set'));
  const ratesBatch = inputs.map((input, index) => {
      return {
          currency: input.getElementsByClassName('currency')[0].value,
          basePair: input.getElementsByClassName('base-pair')[0].value,
          batchId: `${index}`
      };
  });
  const rates = await tatum.rates.getCurrentRateBatch(ratesBatch);
  
  console.log(rates.data);

  // Remove previous entries
  ratesContainer.innerHTML = '';

  // Display the exchange rates
  rates.data.forEach(rate => {
    const rateInfo = document.createElement('p');
    rateInfo.textContent = `1 ${rate.id} = ${rate.value} ${rate.basePair}`;
    
    // Append the rateInfo to the rateContainer
    ratesContainer.appendChild(rateInfo);
  });
});