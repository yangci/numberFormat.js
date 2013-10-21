/**
 * numberFormat.js
 * https://github.com/yangci/numberFormat.js
 * 
 * Copyright (c) 2013 KLIP LLC
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @Author: Yoji Itoh (yoji.itoh@klip.co.jp)
 * @Version: 1.0.1
 **/

Object.prototype.numberFormat = function() {
	return this.toString().replace(/([0-9]+?)(?=(?:[0-9]{3})+$)/g, '$1,');
}

Object.prototype.zeroFill = function(digit) {
	return (Array(digit).join('0') + this).slice(-digit);
}
