const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  },
  {
    name: "Shaw",
    province: "SK",
    sales: [300, 50, 700, 230]
  }

];
 function sumArr (total, num){
   return total + num;
 }

 let branchReport = { };

const calculateSalesTax = function(salesData, taxRates) {
  for (let i = 0; i < companySalesData.length; i++) { //Iteration over the 3 elements of the companySalesData array
    let branchSales = companySalesData[i].sales; //Stores sales data array in a variable for each element
    let branchTotalSales = branchSales.reduce(sumArr); //Adds all elements in sales array
    let provTax = salesTaxRates[companySalesData[i].province]; //Stores provinces values from salesTaxRates.
                                                              //The provinces are provided by companyDataSAles
    let branchTotalTaxes = branchTotalSales * provTax; //Stores calculated taxes per branch.

    let companyName = companySalesData[i].name; // Stores company's names
    if (branchReport[companyName]) { // Populates branchReport object with calculated sales(totalBranchSales) & total
                                     // taxes by company.
      branchReport[companyName].totalSales = branchTotalSales;
      branchReport[companyName].totalTaxes = branchTotalTaxes;
    } else {
      branchReport[companyName] = {totalSales: branchTotalSales, totalTaxes: branchTotalTaxes};
    }
  }
  return branchReport;
};

let results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

