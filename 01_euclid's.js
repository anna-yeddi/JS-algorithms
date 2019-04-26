// Find the Greatest Common Denominator (GCD) of two integers:

// 1) find two integers a and b, where a > b, divide a by b:
// 2) If the remainder, r, is 0, then stop: GCD is b:
// 3) Otherwise, set a to b, b to r, and repeat step 1 until r is 0.

function gcd(a, b) {
    while (b != 0) {
        let t = a;  // temp variable, in 20,8 ex t = 20
        a = b; // a = 8
        b = t % b; // b = 20 / 8
    }

    return a;
};

console.log(gcd(20, 8)); // 4
console.log(gcd(60, 96)); // 12