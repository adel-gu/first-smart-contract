// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256;

    // min fund allowed
    uint256 public minUsd = 50 * 1e18;

    // Funders, and the mapping to the amount funded by funders.
    address[] funders;
    mapping(address => uint256) public addressToAmountfunded;

    // Sending value ==> amount of funding by who ever is calling the fund().
    function fund() public payable {
        require(
            msg.value.PriceConverter() >= minUsd,
            "Didn't send enough eth!"
        );
        funders.push(msg.sender);
        addressToAmountfunded[msg.sender] = msg.value;
    }

    // withdraw method
    function withdraw() public {
        // Reset the mapping
        for (
            uint256 funderIndex = 0;
            funderIndex < funders.length;
            funderIndex++
        ) {
            address funder = funders[funderIndex];
            addressToAmountfunded[funder] = 0;
        }

        // Reset the funders array
        funders = new address[](0);

        (bool callSuccess, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(callSuccess, "Withdra failed!");
    }
}
