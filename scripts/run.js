const main = async () => {
    const [owner, randomPerson ] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to :",waveContract.address);
    console.log("Contract deployed to :", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait()

    waveCount = await waveContract.getTotalWaves();
}

const runMain = async () => {
    try {
        await main();
        process.exit(0); // * IT will exit the node process without error 
    } catch (error) {
        console.log(error);
        process.exit(1); // * Exit the node process with "Uncaught fatal error"
    }
    
};

runMain();