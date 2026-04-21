#### env vars

token, refresh token gen salt: node: require('crypto').randomBytes(32).toString('hex')

remove all useState, useEffect, create and import signals instead.
https://www.youtube.com/watch?v=SO8lBVWF2Y8

implement mysql + redis docker containers
set pwd for mysql docker in docker-compose-swg.yml
docker-compose -f .\docker-compose-swg.yml up -d

docker exec -it swg-redis /bin/bash
or
docker exec -it swg-redis redis-cli

> PORT  
> ACCESS_TOKEN_SALT  
> REFRESH_TOKEN_SALT  
> PASSWORD_SALT  
> MYSQL_HOST  
> MYSQL_USER  
> MYSQL_PASSWORD  
> MYSQL_DB
