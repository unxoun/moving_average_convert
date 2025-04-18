// returns MA length in T2 time frame, equal to MA length in T1 time frame
function convertMA(T1, L1, T2) {
    return T1 > T2 ? L1 * (T1 / T2) : L1 * (T2 / T1);
}

// T1 = time frame 1 (minutes, eg 60)
// L1 = MA in T1 (eg 21)
// T2 = target time frame (eg 5)

// get MA 21 in 1 houre in 5 min chart
// what length should be MA in 5 min to represent the MA 21 in 1 houre chart
// how do i see 1 houre MA-21 in 5 min chart:
console.log(convertMA(60, 21, 5))
