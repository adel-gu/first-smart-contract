// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FundMe {
    uint256 public minUsd = 50;

    function fund() public payable {
        require(msg.value > minUsd, "Didn't send enough eth!");
    }

    function getPrice() public view returns (int256) {
        address sepoliaNet = 0x694AA1769357215DE4FAC081bf1f309aDC325306;
        AggregatorV3Interface priceFeed = AggregatorV3Interface(sepoliaNet);
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return price;
    }
}
