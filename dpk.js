const crypto = require("crypto");

exports.deterministicPartitionKey = (input) => {
  const defaultKey = "0"
  const maxKeyLength = 256
  let hashKey

  console.log(`hashkey = ${hashKey}`)
  
  if (input) {
    const data = JSON.stringify(input)
    hashKey = crypto.createHash("sha3-512").update(data).digest("hex")

    if(hashKey.length > maxKeyLength){
      candidate = crypto.createHash("sha3-512").update(hashKey).digest("hex");
    }
  }else{
    hashKey = defaultKey
  }

  return hashKey
};