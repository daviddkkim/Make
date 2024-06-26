function extractVariables(url: string) {
    const regex = /{{(.*?)}}/g;
    const variables = [];
    let match;

    while ((match = regex.exec(url)) !== null) {
        variables.push(match[1]);
    }

    return variables;
}


export { extractVariables }

/*
 
// Example usage
const url = "https://restcountries.com/v3.1/name/{{variable}}/{{variable2}}";
const extractedVariables = extractVariables(url);
console.log(extractedVariables);  // Output: ['variable', 'variable2']
 
// Test with different URLs
const url2 = "https://api.example.com/{{param1}}/users/{{userId}}/posts/{{postId}}";
console.log(extractVariables(url2));  // Output: ['param1', 'userId', 'postId']
 
const url3 = "https://no-variables.com/api/v1/data";
console.log(extractVariables(url3));  // Output: [] */