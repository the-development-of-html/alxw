// 学习代码规范

// 在写网络接口时，不要把数据放在try catch里面，直接把try catch注释掉，放在里面就行


// 每一行结束都要添加一个逗号，这样防止git过来新语句导致报错
const rule = {
  name: 'zdl',
  age: 21,
  graduated_school: 'zzu',
};

let keys = Object.keys(rule)
console.log(keys);
rule.prototype.say = function () {
  console.log(`${this.name}今年${age}岁`);
}
for (const key in rule) {
  if (Object.prototype.hasOwnProperty.call(rule, key)) { // 使用for in循环时,避免原型链上的属性被调用 
    console.log(rule[key]);
  }
}
// const test = { direction: 'right', destroy: 100 };
// if (value !== 0) {
//   const app = () => {
//     for (let key in rule) {
//       console.log(rule[key])
//     }
//     return 'you are good';
//   }
// }
// 常见的需要添加分号结束的语句
// 命名语句 以及 处理语句
let information = {
  name: 'zdk',
  age: 21,
  address: 'ly',
  school: 'zzu',
  a: 'cs'
}
function test2({
  name,
  age,
  address,
  ...args
}) {
  console.log(name, age, address);
  console.log(args); // 将拿到的数据储存在数组中
}

test2(information)
// 函数的参数书写，如果有多个的话那么久分多行去写，然后都加上,
// 但是扩展运算符后面不要添加逗号
const obj = {};
// 如果在多代码块中，空代码块也最好不要直接闭合
// 尽量不要使用空代码快
if (rule.name = 'zdl') {
  console.log(`${rule.name}`)
} else {
  // 如果一定为空，请写上原因
}


// 小括号和中括号()[]两侧不放空格，大括号要放空格{}
// 除了一元运算符，其他运算符之间都应该有空格
const result = rule.name == 'zdl' ? '帅' : '丑'

function abc() {
  //代码块的开始和结束之间不应该有空行
  let a = 1;
  let b = 2;
  return a + b;
}
// 不同的块或者作用域之间要留一个空格，也就是块末和新语句之间要空行


// 声明的变量和函数参数要使用
// !!! 好的代码书写规范，变量声明放在使用之前就行，不需要放在一开始的位置，需要了就声明，不需要就不声明


// 原始的数据类型的一些操作注意事项
// 对于number、boollean、string数据类型不要使用new来创建新的变量
// 数据类型转化，直接使用数据转换就行
// 转数字 => Number
// 转字符串 => String
// 转化为bool型 => !!

// 对象定义时可以简写
// const newobj = {
//   value,
//   addvalue(age) {
//     return age + this.value
//   }
// }
// 对象访问属性时尽量使用.来访问，除非访问动态的属性或者特殊字符时使用[]


// 不要使用函数声明，函数声明会被提升到首部，使用函数表达式

// bad 
// function foo() {
//   //
// }

// good

const foo = () => {
  // FIXME: 当一些功能未完成时，写个注释说明原因
  // TODO：用来展示待完成的功能
}
foo('zdk', 18, 'ly')
// argument的使用事项
// 最好不要在函数体内使用argument对象，



// import 相关的规则
// 先引用第三方库，然后引用本地工程的其他内容



// 非空的文件要在最后保留一个空行
// 对于需要到处的函数来说，使用小驼峰命名
export const printCurrentMessage = function () {
  // 在调试环境可以有console，在测试环境中不可以有
  // 同时不必要的代码也需要给注销掉
  console.log('123');
}