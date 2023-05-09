/*
 * @LastEditors: Bot80926
 * @LastEditTime: 2023-05-10 00:26:52
 * Copyright (c) 2023 by Bot80926, All Rights Reserved.
 */

const ethers = require('ethers');

const main = async () => {

  console.log('方法一 output = ', ethers.utils.id('balanceOf(address)') + '\n')

  let textToUtf8Bytes = ethers.utils.toUtf8Bytes('balanceOf(address)')

  console.log('textToUtf8Bytes =', textToUtf8Bytes + '\n')

  console.log('方法二 output = ', ethers.utils.keccak256(textToUtf8Bytes) + '\n')

  console.log('反解 textToUtf8Bytes = ', ethers.utils.toUtf8String(textToUtf8Bytes))

}

main()
