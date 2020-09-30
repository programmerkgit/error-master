console.error("error log")
console.log("normal log")
console.info("info log")
try {
    throw new Error('error');
}catch (e) {
    console.log("catched")
    console.error(e);
    throw new Error("catch")
}

