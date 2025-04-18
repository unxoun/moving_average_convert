function convertMA(L1, T1, T2) {
    return L1 * (T2 / T1);
}

// مثال استفاده:
let L1 = 20; // مقدار MA در تایم فریم اولیه
let T1 = 5;  // تایم فریم اولیه (دقیقه)
let T2 = 1;  // تایم فریم هدف (دقیقه)

let L2 = convertMA(L1, T1, T2);
console.log(`MA معادل در تایم فریم ${T2} دقیقه: ${L2}`);
