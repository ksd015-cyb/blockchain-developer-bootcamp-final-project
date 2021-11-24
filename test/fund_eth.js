
//require artifacts
const FundEth = artifacts.require("FundEth");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */


contract("FundEth", function ( accounts ) {
  it("should assert true", async function () {
    await FundEth.deployed();
    return assert.isTrue(true);
  });


//syntax: behaviour we are testing for  
//it being the contract
//async is a js keyword
it("has an initial value of 0", async () => {
  
  //get the contact that has been deployed
  const ssInstance = await FundEth.deployed();
  // this is getting new reference of the Instance


//verify 'it' has an initial value of 0

  const storedData = await ssInstance.getInfo.call();
  //using equal method
  //storedData should equal 0, and if it does not
  // give error message

  //assert is chai part
  assert.equal(storedData,0,"Initial state should be 0");
});

//describe is a method from Mocha to gather different test for different things, below is testing Functionality
describe("Functionality", () => {
  it("should store a new value 2", async () => {

    //grab the contract
    const ssInstance = await FundEth.deployed();
    //const setExpected = 2;

    //change the number
    await ssInstance.contribute(2, {from: accounts [0] });

    const storedData = await ssInstance.getInfo.call();
    
    assert.equal(storedData,2, '2 was not stored!')
    //note backticks `` not quotes '' when you pass variables
  });
});

});
