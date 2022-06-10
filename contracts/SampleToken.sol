// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract SampleToken is ERC20 {
    constructor(uint256 totalSupply) ERC20("sampleToken", "SAMP") {
        _mint(msg.sender, totalSupply);
    }

    function decimals() public view virtual override returns (uint8) {
        return 16;
    }
}

