const { expect, assert } = require('chai');
const { ethers } = require('hardhat');

describe('SimpleStorage', () => {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory('SimpleStorage');
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it('Should start with favorite number of 0', async () => {
    const currentValue = await simpleStorage.retrieve();
    const expectedvalue = '0';
    assert.equal(currentValue.toString(), expectedvalue);
  });

  it('Should update favorite number when store is called', async () => {
    const expectedvalue = '7';
    await simpleStorage.store(expectedvalue);
    const UpdatedtValue = await simpleStorage.retrieve();
    assert.equal(UpdatedtValue.toString(), expectedvalue);
  });
});
