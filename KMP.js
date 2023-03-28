
const getNextArray = function (s) {
    if(s.length == 1) {
       return [-1]
    }
    const next = new Array(s.length)
    next[0] = -1
    next[1] = 0
    let i = 2 //next 数组的位置
    let cn = 0
    while (i < next.length) {
        if(s[i - 1] == s[cn]) {
            next[i++] = ++cn
        }
        else if(cn > 0) {
            cn = next[cn]
        }else {
            next[i++] = 0
        }
    }

}

const KMP = function (s, m) {
    if(s == null || m == null || m.length<1 || s.length<m) return -1;
    const str1 = s.split('')
    const str2 = m.split('')
    let i1 = 0, i2 = 0;
    const nextArr = getNextArray(str2) // O(M)
    // O(N)
    while (i1 < str1.length && i2 < str2.length) {
        if(str1[i1] == str2[i2]) {
            i1++
            i2++
        } else if(nextArr[i2] == -1) { // i2 == 0
            i1++
        } else {
            i2 = nextArr[i2]
        }
    }
    return i2 == str2.length ? i1-i2 : -1
}