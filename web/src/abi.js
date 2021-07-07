module.exports = {
    erc20ABI: [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
    hydroABI: [{"constant":false,"inputs":[{"name":"delegate","type":"address"}],"name":"approveDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"orderHash","type":"bytes32"}],"name":"isOrderCancelled","outputs":[{"name":"isCancelled","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"marketID","type":"uint16"}],"name":"isAccountLiquidatable","outputs":[{"name":"isLiquidatable","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"asset","type":"address"}],"name":"getPoolCashableAmount","outputs":[{"name":"cashableAmount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"marketID","type":"uint16"}],"name":"getMarket","outputs":[{"components":[{"name":"baseAsset","type":"address"},{"name":"quoteAsset","type":"address"},{"name":"liquidateRate","type":"uint256"},{"name":"withdrawRate","type":"uint256"},{"name":"auctionRatioStart","type":"uint256"},{"name":"auctionRatioPerBlock","type":"uint256"},{"name":"borrowEnable","type":"bool"}],"name":"market","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"marketID","type":"uint16"}],"name":"liquidateAccount","outputs":[{"name":"hasAuction","type":"bool"},{"name":"auctionID","type":"uint32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"marketID","type":"uint16"},{"name":"asset","type":"address"},{"name":"user","type":"address"}],"name":"getMarketTransferableAmount","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"marketID","type":"uint16"},{"name":"newAuctionRatioStart","type":"uint256"},{"name":"newAuctionRatioPerBlock","type":"uint256"},{"name":"newLiquidateRate","type":"uint256"},{"name":"newWithdrawRate","type":"uint256"}],"name":"updateMarket","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"auctionID","type":"uint32"},{"name":"amount","type":"uint256"}],"name":"fillAuctionWithAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"auctionID","type":"uint32"}],"name":"getAuctionDetails","outputs":[{"components":[{"name":"borrower","type":"address"},{"name":"marketID","type":"uint16"},{"name":"debtAsset","type":"address"},{"name":"collateralAsset","type":"address"},{"name":"leftDebtAmount","type":"uint256"},{"name":"leftCollateralAmount","type":"uint256"},{"name":"ratio","type":"uint256"},{"name":"price","type":"uint256"},{"name":"finished","type":"bool"}],"name":"details","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"assetAddress","type":"address"}],"name":"getAsset","outputs":[{"components":[{"name":"lendingPoolToken","type":"address"},{"name":"priceOracle","type":"address"},{"name":"interestModel","type":"address"}],"name":"asset","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"asset","type":"address"},{"name":"user","type":"address"}],"name":"getAmountSupplied","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getHydroTokenAddress","outputs":[{"name":"hydroTokenAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exitIncentiveSystem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"asset","type":"address"},{"name":"oracleAddress","type":"address"},{"name":"interestModelAddress","type":"address"},{"name":"poolTokenName","type":"string"},{"name":"poolTokenSymbol","type":"string"},{"name":"poolTokenDecimals","type":"uint8"}],"name":"createAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"relayer","type":"address"}],"name":"canMatchOrdersFrom","outputs":[{"name":"canMatch","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"asset","type":"address"},{"name":"extraBorrowAmount","type":"uint256"}],"name":"getInterestRates","outputs":[{"name":"borrowInterestRate","type":"uint256"},{"name":"supplyInterestRate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getDiscountedRate","outputs":[{"name":"rate","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"marketID","type":"uint16"}],"name":"getAccountDetails","outputs":[{"components":[{"name":"liquidatable","type":"bool"},{"name":"status","type":"uint8"},{"name":"debtsTotalUSDValue","type":"uint256"},{"name":"balancesTotalUSDValue","type":"uint256"}],"name":"details","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"orderHash","type":"bytes32"}],"name":"getOrderFilledAmount","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentAuctions","outputs":[{"name":"","type":"uint32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"assetAddress","type":"address"}],"name":"getAssetOraclePrice","outputs":[{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"asset","type":"address"}],"name":"getInsuranceBalance","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"asset","type":"address"}],"name":"getTotalSupply","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"asset","type":"address"},{"name":"oracleAddress","type":"address"},{"name":"interestModelAddress","type":"address"}],"name":"updateAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"},{"name":"signerAddress","type":"address"},{"components":[{"name":"config","type":"bytes32"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"signature","type":"tuple"}],"name":"isValidSignature","outputs":[{"name":"isValid","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"actionType","type":"uint8"},{"name":"encodedParams","type":"bytes"}],"name":"actions","type":"tuple[]"}],"name":"batch","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"asset","type":"address"}],"name":"getTotalBorrow","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"baseAsset","type":"address"},{"name":"quoteAsset","type":"address"},{"name":"liquidateRate","type":"uint256"},{"name":"withdrawRate","type":"uint256"},{"name":"auctionRatioStart","type":"uint256"},{"name":"auctionRatioPerBlock","type":"uint256"},{"name":"borrowEnable","type":"bool"}],"name":"market","type":"tuple"}],"name":"createMarket","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"asset","type":"address"},{"name":"user","type":"address"},{"name":"marketID","type":"uint16"}],"name":"getAmountBorrowed","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"relayer","type":"address"}],"name":"isParticipant","outputs":[{"name":"result","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllMarketsCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"components":[{"name":"trader","type":"address"},{"name":"baseAssetAmount","type":"uint256"},{"name":"quoteAssetAmount","type":"uint256"},{"name":"gasTokenAmount","type":"uint256"},{"name":"data","type":"bytes32"},{"components":[{"name":"config","type":"bytes32"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"signature","type":"tuple"}],"name":"takerOrderParam","type":"tuple"},{"components":[{"name":"trader","type":"address"},{"name":"baseAssetAmount","type":"uint256"},{"name":"quoteAssetAmount","type":"uint256"},{"name":"gasTokenAmount","type":"uint256"},{"name":"data","type":"bytes32"},{"components":[{"name":"config","type":"bytes32"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"signature","type":"tuple"}],"name":"makerOrderParams","type":"tuple[]"},{"name":"baseAssetFilledAmounts","type":"uint256[]"},{"components":[{"name":"baseAsset","type":"address"},{"name":"quoteAsset","type":"address"},{"name":"relayer","type":"address"}],"name":"orderAddressSet","type":"tuple"}],"name":"params","type":"tuple"}],"name":"matchOrders","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newInitiatorRewardRatio","type":"uint256"}],"name":"updateAuctionInitiatorRewardRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"asset","type":"address"}],"name":"getIndex","outputs":[{"name":"supplyIndex","type":"uint256"},{"name":"borrowIndex","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"name":"trader","type":"address"},{"name":"relayer","type":"address"},{"name":"baseAsset","type":"address"},{"name":"quoteAsset","type":"address"},{"name":"baseAssetAmount","type":"uint256"},{"name":"quoteAssetAmount","type":"uint256"},{"name":"gasTokenAmount","type":"uint256"},{"name":"data","type":"bytes32"}],"name":"order","type":"tuple"}],"name":"cancelOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"joinIncentiveSystem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newInsuranceRatio","type":"uint256"}],"name":"updateInsuranceRatio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newConfig","type":"bytes32"}],"name":"updateDiscountConfig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"marketID","type":"uint16"},{"name":"usability","type":"bool"}],"name":"setMarketBorrowUsability","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAuctionsCount","outputs":[{"name":"count","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"marketID","type":"uint16"},{"name":"asset","type":"address"},{"name":"user","type":"address"}],"name":"marketBalanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"asset","type":"address"},{"name":"user","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"delegate","type":"address"}],"name":"revokeDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_hotTokenAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
}