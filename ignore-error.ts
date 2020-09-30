try {
    throw new Error('error ignored');
} catch (e) {
    console.log('catched');
}
