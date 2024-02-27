// const user = { id: 1, name: "FaisalH", job: "student" };
// console.log(user);
// const stringified = JSON.stringify(user);
// console.log(stringified);
// javaScript object notation
/**
    { id: 1, name: 'FaisalH', job: 'student' }
    {"id":1,"name":"FaisalH","job":"student"}
 */

const shop = {
  owner: "FaisalH",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
  product: ["laptop", "mic", "mouse", "keyboard"],
  revenue: 100000,
  isOpen: true,
  isNew: false,
};

console.log(typeof shop);
const shopJsn = JSON.stringify(shop);
console.log(typeof shopJsn);
