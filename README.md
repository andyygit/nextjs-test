#### env vars

token, refresh token gen salt: node: require('crypto').randomBytes(32).toString('hex')  
used bcrypt for password salt: node: let bcrypt = require('bcryptjs'), await bcrypt.genSalt(10)

> PORT  
> ACCESS_TOKEN_SALT  
> REFRESH_TOKEN_SALT  
> PASSWORD_SALT  
> MYSQL_HOST  
> MYSQL_USER  
> MYSQL_PASSWORD  
> MYSQL_DB
