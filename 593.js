/*
给定二维空间中四点的坐标，返回四点是否可以构造一个正方形。

一个点的坐标（x，y）由一个有两个整数的整数数组表示。

示例:

输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
输出: True
 

注意:

所有输入整数都在 [-10000，10000] 范围内。
一个有效的正方形有四个等长的正长和四个等角（90度角）。
输入点没有顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-square
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  let r = [
    f(p1, p2),
    f(p1, p3),
    f(p1, p4),
    f(p2, p3),
    f(p2, p4),
    f(p3, p4),
  ].sort((a, b) => a - b);

  return r[0] > 0 && r[0] === r[3] && r[4] === r[5] && r[4] === r[0] * 2;
};


function f(a, b) {
  return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
}
