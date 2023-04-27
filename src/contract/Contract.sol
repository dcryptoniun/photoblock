// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract photoblock {
    struct UserInfo {
        string username;
        string[] cidArray;
    }

    mapping (address => UserInfo) private userMap;

    function setUsername(string memory _username) public {
        UserInfo storage userInfo = userMap[msg.sender];
        userInfo.username = _username;
    }

    function addCID(string memory _cid) public {
        UserInfo storage userInfo = userMap[msg.sender];
        userInfo.cidArray.push(_cid);
    }

    function getUsername() public view returns (string memory) {
        return userMap[msg.sender].username;
    }

    function getCIDs() public view returns (string[] memory) {
        return userMap[msg.sender].cidArray;
    }
}
