function dotProduct(v1, v2) {
    // Calculate the dot product of two vectors
    let ps = v1.reduce((sum, val, index) => sum + val * v2[index], 0);
    return ps;
}

function checkOrthogonality(vectors) {
    const n = vectors.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Check orthogonality using dot product
            const result = dotProduct(vectors[i], vectors[j]);
            
            if (result === 0) {
                console.log(`Vectors ${i+1} and ${j+1} are orthogonal.`);
            } else {
                console.log(`Vectors ${i+1} and ${j+1} are not orthogonal.`);
            }
        }
    }
}

// Example usage
const vectors = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
checkOrthogonality(vectors);
