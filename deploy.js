//  6.52.57 minutes seconds'
// ganache RPC URL
// http://127.0.0.1:8545

const ethers = require("ethers");
const fs = require("fs-extra");
async function main(){

    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    
}


main()
    .then(()=> process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

