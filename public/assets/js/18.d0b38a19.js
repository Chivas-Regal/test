(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{589:function(t,a,s){"use strict";s.r(a);var n=s(5),e=function(t){t.options.__data__block__={mermaid_382ee14e:"graph TB;\n字符--\x3e大写字母 & 小写字母 & 其他字符\n大写字母--\x3eA & B & C & D & E\n小写字母--\x3ea & b & c & d & e\n其他字符--\x3e回车 & 空格 & 逗号 & 句号 \n数字--\x3e一位数 & 二位数 & 三位数\n一位数--\x3e1 & 2 & 3 & 4 & 5 \n二位数--\x3e10 & 20 & 30 & 40 & 50\n三位数--\x3e100 & 200 & 300 & 400 & 500 \n",mermaid_382ee16a:"graph TB;\n字符--\x3e数字\n字符--\x3e大写字母 & 小写字母 & 其他字符\n大写字母--\x3eA & B & C & D & E\n小写字母--\x3ea & b & c & d & e\n其他字符--\x3e回车 & 空格 & 逗号 & 句号 \n数字--\x3e一位数 & 二位数 & 三位数\n一位数--\x3e1 & 2 & 3 & 4 & 5 \n二位数--\x3e10 & 20 & 30 & 40 & 50\n三位数--\x3e100 & 200 & 300 & 400 & 500 \n"}},r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念：")]),t._v(" "),s("p",[t._v("并查集是指在一些有 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("N")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 个元素的集合应用问题中，我们通常是在开始时让每个元素构成一个单元素的集合，然后按一定顺序将属于同一组的元素所在的集合合并，"),s("br"),t._v("\n其间要反复查找一个元素在哪个集合中。"),s("br"),t._v("\n这一类问题近几年来反复出现在信息学的国际国内赛题中。"),s("br"),t._v("\n其特点是看似并不复杂，但数据量极大，若用正常的数据结构来描述的话，往往在空间上过大，计算机无法承受；"),s("br"),t._v("\n即使在空间上勉强通过，运行的时间复杂度也极高，根本就不可能在比赛规定的运行时间（ "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])]),t._v(" ～ "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("3")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("3")])])])]),t._v(" 秒）内计算出试题需要的结果，只能用并查集来描述。")]),t._v(" "),s("div",{staticClass:"custom-block theorem"},[s("p",{staticClass:"title"},[t._v("并查集")]),s("p",[t._v("并查集是一种树型的数据结构，"),s("br"),t._v("\n用于处理一些不相交集合（disjoint sets）的合并及查询问题。"),s("br"),t._v("\n常常在使用中以森林来表示。")]),t._v(" "),s("div",{staticClass:"custom-block right"},[s("p",[t._v("来自 "),s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%B9%B6%E6%9F%A5%E9%9B%86/9388442",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科"),s("OutboundLink")],1)])])]),s("h2",{attrs:{id:"过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[t._v("#")]),t._v(" 过程：")]),t._v(" "),s("Mermaid",{attrs:{id:"mermaid_382ee14e",graph:t.$dataBlock.mermaid_382ee14e}}),s("p",[t._v("此时我们想要访问 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("200")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("200")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"mord"},[t._v("0")]),s("span",{staticClass:"mord"},[t._v("0")])])])]),t._v(" 的祖先（数字）"),s("br"),t._v("\n但 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("200")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("200")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"mord"},[t._v("0")]),s("span",{staticClass:"mord"},[t._v("0")])])])]),t._v(" 不能直接知道祖先是谁，它要先问他的爸爸（三位数）"),s("br"),t._v("\n但三位数也不知道祖先是谁，于是三位数去问他的爸爸（数字）"),s("br"),t._v("\n数字一想，我没有爸爸了，所以数字就是祖先。")]),t._v(" "),s("p",[t._v("在访问中，我们可以看出，数字、一位数、二位数、三位数、"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])]),t._v("、"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("2")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("2")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("2")])])])]),t._v("、"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("3")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("3")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("3")])])])]),t._v("、"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("4")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("4")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("4")])])])]),t._v("、"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("5")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("5")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("5")])])])]),t._v("、"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("10")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("10")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mord"},[t._v("0")])])])]),t._v("、"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("20")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("20")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"mord"},[t._v("0")])])])]),t._v(".....的祖先都是数字"),s("br"),t._v("\n所以它们是一个集。"),s("br"),t._v("\n同理，字符家族谱中的所有单位也是一个集合。\n那么问题来了，两家因为觉得关系太好了想要合并，它们该怎么做呢？"),s("br"),t._v("\n不妨让数字认另一个字符为爸爸(我们要尽可能利用已知资源来进行合并，否则操作较麻烦，只转认两方祖先可以有效减小树的深度)"),s("br"),t._v("\n于是成了以下家族谱")]),t._v(" "),s("Mermaid",{attrs:{id:"mermaid_382ee16a",graph:t.$dataBlock.mermaid_382ee16a}}),s("p",[t._v("这就是并查集的过程内容，那么为了普遍性我们该怎么说呢")]),t._v(" "),s("h2",{attrs:{id:"操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),s("p",[t._v("我们通常寻找一个人的最高领导者，但每一层都是单独管理，等于说这一层的人不知道上上层的人是谁，所以他要向直系上层询问，再由直系上层向上层询问"),s("br"),t._v("\n依次循环，知道找出没有上层的人为止，那个人就会是最高领导者"),s("br"),t._v("\n在归类中我们也可以利用已知函数进行模拟数组为 "),s("code",[t._v("find(x)")]),t._v(" ，而合并中我们也可以只将两个集的最高领导人合并（这里使用认父方式)"),s("br"),t._v("\n我们在操作时会经常用到两个函数")]),t._v(" "),s("h3",{attrs:{id:"_1-find函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-find函数"}},[t._v("#")]),t._v(" 1.find函数")]),t._v(" "),s("p",[t._v("递归写法：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inline")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查找x的最高领导人")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" nod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("非递归写法")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inline")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查找x的最高领导人")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" nod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n        x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"_2-merge函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-merge函数"}},[t._v("#")]),t._v(" 2.merge函数")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inline")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将a与b合为同集合 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" nod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])],1)}),[],!1,null,null,null);"function"==typeof e&&e(r);a.default=r.exports}}]);