//  6.52.57 minutes seconds'
// ganache RPC URL
// http://127.0.0.1:8545

const ethers = require("ethers");
const fs = require("fs-extra");
async function main(){

    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    const wallet = new ethers.Wallet(
        "b5967021650d028c642d5499b3169396ee809292f14e01df6c29eef698097e78",
        provider
    ); 
    const abi = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.abi", 
        "utf8"
    );
    
}


main()
    .then(()=> process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

