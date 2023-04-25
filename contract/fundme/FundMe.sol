// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256;

    uint256 public minUsd = 50 * 1e18;
    address[] funders;
    mapping(address => uint256) public addressToAmountfunded;

    function fund() public payable {
        require(
            msg.value.PriceConverter() >= minUsd,
            "Didn't send enough eth!"
        );
        funders.push(msg.sender);
        addressToAmountfunded[msg.sender] = msg.value;
    }
}
