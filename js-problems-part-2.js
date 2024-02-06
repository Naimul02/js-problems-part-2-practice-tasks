// practice tasks 1
// Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137, 100, 45, 15, 11];
function lowestNum(arr) {
  let minElement = arr[0];

  for (const element of arr) {
    if (element < minElement) {
      minElement = element;
    }
  }
  return minElement;
}
const result = lowestNum(heights2);
// console.log(result);

// practice task 2
// Find the friend with the smallest name.
const heights = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallestName(arr) {
  let minName = heights[0];
  console.log(minName.length);
  for (const element of arr) {
    if (element.length < minName.length) {
      minName = element;
    }
  }
  return minName;
}
const print = smallestName(heights);
console.log(print);

// practice task 3
// Your task is to calculate the total budget required to buy electronics:
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity
) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  const laptopPrice = laptop * laptopQuantity;
  const tabletPrice = tablet * tabletQuantity;
  const mobilePrice = mobile * mobileQuantity;

  const totalPrice = laptopPrice + tabletPrice + mobilePrice;
  return totalPrice;
}
const result1 = calculateElectronicsBudget(2, 1, 5);
console.log("Your total price is : ", result1);

// practice task 4
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
  let phonePrice = 0;
  for (const phone of phones) {
    phonePrice = phonePrice + phone.price;
  }
  const avgPrice = phonePrice / phones.length;
  const convertIntAvgPrice = parseFloat(avgPrice.toFixed(2));

  return convertIntAvgPrice;
}
const output1 = findAveragePhonePrice(phones);
console.log("Your Average Price is : ", output1);

// practice task 5
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];


// system number 1
// system 2 theke 1 number system ti khubi valo system.eta follow kora ucit.
function totalSalary(arr) {
  let totalSalary = 0;

  for (const obj of arr) {
    const total = obj.experience * obj.increment + obj.starting;
    totalSalary = totalSalary + total;

  }
  return totalSalary
}
const result2 = totalSalary(employees);
console.log(result2);


// system number 2
function totalSalary(arr){
    const firstEmployeeCurrentPrice = arr[0].starting + arr[0].increment * arr[0].experience;
    const secondEmployeeCurrentPrice = arr[1].starting + arr[1].increment * arr[1].experience;
    const thirdEmployeeCurrentPrice = arr[2].starting + arr[2].increment * arr[2].experience;
    const fourthEmployeeCurrentPrice = arr[3].starting + arr[3].increment * arr[3].experience;

    const totalSalary = firstEmployeeCurrentPrice + secondEmployeeCurrentPrice + thirdEmployeeCurrentPrice + fourthEmployeeCurrentPrice ;

    return totalSalary;
}
const result3 = totalSalary(employees);
console.log(result2)
console.log("Every month the company has to pay Rs." , " : " ,  result2 , " as salary");
