// Filename: advancedBankingSystem.js
// Description: A sophisticated and elaborate banking system

/*----------------------------------
 ---------- BANK MODULE -----------
 ----------------------------------*/

var BankModule = (function() {
  
  // Private variables
  var users = [];
  var accounts = [];
  
  // Utility functions
  function generateID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  
  // User constructor function
  function User(name, email, age) {
    this.id = generateID();
    this.name = name;
    this.email = email;
    this.age = age;
    this.accounts = [];
  }
  
  // Account constructor function
  function Account(user, type, balance) {
    this.id = generateID();
    this.user = user;
    this.type = type;
    this.balance = balance;
  }
  
  // Public methods
  
  // Register a new user
  function registerUser(name, email, age) {
    var newUser = new User(name, email, age);
    users.push(newUser);
    return newUser.id;
  }
  
  // Open a new account for a user
  function openAccount(userId, type, initialDeposit) {
    var user = users.find(user => user.id === userId);
    if (!user) {
      console.log("User not found!");
      return;
    }
    
    var newAccount = new Account(user, type, initialDeposit);
    user.accounts.push(newAccount);
    accounts.push(newAccount);
    return newAccount.id;
  }
  
  // Get accounts' balance for a user
  function getAccountsBalance(userId) {
    var user = users.find(user => user.id === userId);
    if (!user) {
      console.log("User not found!");
      return;
    }
    
    var balance = 0;
    user.accounts.forEach(account => balance += account.balance);
    return balance;
  }
  
  // Get account details for a user
  function getAccountDetails(userId, accountId) {
    var user = users.find(user => user.id === userId);
    if (!user) {
      console.log("User not found!");
      return;
    }
    
    var account = user.accounts.find(account => account.id === accountId);
    if (!account) {
      console.log("Account not found!");
      return;
    }
    
    return {
      id: account.id,
      type: account.type,
      balance: account.balance
    };
  }
  
  // Make a transfer between two accounts
  function makeTransfer(userId, fromAccountId, toAccountId, amount) {
    var user = users.find(user => user.id === userId);
    if (!user) {
      console.log("User not found!");
      return;
    }
    
    var fromAccount = user.accounts.find(account => account.id === fromAccountId);
    if (!fromAccount) {
      console.log("From account not found!");
      return;
    }
    
    var toAccount = user.accounts.find(account => account.id === toAccountId);
    if (!toAccount) {
      console.log("To account not found!");
      return;
    }
    
    if (fromAccount.balance < amount) {
      console.log("Insufficient balance!");
      return;
    }
    
    fromAccount.balance -= amount;
    toAccount.balance += amount;
    
    console.log("Transfer successful!");
  }
  
  // Public API
  return {
    registerUser: registerUser,
    openAccount: openAccount,
    getAccountsBalance: getAccountsBalance,
    getAccountDetails: getAccountDetails,
    makeTransfer: makeTransfer
  };
})();

/*----------------------------------
 ------- USING THE BANK MODULE ------ 
 ----------------------------------*/

// Register two users
var user1Id = BankModule.registerUser("John Doe", "john@example.com", 30);
var user2Id = BankModule.registerUser("Jane Smith", "jane@example.com", 25);

// Open accounts for the users
var account1Id = BankModule.openAccount(user1Id, "Checking", 1000);
var account2Id = BankModule.openAccount(user1Id, "Savings", 500);
var account3Id = BankModule.openAccount(user2Id, "Savings", 200);

// Get accounts' balance for a user
var user1Balance = BankModule.getAccountsBalance(user1Id);
var user2Balance = BankModule.getAccountsBalance(user2Id);

// Get account details for a user
var account1Details = BankModule.getAccountDetails(user1Id, account1Id);
var account2Details = BankModule.getAccountDetails(user1Id, account2Id);
var account3Details = BankModule.getAccountDetails(user2Id, account3Id);

// Make a transfer between two accounts
BankModule.makeTransfer(user1Id, account1Id, account2Id, 300);

console.log("User 1 balance: ", user1Balance);
console.log("User 2 balance: ", user2Balance);
console.log("Account 1 details: ", account1Details);
console.log("Account 2 details: ", account2Details);
console.log("Account 3 details: ", account3Details)