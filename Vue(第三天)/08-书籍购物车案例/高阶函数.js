let nums = [100,10,55,66,33];

// 有布尔判断
nums.filter(n => true)
// 所有都要处理
nums.map(n => n * 2)
// 求总和
nums.reduce((pre,n) => pre = n+pre,0)