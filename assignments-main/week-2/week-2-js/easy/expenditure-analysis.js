/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotalMap = {};

  // Iterate over each transaction
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If the category already exists, add the price
    if (category in categoryTotalMap) {
      categoryTotalMap[category] += price;
    } else {
      // If not, initialize the category with the current price
      categoryTotalMap[category] = price;
    }
  });

  // Convert the categoryTotalMap to an array of objects
  return Object.entries(categoryTotalMap).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}

module.exports = calculateTotalSpentByCategory;
