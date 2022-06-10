var SampleToken = artifacts.require("SampleToken.sol");

module.exports = async function(deployer) {
    await deployer.deploy(SampleToken, 1000000000000);
}