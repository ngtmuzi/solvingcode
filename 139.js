/*
给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-break
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  wordDict = wordDict.sort((a, b) => b > a ? 1 : -1);
  const memory = new Map();

  function f(s) {
    if (s.length === 0) return true;
    let possibleHead = [], tailHas = false;

    for (let word of wordDict) {
      if (s.startsWith(word)) possibleHead.push(word);
      if (s.endsWith(word)) tailHas = true;
    }

    if (possibleHead.length === 0 || !tailHas) return false

    for (let word of possibleHead) {
      if (cachef(s.slice(word.length))) return true;
    }

    return false;
  }

  function cachef(s) {
    if (memory.has(s)) {
      return memory.get(s);
    } else {
      result = f(s);
      memory.set(s, result);
      return result;
    }
  }


  return f(s);
};


console.log(wordBreak("leetcode", ["leet", "code"]), true)
console.log(wordBreak("applepenapple", ["apple", "pen"]), true)
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]), false)
console.log(wordBreak(
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]
));