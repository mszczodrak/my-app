

export const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function (date) {
    // Modify fetchAPI to return a fixed list for testing
    // You can customize this list as needed
    if (process.env.NODE_ENV === 'test') { // Check if in test environment
        return [
            "17:00",
            "18:30",
            "20:00",
            "21:30",
        ];
    } else {
        // In a non-test environment, use the original logic
        const result = [];
        seededRandom(date)();

        for (let i = 17; i <= 23; i++) {
            if (Math.random() < 0.5) {
                result.push(i + ':00');
            }
            if (Math.random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    }
};

export const submitAPI = function (formData) {
    return true;
};