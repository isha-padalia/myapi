const dev = {
    
    COINPAYMENT_KEY:'0bd93a3e89e5b8f498562ac1af24b73be831d2f4aab0aea899a5a5daed1118c9', //Public Key Of coinpayments API
    COINPAYMENT_SECRET: '1d65794852180Bde029E54C7E752874e5bFe9d0dC2C7341Df39BBBBF2adD17fD', //Private Key Of coinpayments API 

    MONGO_DATABASE: 'macQueenDB',
    MONGODB_USERNAME: 'macQueen',
    MONGODB_PASSWORD: 'macQueen123',
    MONGODB_ADMIN_USERNAME: 'admin',
    MONGODB_ADMIN_PASSWORD: 'admin',
    MONGODB_IP_1: '',
    MONGODB_IP_2: '',
    MONGODB_IP_3: '',
    REPLICATION_PORT_1: '27017',
    REPLICATION_PORT_2: '27018',
    REPLICATION_PORT_3: '27019',
    REPLICASET: 'yudiz',

    ETHERSCAN_API: 'https://api-ropsten.etherscan.io',
    ETHERSCAN_API_KEY: '8YMQNHHT8HYX6FFIGR5T7EG8QP32TE2UQZ',
    WEB3_API:'https://ropsten.infura.io/v3/c03ad9464cdf4e2fa47bfc44fdcf5161'

}
const prod = {

  COINPAYMENT_KEY:'0bd93a3e89e5b8f498562ac1af24b73be831d2f4aab0aea899a5a5daed1118c9', //Public Key Of coinpayments API
  COINPAYMENT_SECRET: '1d65794852180Bde029E54C7E752874e5bFe9d0dC2C7341Df39BBBBF2adD17fD', //Private Key Of coinpayments API 

  MONGO_DATABASE: 'macQueenDB',
  MONGODB_USERNAME: 'macQueen',
  MONGODB_PASSWORD: 'macQueen123',
  MONGODB_ADMIN_USERNAME: 'admin',
  MONGODB_ADMIN_PASSWORD: 'admin',
  MONGODB_IP_1: '',
  MONGODB_IP_2: '',
  MONGODB_IP_3: '',
  REPLICATION_PORT_1: '27017',
  REPLICATION_PORT_2: '27018',
  REPLICATION_PORT_3: '27019',
  REPLICASET: 'adminMacQueen',

  ETHERSCAN_API: 'https://api.etherscan.io',
  ETHERSCAN_API_KEY: '8YMQNHHT8HYX6FFIGR5T7EG8QP32TE2UQZ',
  WEB3_API:'  https://mainnet.infura.io/ocCdekUYwOyLn7h7OlJM'

}

module.exports = (process.env.NODE_ENV === 'prod') ? prod : dev;
