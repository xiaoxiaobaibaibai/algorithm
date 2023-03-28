// //556. 给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。如果不存在这样的正整数，则返回 -1 。
//
// const nextGreaterElement = function (n) {
//     let max =Math.pow(2, 31) - 1;
//     const arr = (n+'').split("")
//     const result = arr.sort((a,b) => b-a)
//     const resultNum = result.join("")
//     if(resultNum > n) {
//         if(resultNum>max) return ;
//         return max < resultNum ? -1 : resultNum
//     }else {
//         console.log(-1)
//         return -1
//     }
// }
//
// const nextGreaterElement2 = function (n) {
//     // 从尾部开找最小降序子
//     const strArr = n.toString().split('');
//     let i = strArr.length - 2;
//     for (; i >= 0; i--) {
//         if (strArr[i] < strArr[i + 1]) {
//             break;
//         }
//     }
//     if (i < 0) {
//         return -1;
//     }
//     // 第一个非降序出现后，在降序子中找比他的大的最少一位互换位置
//
//     let j = strArr.length - 1;
//     while(j >= 0 && strArr[j] <= strArr[i]) {
//         j--;
//     }
//
//     [strArr[i], strArr[j]] = [strArr[j], strArr[i]]
//     // 因为已经确定后面是降序，所以倒转为升序 即最小排序
//     let p = i + 1;
//     let q = strArr.length - 1;
//     while(p < q) {
//         [strArr[p], strArr[q]] = [strArr[q], strArr[p]]
//         p++;
//         q--;
//     }
//
//     const res = parseInt(strArr.join(''));
//     return res >= 2 ** 31 ? -1 : res;
//
// }
//
//
// // 1541给你一个括号字符串s，它只包含字符'(' 和')'。一个括号字符串被称为平衡的当它满足：
// //
// // 任何左括号'('必须对应两个连续的右括号'))'。
// // 左括号'('必须在对应的连续两个右括号'))'之前。
// // 比方说"())"，"())(())))" 和"(())())))"都是平衡的，")()"，"()))" 和"(()))"都是不平衡的。
// //
// // 你可以在任意位置插入字符 '(' 和 ')' 使字符串平衡。
// //
// // 请你返回让 s平衡的最少插入次数。
//
// const minInsertions2 = function(s) {
//
//     let countLeft = 0, countRight = 0, count = 0;
//     for (let i = 0;i<s.length;i++) {
//         if(s[i] == "(") {
//             countLeft++
//         } else if (s[i] == ")") {
//             countRight++
//             if(countLeft) {
//                 if(countRight == 2) {
//                     countLeft--
//                     countRight = 0
//                 }
//             }else{
//                 countLeft ++
//                 count ++
//             }
//         }
//     }
//     console.log(countLeft, countRight, count)
//     count = count + 2 * countLeft - countRight
//     return count
// };
//
//
// // 2095 删除链表的中间节点
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
//
// const deleteMiddle = function(head) {
//     if(!head.next) {
//         return null
//     }
//     let q, s;
//     s = q = head;
//     let res
//     while (q && q.next) {
//         res = s
//         s = s.next
//         q = q.next.next
//     }
//     res.next = res.next.next
//     return head
//
// };
//
//
// // 1541
// const minInsertions = function (s) {
//     if(!s) return 0;
//     let left = 0, right = 0;
//     for (let i = 0;i<s.length;i++) {
//         debugger
//         if(s[i] == '(') {
//             right += 2
//             if (right % 2 == 1) {
//                 left+=1
//                 right-=1
//             }
//             console.log('===', left, right)
//         }
//         if (s[i] == ')') {
//             right-=1
//             if (right == -1) {
//                 left +=1
//                 right = 1
//             }
//             console.log('===', left, right)
//
//         }
//     }
//     return left + right
// }
// minInsertions("(()))")
//
// //1247 交换字符使得字符串相同
// // const minimumSwap = function (s1, s2) {
// //     let count = 0
// //     for (let i = 0; i < s1.length; i++) {
// //         if(s1[i] == s2[i]) {
// //             break
// //         }else {
// //             for (let j = i+1; j< s2.length; j++) {
// //                 if (s1[i] === s2[j]) {
// //                     [s1[i], s2[j]] = [s2[j], s1[i]]
// //                     count++
// //                     break
// //                 }
// //             }
// //         }
// //     }
// //     return count
// // }
//
// const minimumSwap = function (s1, s2) {
//     let d = 0
//     const cnt = new Array(2).fill(0)
//     for (let i = 0; i < s1.length; i++) {
//         if(s1[i] != s2[i]) {
//             ++cnt[s1[i].charCodeAt(0) % 2]
//         }
//     }
//     d = cnt[0] + cnt[1]
//     console.log(cnt,d)
//     return d%2 !=0 ? -1 : d/2 + cnt[0] % 2
//
// }
//
// //454, 四数之和
// const fourSumCount = function(nums1, nums2, nums3, nums4) {
//     const twoSumMap = new Map()
//     let count =  0
//     for(const n1 of nums1) {
//         for(const n2 of nums2) {
//             const sum = n1 + n2
//             twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1)
//         }
//     }
//
//     for(const n3 of nums3) {
//         for(const n4 of nums4) {
//             const sum = n3 + n4
//             count += (twoSumMap.get(0-sum) || 0)
//         }
//     }
//     return  count
// };
//
// // 890.查找和替换模式
// const findAndReplacePattern = function (words, pattern) {
//     const res = []
//     for (const w of words) {
//         const patternMap = new Map()
//         res.push(w)
//         for (let i = 0; i < w.length; i++) {
//             const a = w[i], b = pattern[i]
//
//             if(!patternMap.has(a)) {
//                 patternMap.set(a, b)
//
//             }else if(patternMap.get(a) != b) {
//                 res.pop()
//                 break
//                 // return false
//             }
//
//         }
//
//
//     }
// }
//
// findAndReplacePattern(['abb','asc','xdd'], 'abc')
//
// const numRescueBoats = function (p, l) {
//     let ant = 0
// }


function getHours (speed, piles) {
    let time = 0
    for (let p of piles) {
        // hours += Math.ceil(p / speed)
        const curTime = Math.floor((p + speed - 1) / speed);
        time += curTime;

    }
    return time
}
const minEatingSpeed = function (piles, H) {
    let left = 1, right = Math.max(...piles)


    while (left<right) {
        let mid = left + Math.floor((right-left)/2)
        let hours = getHours(mid, piles)

        if(hours > H) {
            left = left + 1
        } else {
            right = mid

        }
    }
    console.log(right)
    return right
}

minEatingSpeed([30,11,23,4,20], 6)