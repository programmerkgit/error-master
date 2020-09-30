try {
    throw new Error('throw error');
} catch (e) {
    /* This removes where error occurred */
    console.error(e);
}
