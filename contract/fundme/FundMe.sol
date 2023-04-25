// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FundMe {
    uint256 public minUsd = 50 * 1e18;
    address[] funders;
    mapping(address => uint256) public addressToAmountfunded;

    function fund() public payable {
        require(
            getConversionRate(msg.value) > minUsd,
            "Didn't send enough eth!"
        );
        funders.push(msg.sender);
        addressToAmountfunded[msg.sender] = msg.value;
    }

    function getPrice() internal view returns (uint256) {
        address sepoliaNet = 0x694AA1769357215DE4FAC081bf1f309aDC325306;
        AggregatorV3Interface priceFeed = AggregatorV3Interface(sepoliaNet);
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return uint256(price * 1e18);
    }

    function getConversionRate(
        uint256 _ethAmount
    ) internal view returns (uint256) {
        uint256 ethPrice = getPrice();
        uint256 ethAmountToUsd = (ethPrice * _ethAmount) / 1e18;
        return ethAmountToUsd;
    }
}
