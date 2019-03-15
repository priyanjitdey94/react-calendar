const getFirstValue = (...args) => {
        let i,
            len = args.length;
            
        for (i = 0; i < len; i++) {
            if (typeof args[i] !== 'undefined') {
                return args[i];
            }
        }
    }

export {
    getFirstValue
};
