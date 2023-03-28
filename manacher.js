
const ManacherString = function (s) {
    const arr = s.split('')
    const res = new Array(s.length*2 + 1)
    let index = 0
    for (let i=0; i!=res.length; i++) {
        res[i] = (i & 1) === 0 ? '#' : arr[index++]
    }
    console.log(res)
    return res
}

const Manacher = function (s) {
    if(s == null || s.length == 0) return 0;
    //1, 处理回文串
    const str = ManacherString(s)
    let pArr = new Array(str.length) //回文半径数组 长度与处理后的回文串一样
    let C = -1 // 中心
    let R = -1 // 回文右边界的再往右一个位置，最右的有效区是R-1位置
    let max = Math.pow(2, 31) - 1;
    //2,求每个位置的回文半径
    for (let i = 0; i !=str.length; i++) {
        pArr[i] = R > i ? Math.min(pArr[2*C - i], R - i) : 1;

        while (i + pArr[i] < str.length && i - pArr[i] > -1) {
            if(str[i + pArr[i]] == str[i- pArr[i]]) {
                pArr[i]++
            }else {
                break
            }
        }
        if (i + pArr[i] > R) {
            R = i + pArr[i]
            C = i
        }
        max = Math.max(max, pArr[i])
    }
    return max - 1

}

ManacherString('abc')