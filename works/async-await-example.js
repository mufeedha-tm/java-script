
async function hi() {
    try {
        // Simulating an error (undefined variable)
        console.log(success);  // 'success' is not defined -> will throw error
    } catch (error) {
        console.log("Error caught:", error.message);
    }
}

hi();
