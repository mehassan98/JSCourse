//user bank details

let myAccount = {
    name: 'Hassan Anis',
    expense: 0,
    income: 0
}// end myAccount

// addExpense 

let addExpense = function(account, amount){
 account.expense = account.expense + amount
}// end addExpense

// addIncome
let addIncome = function(account, amount){
    account.income = account.income + amount
}// end addIncome

// getAccountSummary
let getAccountSummary = function (account){
 return `Account summary is: 
        Account Name: ${account.name}
        Account Income ${account.income}
        Account Expense ${account.expense}
        Accounr Balance ${account.expense-account.addIncome}`
    }// end getAccountSummary

// resetAccount
let resetAccount = function (account){
    account.expense=0
    account.income=0
}// end resetAccount


//addExpense(myAccount, 1000)
addIncome (myAccount, 5000)
let getSummary = getAccountSummary(myAccount)
console.log (getSummary)
//resetAccount(myAccount)
//getAccountSummary(myAccount)
console.log(myAccount)





