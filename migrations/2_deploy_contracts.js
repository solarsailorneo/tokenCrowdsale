var SampleToken = artifacts.require("SampleToken.sol");
var SampleTokenSale = artifacts.require("SampleTokenSale.sol");


module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(SampleToken, 1000000000000);
    await deployer.deploy(SampleTokenSale, 1, addr[0], SampleToken.address);
    let instance = await SampleToken.deployed();
    await instance.transfer(SampleTokenSale.address, 1000000000000);
}