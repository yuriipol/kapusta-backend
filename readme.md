
# GoIT: HTML-SCSS, JavaScript, ReactJS, Node.js 

## Final educational team project "KAPUSTA"
This Application is the result of efficient work of a friendly team "EASY CODE". This application allows you to track your incomes and expenses. The results can be analyzed using convenient reports and graphs. KAPUSTA is an application implemented on both the front-end and the back-end.

***
## This Project
### On the frot-end:
Тhe project team implemented an adaptive layout with three layouts (mobile phone, tablet, desktop) and used additional libraries for:
+ visualize the data graphically - library `"recharts"`
+ comfortable selecting the desired date - library `"react-datepicker"`
+ creating and styling dropdown lists - library `"react-select"`

### On the back-end:
+ the app starts at `server.js`
+ add frameworks and packages in `package.json`
+ safely store app secrets in `.env`
+ all the logic of the API is in the folders `routes/api` and `routes/transactions`
+ query handler functions can be viewed in  `controllers/`'s files
  
#### On the back-end the project team implemented
+ the logic of registration and authentication using e-mail and password, as well as using google capabilities
+ the logic of adding user incomes and expenses 
+ the logic of summaring incomes and expenses for the month of the current year 
+ the logic of receiving detailed information about expenses and incomes for a specific month and year

***
### Commands

- `npm install` - installation project dependencies
- `npm start` - start the server in production mode 
- `npm run start:dev` - start the server in development mode
- `npm run lint` - running a code check with eslint
- `npm run lint:fix` - running a code check with eslint with automatic fixes for simple errors

***
### Main modals
#### Users

```javaScript
{
  _id: ObjectId('6361266c5f57f090179ebece'),
  email: "nulla@org.uk",
  password: "захешований user`s password",
  token: "",
  avatarURL: "//www.gravatar.com/avatar/b59a741183b7e1990156a46faa29b60c",
  balance: 1419.21,
  createdAt: 2022-12-17T09:01:38.110+00:00, 
  updatedAt: 2022-12-20T13:00:18.489+00:00  
}
```

Users are identified by unique identifier. Properties email must be unique too. An additional description of the User structure is given in the table.

Field   |  Type  |   Description              | isRequired
--------|--------|----------------------------|------------
_id     |string  |The users's unique identifier|is required
password|string  |The users's password    |is not required
email   |string  |The users's email       |is required
token   |string  |The users's phone       |is not required
balance |number  |The users's balance     |is not required
avatarURL|string |Is user's avatarURL     |is not required

***
#### Income

```javaScript
{
  _id: ObjectId('6361266c5f57f090179ebece'),
  description: "Income description"
  amount: 1050,  
  date: "2020-12-31",
  owner: ObjectId('639d857233283b0c90185af5'), 
}
```

Each incoming operation is identified by unique identifier and belongs to a specific owne.  An additional description of the User structure is given in the table.

Field      |  Type  |   Description                | isRequired
-----------|--------|------------------------------|------------
_id        |string  |The income's unique identifier|is required
description|string  |The description of operstion  |is not required
amount     |number  |The amount of operstion       |is required
date       |string  |The date of operstion         |is not required
owner      |        |The operstion's owner         |is not required

***
#### Expense

```javaScript
{
  _id: ObjectId('6361266c5f57f090179ebece'),
  description: "Expense description",
  amount: "555",  
  date: "2022-12-18",
  category: "Продукты",
  owner: ObjectId('639d857233283b0c90185af5'), 
}
```

Each expensing operation is identified by unique identifier and belongs to a specific owne.  The category field can only contain values from a specific array. An additional description of the User structure is given in the table. 

Field      |  Type  |   Description               | isRequired
-----------|--------|-----------------------------|------------
_id        |string  |The users's unique identifier|is required
description|string  |The description of operstion |is not required
amount     |number  |The amount of operstion      |is required
date       |string  |The date of operstion        |is not required
category   |string  |The category of operstion    |is not required
owner      |        |The operstion's owner        |is not required

***
### Main routes
The documentation on endpoints can be found at the link  [documentation](http://localhost:4040/api-docs/)

 ##  "EASY-CODE" TEAM     **(^_^)**



