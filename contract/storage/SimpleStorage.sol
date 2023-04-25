// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./types.sol";

contract SimpleStorage {
    // Solidity Basics Types: boolean, uint, int, address, bytes
    uint256 favoriteNumber;
    People[] public people;

    // Mapping Types
    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    // View: Doesn't cost gas!!, Doesn't change the variable states.
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        People memory person = People(_favoriteNumber, _name);
        people.push(person);
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}
