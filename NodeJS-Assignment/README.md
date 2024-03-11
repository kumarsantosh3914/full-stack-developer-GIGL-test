# APIs


## Signup

- Sign up localhost:4000/api/v1/signup - POST request object:

```
{
    name: <username>,
    email: <email>,
    password: <password>
}
```

success response object:

```
{
    "success": true,
    "message": "Successfully created a new user",
    "data": {
        "id": 1,
        "name": "Santosh Kumar",
        "email": "santosh@gmail.com",
        "password": "$2b$10$mifjLjxArIS7DD.MxXwYqup9O7kMov1zfYt0wN4o27H3DZsQ74iNO",
        "updatedAt": "2024-03-11T20:00:40.938Z",
        "createdAt": "2024-03-11T20:00:40.938Z"
    },
    "err": {}
}
```


failure response object:

```
{
"message": "Something went wrong",
"data": {},
"success": false,
"err": {
   "index": 0,
   "code": 11000,
   "keyPattern": {
       "email": 1
   },
   "keyValue": {
       "email": "santu@gmail.com"
   }
 }
}
```

- Sign in localhost:4000/api/v1/signin - POST request object:

```
{
    email: <email>,
    password: <password>
}
```

success response object:

```
{
    "success": true,
    "message": "Successfully signed in",
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbnRvc2hAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTcxMDE4NzU3MCwiZXhwIjoxNzEwMTkxMTcwfQ.-lUcIvDTwnnkys9tO1llV9N7jKM2y2sb81w9EJwoJ4A",
    "err": {}
}
```

failure response object:

```
{
    "message": "Something went wrong ",
    "data": {},
    "success": false,
    "err": {
        "error": {
            "error": "Incorrect password"
        }
    }
}
```
