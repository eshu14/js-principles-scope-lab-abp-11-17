// Write your solution in this file!
var customerName="bob";
const leastFavoriteCustomer="eshu";
function upperCaseCustomerName(){
  customerName= customerName.toUpperCase();
  return customerName;

}
function setBestCustomer(){
  bestCustomer="not bob";
}
function overwriteBestCustomer()
{
  bestCustomer="maybe bob";
}
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer="Shreya";
}
function attemptTwoFavoriteCustomers()
{
  let favoriteCustomer;
  try{
    let favoriteCustomer;
    throw "declared";
  }
  catch(err){
    console.log("too many declaration of same variable");
  }

}
