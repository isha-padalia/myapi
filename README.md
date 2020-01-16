# macQueen

## Installation

### 1. Install Node

```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
$ nvm install node
$ nvm use node
$ nvm install --lts
$ nvm use --lts
```
### 2. Install mongodb 

#### i) Install mongodb on mac

```
$ brew install mongodb
```

#### ii) Install mongodb on Ubuntu

```
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
$ echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
```

### 3. Install pm2

```
$ npm i -g pm2
```

## Usage

### 1. MongoDb replication step

create a **mongodbkey** file

```
$ openssl rand -base64 741 > mongodb-keyfile
$ chmod 600 mongodb-keyfile
$ mkdir rs1
$ mongod --keyFile mongodb-keyfile  --replSet yudiz --logpath "1.log" --dbpath rs1 --port 27017 --bind_ip 0.0.0.0
```
**Server-2**

```
$ mongod --keyFile mongodb-keyfile --replSet yudiz --logpath "2.log" --dbpath rs2 --port 27018 --bind_ip 0.0.0.0
```
**Server-3**
```
$ mongod --keyFile mongodb-keyfile --replSet yudiz --logpath "3.log" --dbpath rs3 --port 27019 --bind_ip 0.0.0.0 
```

**Note:** Ensure that all 3 Replication server having same **mongodb** version.

### 2. initiate replica set

```
$ mongo

> config = {
        _id: "yudiz", members:[
            {_id: 0, host: Ip_1},
            {_id: 1, host: Ip_2},
            {_id: 2, host: Ip_3},
        ]
    };

> rs.initiate(config);

> rs.status();
```


### 3. Admin authentication

```
> use admin

> db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [{ role: "root", db: "admin" }]
  });
```

### 4. create macQueenDB and collections

```
$ npm run initialize-db 
```

### 5. Connect to a secondary node

```
$ mongo --port <port_number>
```
      
### 6. Run 

```
$ npm i
$ pm2 start ecosystem.config.js
```

      











    


# myapi
# myapi
# myapi
