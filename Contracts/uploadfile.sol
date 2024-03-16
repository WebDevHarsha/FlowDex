//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;
/**
 * @title ContractName
 * @dev ContractDescription
 * @custom:dev-run-script scripts/deploy_with_ethers.ts
 */
contract fileStorage {
    struct File {
        address owner;
        string fileHash;
    }
    mapping(uint256 => File) public files;
    uint256 public fileCount;
    event fileUploaded(address indexed owner, uint256 fileId, string fileHash);
    function uploadFile(string calldata _fileHash) external {
        require(bytes(_fileHash).length > 0, "Invalid file hash");
        fileCount++;
        files[fileCount] = File(msg.sender, _fileHash);
        emit fileUploaded(msg.sender, fileCount, _fileHash);
    }
    function getFile(
        uint256 _fileId
    ) external view returns (address, string calldata) {
        require(_fileId > 0 && _fileId <= fileCount, "Invalid file ID");
        File calldata file = files[_fileId];
        return (file.owner, file.fileHash);
    }
    function getfileowner(uint256 _fileId) external view returns (address) {
        require(_fileId > 0 && _fileId <= fileCount, "Invalid File ID");
        return files[_fileId].owner;
    }
    modifier onlyOwner(uint256 _fileId) {
        require(files[_fileId].owner == msg.sender, "You're not the owner");
        _;
    }
    function getFileHash(
        uint256 _fileId
    ) external view onlyOwner(_fileId) returns (string calldata) {
        return files[_fileId].fileHash;
    }
}
