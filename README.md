#### env vars

token, refresh token gen salt: node: require('crypto').randomBytes(32).toString('hex')

remove bcrypt and jose, make all auth custom

reinstall @work

> PORT  
> ACCESS_TOKEN_SALT  
> REFRESH_TOKEN_SALT  
> PASSWORD_SALT  
> MYSQL_HOST  
> MYSQL_USER  
> MYSQL_PASSWORD  
> MYSQL_DB
