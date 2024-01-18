function findSumOfDistinctElements(set1, set2) {
    // Initialize an array to keep track of distinct elements
    let distinctElements = [];
    
    // Check elements in set1
    set1.forEach(element => {
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    });
    
    // Check elements in set2
    set2.forEach(element => {
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    });
    
    // Calculate the sum of distinct elements
    let sumOfDistinctElements = distinctElements.reduce((sum, element) => sum + element, 0);
    
    return sumOfDistinctElements;
}

// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = findSumOfDistinctElements(set1, set2);
console.log("Output:", result);
