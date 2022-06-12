# express graphql

## Usage

To use qraphql express, Use the command below :

1. getAllUsers

```code
query{
  getAllUsers {
    id,
    name,
    age,
    email
  }
}
```

2. getUserById

```code
query{
  getUserById (id: 1) {
    id,
    name,
    age,
    email
  }
}
```

3. createUser

```code
mutation{
  createUser(name:"test", age:10, email:"test@example.com") {
    id,
    name,
    age,
    email
  }
}
```

4. updateUser

```code
mutation{
  updateUser(id: 1 ,name:"test2") {
    id,
    name,
    age,
    email
  }
}
```

5. deleteUser

```code
mutation{
  deleteUser (id: 1) {
    id,
    name,
    age,
    email
  }
}
```
