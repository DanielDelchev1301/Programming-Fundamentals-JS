function cone(radius, height) {
/*Volume of a cone:
V = (1/3)πr2h
Slant height of a cone:
s = √(r2 + h2)
Lateral surface area of a cone:
L = πrs = πr√(r2 + h2)
Base surface area of a cone (a circle):
B = πr2
Total surface area of a cone:
A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2))*/
//Write a function to calculate a cone’s volume and total surface area by given height and radius of the base.
let p = Math.PI;
let volume = (1/3) * p * (radius * radius) * height;
let slant = Math.sqrt((radius * radius) + (height * height));
let lateral = p * radius * slant;
let base = p * (radius * radius);
let totalSurfaceArea = lateral + base;
console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${totalSurfaceArea.toFixed(4)}`)
}
cone(3.3, 7.8);