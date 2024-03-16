//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;
/**
 * @title ContractName
 * @dev ContractDescription
 * @custom:dev-run-script scripts/deploy_with_ethers.ts
 */
contract royaltydist {
    address public platformOwner;
    mapping(address => uint256) public royalauth;
    event royaltypaid(address indexed author, uint256 amount);
    constructor() {
        platformOwner = msg.sender;
    }
    function distroyalties(
        address[] calldata authors,
        uint256[] calldata amounts
    ) external {
        require(
            msg.sender == platformOwner,
            "Only Platform Owner can distribute royalties"
        );
        require(authors.length == amounts.length, "Arrays length mismatch");
        for (uint i = 0; i < amounts.length; i++) {
            royalauth[authors[i]] += amounts[i];
            emit royaltypaid(authors[i], amounts[i]);
        }
    }
}
