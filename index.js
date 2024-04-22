// 学习代码规范
// 每一行结束都要添加一个逗号，这样防止git过来新语句导致报错
const rule = {
  name: 'zdl',
  age: 21,
  graduated_school: 'zzu',
};
const test = { direction: 'right', destroy: 100 };
if (value !== 0) {
  const app = () => {
    for (let key in rule) {
      console.log(rule[key])
    }
    return 'you are good';
  }
}
// 常见的需要添加分号结束的语句
// 命名语句 以及 处理语句
function test(
  name,
  age,
  address,
  ...name
) {
  console.log(name, age, address);
}
test()
// 函数的参数书写，如果有多个的话那么久分多行去写，然后都加上,
// 但是扩展运算符后面不要添加逗号
const obj = {

};

