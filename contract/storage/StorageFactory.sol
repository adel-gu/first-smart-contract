// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./SimpleStorage.sol";

contract StorageFacotry {
    SimpleStorage[] public simpleStorageArray;

    function createSimpleStorage() public {
        SimpleStorage simpleStorage = new SimpleStorage();
        simpleStorageArray.push(simpleStorage);
    }

    function sfStore(
        uint256 _simpleStorageIndex,
        uint256 _favoriteNumber
    ) public {
        SimpleStorage simpleStorage = simpleStorageArray[_simpleStorageIndex];
        simpleStorage.store(_favoriteNumber);
    }
}
