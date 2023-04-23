// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    // Solidity Basics Types: boolean, uint, int, address, bytes
    uint256 favoriteNumber;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    // View: Doesn't cost gas!!, Doesn't change the variable states.
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }
}
