console.log('Calling process.node-crash...');
process.nextTick(() => process.crash());
