var bitcoin = 

function getIdx(nUTXO) {
    var maxUnspents = bitcoin.smileycoin.maxUnspents
  
  }
// new bitcoin.TransactionBuilder(network)  
function newBuilder(to, unspents, builder) {

    var value = 0
    unspents.forEach(function(unspent) {
        builder.addInput(unspent.txId, unspent.vout)
        builder.sign(i, that.getPrivateKeyForAddress(unspent.address))
        value += unspent.value
    })
    builder.addOutput(to, value)
    return builder
}
  
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function argmax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}