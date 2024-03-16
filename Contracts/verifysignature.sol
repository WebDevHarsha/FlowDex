//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;
/* @title ContractName
 * @dev ContractDescription
 * @custom:dev-run-script scripts/deploy_with_ethers.ts
 */
contract signverif {
    function versig(
        bytes32 messageHash,
        uint8 v,
        bytes32 r,
        bytes32 s,
        address signer
    ) external pure returns (bool) {
        require(messageHash != bytes32(0), "Invalid Hash");
        require(v > 0 && v < 28, "Invalid v value");
        require(r != bytes32(0), "Invalid r value");
        require(s != bytes32(0), "Invali s value");
        address recsigner = ecrecover(messageHash, v, r, s);
        return recsigner == signer;
    }
    function hashMessage(
        string calldata message
    ) external pure returns (bytes32) {
        require(bytes(message).length > 0, "Message cannot be empty");
        return sha256(abi.encodePacked(message));
    }
}
