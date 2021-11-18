var FundEth = artifacts.require("./FundEth.sol");

module.exports = function (deployer) {
  deployer.deploy(FundEth,0);
};
