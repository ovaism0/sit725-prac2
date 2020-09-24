var express = require("express");
var app = express();

/* End point getting information from an array defined below */

let accounts = [
   {id: 1, name: 'alex', deposit: 5},
   {id: 2, name: 'sarah', deposit: 5},
   {id: 3, name: 'jim', deposit: 15}
]
app.get("/accounts", (req, res) => {
   res.json(accounts);
});

app.get("/accounts/:id", (req, res) => {
    const accountId = req.params.id;
    const account = accounts.find(_account => _account.id == accountId);
    if (account) {
       res.json(account);
    } else {
       res.json({ message: `Account: ${accountId} doesn't exist`})
    }
   });
 
   /*Account will listen at port 3000 with localhost:3000/accounts 
   or localhost:3000/accounts/1 similarly 2 or 3 */

app.listen(3000, () => {
 console.log("Server running on port 3000")
})
