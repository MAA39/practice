const person = {
  name: "高橋",
  age: 38
};

const myProfile = {
  name1: "田中",
  age1: 19
};

const { name, age } = person;
console.log(`私の名前は${name},年齢は${age}です。`);

const { name1 = "ゲスト", age2 = "秘密", sex = "男", food } = myProfile; // このage="秘密"と書くのがデフォルト値
console.log(
  `私の名前は${name1},年齢は${age2}です。性別は${sex}です。好きな食べ物は${food}です`
);

//配列の場合は設定した変数に順番に値が格納されるのに対して、オブジェクトの場合は
//オブジェクトで設定した変数名と一致しておく必要がある。面白い。

const sayHello = (personName = "ゲスト") => {
  console.log(`${personName}さん、こんにちは`);
};
sayHello("田中");
sayHello();
sayHello("");
