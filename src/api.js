

export const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    const result = [];
    seededRandom(date)();

    for(let i = 17; i <= 23; i++) {
        if(Math.random() < 0.5) {
            result.push(i + ':00');
        }
        if(Math.random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
export const submitAPI = function(formData) {
    return true;
};