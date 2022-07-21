const { balanceOf } = require('@algo-builder/algob');
const { types } = require("@algo-builder/web");

async function run(runtime, deployer) {
  // query gold ASA from deployer (using checkpoint information),
  const goldAsset = deployer.asa.get('gold')
  if (goldAsset === undefined) {
    console.error("Gold was not deployed. You must run `algob deploy` first.")
    return
  }

  // query accounts from config
  const john = deployer.accountsByName.get('john');
  const goldOwner = deployer.accountsByName.get('alice');

  // execute asset transfer transaction
  await deployer.executeTx([{
    type: types.TransactionType.TransferAsset,
    sign: types.SignType.SecretKey,
    fromAccount: goldOwner,
    toAccountAddr: john.addr,
    amount: 1,
    assetID: goldAsset.assetIndex,
    payFlags: {}
  }]);

  await balanceOf(deployer, john.addr, goldAsset.assetIndex);
}

module.exports = { default: run };
