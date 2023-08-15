---
layout: "../layouts/BlogPost.astro"
title: "学习rust基础"
description: "了解编程语言中的常见概念，并了解它们是如何在 Rust 中实现的。 这些概念不是 Rust 独有的，但它们为每个 Rust 程序提供了基础。"
pubDate: "2023/05/05"
heroImage: ""
draft: true
tag:
  - Rust
---

## _microsoft篇_
### 基本程序结构
#### Rust函数
每个rust程序必须有名为`main`的函数
```
fn main() {
  printIn!("Hello, world");
}
```

#### 代码缩进
大多语句以`;`结尾。缩进四个空格。  

#### todo!宏(macro)
Rust中的宏类似于采用可变数量的输入参数的函数。  
```
fn main() {
  todo!("Display the message by using the println!() macro");
}
```

#### println!宏
`println!`宏需要一个或多个输入参数，这些参数会显示在屏幕或标准输出中。
```
fn main() {
  // println! displays the input 'Hello, world' to the screen
  println!("Hello, world!");
}
```

#### {}参数的值替换
```
fn main() {
  println!("The first letter of the English alphabet is {} and the last letter is {}.", 'A', 'Z');
}
```

### Rust中创建和使用变量 
#### 变量
声明变量后，可将其绑定到某个值，也可稍后在程序中绑定该值。
```
let a_number = 10;
```
如果尝试在绑定`a_number`之前显示该变量值，则编译器会返回错误。  

#### 不可变与可变
变量绑定默认不可变。 更改值必须先使用`mut`关键字将变量绑定为可变。  
```
let mut a_number = 10;
println!("The number is {}.", a_number);

a_number = 15;
println!("Now the number is {}.", a_number);
```

#### 变量隐藏
新的声明会创建新的绑定。在Rust中，此操作称为"隐藏"，旧变量仍在，但无法再于此范围内引用它。  

#### 探索数字、文本和 true/false 值的数据类型
Rust是一种静态类型化的语言。编译器通常可以根据绑定值推断变量数据类型。多种类型必须通过使用类型注释让编译器得知特定类型。  
```
let number: u32 = "14"
// 编译器会发生错误
```

#### 内置数据类型
- 整数数字
- 浮点数
- 布尔型
- 字符

##### 数字：整数和浮点数
| 长度 | 有符号 | 无符号 |
| - | - | - |
| 8位 | i8 | u8 |
| 与体系结构相关 | isize | usize |
`isize` `uszie` 类型取决于运行程序的计算机类型。 64位系统使用64位类型。 默认浮点数`f64`。   

#### 布尔值: True 或 false
`bool` 类型有两个可能值: `true`或`false`。  

#### 文本：字符或字符串
字符 `char`类型是最基元的文本类型。
```
let uppercase_s = 'S';
let lowercase_f = 'f';
let smiley_face = '😀';
```
字符串 `str` 类型也称为"字符串切片",它是字符串数据的一种视图。字符串字面量的类型都是`&str`。  
对于字符串未知 如用户输入等场景，Rust具有另一个名为`String`的字符串类型。此类型在堆上分配。  
``` 
// 使用: char 注释语法声明字符变量
let character_1: char = 'S';
let character_2: char = 'f';

// 通过编译器推断数据类型
let smiley_face = '😀';

//
let string_1 = "miley ";

let string_2: &str = "ace";
```

### 元组和结构定义数据集合
#### 元组
```
let tuple_e = ('E', 5i32, true);

println!("Is '{}' the {}th letter of the alphabet? {}", tuple_e.0, tuple_e.1, tuple_e.2);
```

#### 结构
Rust支持三种结构类型: 经典结构、元组结构和单元结构。
```
// 经典 C结构 最常用
struct Student { name: String, level: u8, remote: bool }

// 元组
struct Grades(char, char, char, char, f32);

// 单元结构最常用作标记。 
struct Unit;
```
实例化结构
```
let user_1 = Student { name: String::from("Constance Sharma"), remote: true, level: 2 };
let user_2 = Student { name: String::from("Dyson Tan"), level: 5, remote: false };

let mark_1 = Grades('A', 'A', 'B', 'A', 3.75);
let mark_2 = Grades('B', 'A', 'A', 'C', 3.25);

println!("{}, level {}. Remote: {}. Grades: {}, {}, {}, {}. Average: {}", user_1.name, user_1.level, user_1.remote, mark_1.0, mark_1.1, mark_1.2, mark_1.3, mark_1.4);
```
#### 字符串文本转为String类型
编译器建议使用`.to_string()`函数进行转换。  

### 为复合数据使用枚举变量
Rust中提及的枚举通常称为代数数据类型。  
```
enum WebEvent {
  // 没有关联的数据类型或数据
  WELoad,
  // 具有两个数据类型分别为String和char的字段
  WEKeys(String, char),
  // 包含命名字段为x和y以及字段的数据类型为 i64 的匿名结构。 
  WEClick { x: i64, y: i64 }
}
```
#### 实例化枚举
```
struct KeyPress(String, char);
struct MouseClick { x: i64, y: i64 };

enum WebEvent { WELoad(bool), WEClick(MouseClick), WEKeys(KeyPress) };

// 简单变体
let we_load = WebEvent::WELoad(true);

// 结构变体
let click = MouseClick { x: 100, y: 250 };
let we_click = WebEvent::WEClick(click);

// 元组变量
let keys = KeyPress(String::from("Ctrl+"), 'N');
let we_key = WebEvent::WEKeys(keys);

```

通过 `#[derive(Debug)]` 语法可以在代码执行期间查看某些在标准输出中无法查看的值。  

### Rust中使用函数
Rust中函数定义以`fn`关键字开头。
```
fn main() {
  println!("Hello, world");

  let formal = "Formal: Goodbye.";
  let casual = "Casual: See you later!";
  goodbye(formal);
  goodbye(casual);
}

fn goodbye(message: &str) {
  println!("\n{}", message);
}
```
#### 返回值
`-> <type>`。
```
fn divide_by_5(num: u32) -> u32 {
  if num == 0 {
    // 显式使用 return 关键字提前从函数返回
    return 0;
  }
  num / 5
}
```
#### 查看签名
函数声明的第一部分称为函数签名。  


### 使用 Rust 中的 if/else 表达式测试条件
#### 创建和使用数组
```
// 未指定长度的逗号分隔的值列表
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// 初始值后跟一个分号，然后是数组长度
let bytes = [0; 5];
```
编译时，数组签名`[T; size]`.  
- 数组的每个元素都具有相同的数据类型。数据类型永远不会更改。
- 数组大小是固定的，长度永远不会更改。 

如果尝试使用不在允许范围内的索引访问数组中的元素，编译器将返回错误。  

#### 浏览矢量数据类型
矢量存储数据类型相同的多个值，向量的大小或长度可以随时增大或减小。   
声明和初始化向量的常用方法是使用`vec!`宏。  
```
let three_nums = vec![15, 3, 46];
println!("Initial vector: {:?}", three_nums);

let zeroes = vec![0; 5];
println!("Zeroes: {:?}", zeroes);

// 在向量末尾添加和删除值。
let mut fruit = Vec::new();

fruit.push("Apple");
fruit.push("Banana");
fruit.push("Cherry");

println!("Pop off: {:?}", fruit.pop());
```
### 使用 if/esle 条件
Rust中的`if`块也可充当表达式。
```
let formal = true;
let greeting = if formal {
  "Good day to you."
} else {
  "Hey!"
};
println!("{}", greeting)
```

### 使用哈希映射
`HashMap<K, V>`类型通过映射每个键`K`及其值`V`来存储数据。  
```
use std::collections::HashMap;
let mut reviews: HashMap<String, String> = HashMap::new();

reviews.insert(String::from("Ancient Roman History"), String::from("Very accurate."));
reviews.insert(String::from("Programming in Rust"), String::from("Great examples."));
```
`use` 类似于其他编程语言所述的导入。  
#### 获取键值
```
let book: &str = "Programming in Rust";
println!("\nReview for \'{}\': {:?}", book, reviews.get(book));
// Review for 'Programming in Rust': Some("Great examples.")
// 由于 get 方法返回 Option<&Value> 类型，因此 Rust 使用"Some()"表示法包装方法调用的结果。
```
#### 删除键值对
```
let obsolete: &str = "Ancient Roman History";
reviews.remove(obsolete);

println!("{:?}", reviews.get(obsolete));
// None
```
### 使用 for、while、和 loop 表达式
Rust 提供三种循环：
- `loop`: 在发生手动停止前重复代码
- `while`: 在条件一直为true时重复代码
- `for`: 对集合中的所有值重复代码

`loop` 可添加特定代码停止，也可输入Ctrl+C等键盘指令停止。  
```
let mut counter = 1;

let stop_loop = loop {
  counter *= 2;
  if counter > 100 {
    break counter;
  }
};
// break when counter = 128
println!("counter = {}.", stop_loop)
```
断点返回相同类型的值。值类型都必须为整数、字符串或布尔等。未显示返回程序将表达式结果解释为空元组`()`。  
#### 循环while语句
```
while counter < 5 {
  println!("We loop a while...");
  counter = counter + 1;
}
```
`for` 循环使用临时变量作为迭代器。该变量在循环表达式的开始位置隐式声明，并且每次迭代都会设置当前值。  
```
let big_birds = ["ostrich", "peacock", "stork"];
for bird in big_birds.iter() {
  println!("{}", bird);
}

// 范围表达式 a..b
for number in 0..5 {
  println!("{}", number * 2);
}
```

### 在Rust中处理错误
#### 伴随着 panic 的严重错误！
`panic!`宏将输出一条错误消息、清理资源、然后退出程序。  
```
let v = vec![0, 1, 2, 3];
println!("{}", v[6]);// this will cause a panic!
```
#### 使用Option类型处理缺失
`Option<T>`在Rust代码中的使用非常广泛。它可用于处理可能存在或可能为空的值。如果要在Rust中对可选字符串建模，则需要将其显示包装在`Option`类型中:`Option<String>`。
```
enum Option<T> {
  None,   // The value doesn't exist
  Some(T) // The value exists
}

let fruits = vec!["banana", "apple", "cocount", "orange", "strawberry"];

let non_existent = fruits.get(99);
println!("{:?}", non_existent);
// None
```
#### 模式匹配
可利用`match`运算符，通过提供模式来控制程序流。  
```
let fruits = vec!["banana", "apple", "cocount", "orange", "strawberry"];
for &index in [0, 2, 99].iter() {
  match fruits.get(index) {
    Some(&"coconut") => println!("Coconuts are awesome!!!"),
    Some(fruit_name) => println!("It's a delicious {}!", fruit_name),
    None => println!("There is no fruit! :("),
  }
}
```
使用match表达式注意规则：
- 按照从上到下的顺序对`match` arm进行评估。必须在一般事例之前定义具体事例，否则它们将无法进行匹配和评估。 
- `match` arm必须涵盖输入类型可能具有的每个可能值。如果你尝试根据非详尽模式列表进行匹配，则会出现编译器错误。

#### if let 表达式
```
let a_number = Option<u8> = Some(7);
if let Some(7) = a_number {
  println!("That's my lucky number!");
}
```

#### 使用`unwrap`和`expect`
`unwrap`方法直接访问`Option`类型内部值。如果变体是`None`，则此方法将会panic。  
`expect`作用与`unwrap`相同，但它提供由第二个参数提供的自定义panic消息  
考虑使用下列方法之一：
- 使用模式匹配显式处理`None`案例。
- 调用类似的非panic方法，例如`unwrap_or`。

#### 使用 Result 类型处理错误
```
#[derive(Debug)]
struct DivisionByZeroError;

fn safe_division(dividend: f64, divisor: f64) -> Result<f64, DivisionByZeroError> {
  if divisor == 0.0 {
    Err(DivisionByZeroError)
  } else {
    Ok(dividend / divisor)
  }
}

fn main() {
  println!("{:?}", safe_division(9.0, 3.0)); // Ok(3.0)
  println!("{:?}", safe_division(4.0, 0.0)); // Err(DivisionByZeroError)
  println!('{:?}', safe_division(0.0, 2.0)); // Ok(0.0)
}
```

### Rust如何管理内存

#### 什么是所有权
**作用域界定规则**  
Rust中，作用域常常由大括号`{}`表示、常见作用域包括函数体、`if` `else` `match`分支。  
**所有权和删除**  
Rust给范围的概念增加了一个转折。当对象超出范围时，便会将其”删除“。删除变量会释放与其关联的所有资源。  
**移动语义**  
有时，我们希望将某个项的所有权从一个绑定转移到另一个绑定。Rust中，”转义所有权“被称为”移动“。
```
let mascot = String::from("ferris");
let ferris = mascot;
```
`String`的所有权从`mascot`转移到`ferris`之后，将无法再使用`mascot`变量。  
**函数中的所有权**  
将某个内容作为参数传递给函数，会将该内容移动到函数中。其他编程语言变量的值在传递给我们的函数之前可以隐式复制。但在rust中，此操作不会发生。  
**复制而不是转移**  
复制数字的成本低，因此复制这些值是有意义的。复制字符串、向量或其他复杂类型的成本可能高昂，因此它们没有实现`Copy`特征，而是被移动。  
显式复制
```
fn process(s: String) {}

fn main() {
  let s = String::from("Hello, world!");
  process(s.clone());
  process(s);
}
```

#### 了解借用
通过引用，可以”借用“一些值，而无需拥有它们。&  
**改变借用的值**  
```
fn main() {
  let mut greeting = String::from("hello");
  change(&mut greeting);
}

fn change(text: &mut String) {
  text.push_str(", world");
}
```
**借用和可变引用**  
代码必须同时实现以下任一定义，但不能同时实现这两个定义：  
- 一个或多个不可变引用(`&T`)
- 恰好一个可变引用(`&mut T`)

#### 使用生存期验证引用
声明周期使Rust能够在不产生垃圾收集性能开销的情况下确保内存安全。  
**在函数中注释生存期**  
多个生存期时，生存期批注帮助编译器了解它需要使用哪个生存期，以确保引用在运行时有效。  
```
fn longest_word<'a>(x: &'a String, y: &'a String) -> &'a String {
  if x.len() > y.len() {
    x
  } else {
    y
  }
}
```
**在类型中批注生存期**  
```
#[derive(Debug)]
struct Highlight<'document>(&'document str);
```
#### 泛型数据类型
是根据其他部分未知类型定义的类型。使用泛型类型时，可以指定所需操作，而不必考虑定义类型持有的内部类型。  
#### 使用特征定义共享行为
特征是一组类型可实现的通用接口。  
```
trait Area {
  fn area(&self) -> f64;
}
struct Circle {
  radius: f64,
}
struct Rectangle {
  width: f64,
  height: f64,
}

impl Area for Circle {
  fn area(&self) -> f64 {
    use std::f64::consts::PI;
    PI * self.radius.powf(2.0)
  }
}
impl Area for Rectangle {
  fn area(&self) -> f64 {
    self.width * self.height
  }
}
```
#### 使用派生特征
`Point`类型没有实现以下特征：
- `Debug`特征，允许使用`{:?}`格式说明符来设置类型的格式，在面向程序员的调试上下文中使用。
- `Display`特征，允许使用`{}`格式说明符来设置类型的格式，与`Debug`类似。但`Display`更适合面向用户的输出。  
- `PartialEq`特征，允许比较实现器是否相等。 
Rust编译器可以使用`#[derive(Trait)]`属性自动为我们实现`Debug`和`PartialEq`特征
```
#[derive(Debug, PartialEq)]
struct Point {
  x: i32,
  y: i32,
}

use std::fmt;
impl fmt::Display for Point {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    write!(f, "({}, {})", self.x, self.y)
  }
}

fn main() {
  let p1 = Point { x: 1, y: 2 };
  let p2 = Point { x: 4, y: -3 };

  if p1 == p2 {
    println!("equal!");
  } else {
    println!("not equal!");
  }

  println!("{}", p1);
  println!("{?:}", p1);
}
```

#### 使用特征边界和泛型函数
我们可以通过定义函数的方式接受不同类型的函数，因为当类型实现特征时，可以将其抽象的视为该特征。  
#### 使用迭代器
Rust中所有迭代器都会实现名为`Iterator`的特征，该特征在标准库中定义，并用于通过集合实现迭代器。  
创建自己的迭代器涉及两个步骤：
1. 创建一个结构来保留迭代器的状态。
2. 实现该结构的迭代器。

```
#[derive(Debug)]
struct Counter {
  length: usize,
  count: usize,
}

impl Counter {
  fn new(length: usize) -> Counter {
    Counter {
      count: 0,
      length,
    }
  }
}

impl Iterator for Counter {
  type Item = usize;

  fn next(&mut self) -> Option<Self::Item> {
    self.count += 1;
    if self.count <= self.length {
      Some(self.count)
    } else {
      None
    }
  }
}

fn main() {
  for number in Counter::new(10) {
    println!("{}", number);
  }
}
```
### 探索模块、包和第三方箱
#### 理解代码组织背后的概念
* 包
  * 包含一个或多个crate内的功能
  * 包括有关如何生成这些crate的信息。该信息位于`Cargo.toml`文件中。
* 箱
  * 是编译单元，即Rust编译器可以运行的最小代码量。
  * 编译完成后，系统将生成可执行文件或库文件。
  * 其中包含未命名的隐式顶层模块。
* 模块
  * 是箱内的代码组织单位(或为嵌套形式)。
  * 可以具有跨其他模块的递归定义。

如果包中包含`src/main.rs`和`src/lib.rs`，则其中有两个箱：库文件和二进制文件。它们的名称与包相同。  
模块是项的集合：
- 常量
- 类型别名
- 函数
- 结构
- 枚举
- Traits
- `impl`块
- 其他模块

如果源文件中存在`mod`声明，则在运行编译器之前，系统会将模块文件的内容插入到`mod`声明在源文件中的所在位置。系统不会对模块进行单独编译，只会编译箱。  

#### 向项目中添加第三方箱


