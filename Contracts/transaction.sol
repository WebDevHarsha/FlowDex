// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
/**
 * @title ContractName
 * @dev ContractDescription
 * @custom:dev-run-script scripts/deploy_with_ethers.ts
 */
contract SimpleTransaction {
    address public partyA;
    address public partyB;
    uint256 public amount;
    bool private locked;

    modifier reentracy() {
        require(!locked, "No Re-entrancy");
        locked = true;
        _;
        locked = false;
    }

    constructor(address _partyB) payable {
        partyA = msg.sender;
        partyB = _partyB;
        amount = msg.value;
    }

    function transfer() external {
        require(msg.sender == partyA, "Only partyA can initiate the transfer");
        require(
            address(this).balance >= amount,
            "Insufficient balance in contract"
        );

        payable(partyB).transfer(amount);
    }

    receive() external payable {}
}
