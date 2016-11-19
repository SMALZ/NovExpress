var fortuneCookies = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];


//加入到exports中  全局变量的输出
//在这也可以不加 因为在meadowlark进行请求调用了，两种方式都行
exports.getFortune = function() {
  var idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
}
