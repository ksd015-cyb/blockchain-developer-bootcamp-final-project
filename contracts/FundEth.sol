// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FundEth {
  /*constructor() public {
  }
  */
  // string calldata public title; 
  // string calldata public description;
  // uint public targetAmount; 
  // uint public duration;
  uint public currentAmount;

 

  // function  startCampaign (
  //   string calldata _title, 

  //   string calldata description,
  //   uint targetAmount, 
  //   uint duration) public {

    // take title of campaign, description, with targetAmount and duration for the campaign


  // }

  function contribute(uint x) external payable{
    //contribute to campaign
    currentAmount=x;
  }

  function getInfo() public view returns (uint){
    // gets detailed information about the campaign
    return currentAmount;
  }






}
