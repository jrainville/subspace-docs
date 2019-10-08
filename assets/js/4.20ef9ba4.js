(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{206:function(t,s,a){"use strict";var n=a(72);a.n(n).a},210:function(t,s,a){"use strict";a.r(s);var n={},i=(a(206),a(0)),o=Object(i.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",[a("div",{staticStyle:{display:"block","flex-basis":"33%"}},[a("strong",[t._v("Event Tracking & Event Sourcing")]),t._v("\n      You can track events and react to their values. With Subspace observables doing event sourcing is easy.\n    ")]),t._v(" "),a("div",{staticStyle:{display:"block",width:"100%"}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{staticClass:"language-js"},[a("code",[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v(" $average"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" $latest "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@status-im/subspace"')]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),a("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" rating$ "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" Product"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("events"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("Rating")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("track")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("map")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v('"rating"')]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("pipe")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token function"},[t._v("map")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token parameter"},[t._v("x")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),a("span",{staticClass:"token function"},[t._v("parseInt")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("x"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\nrating$"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("pipe")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token function"},[t._v("$latest")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token number"},[t._v("5")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" "),a("span",{staticClass:"token function"},[t._v("$average")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("subscribe")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token parameter"},[t._v("rating")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  console"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("log")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v('"average rating of the last 5 events is "')]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("+")]),t._v(" rating"),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])])]),t._v(" "),a("div",[a("div",{staticStyle:{display:"block","flex-basis":"33%"}},[a("strong",[t._v("Tracking State")]),t._v("\n      You can track changes to a contract state variable, by specifying the view function and arguments to call and query the contract.\n    ")]),t._v(" "),a("div",{staticStyle:{display:"block",width:"100%"}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{staticClass:"language-js"},[a("code",[a("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" productTitle$ "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" ProductList"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("methods"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("products")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token number"},[t._v("0")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("track")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("map")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v('"title"')]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\nproductTitle$"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("subscribe")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token parameter"},[t._v("title")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" console"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("log")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v('"product title is "')]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("+")]),t._v(" title"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])]),t._v(" "),a("div",[a("div",{staticStyle:{display:"block","flex-basis":"33%"}},[a("strong",[t._v("Tracking balances")]),t._v("\n      You can also track changes in both ETH and ERC20 token balances\n    ")]),t._v(" "),a("div",{staticStyle:{display:"block",width:"100%"}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{staticClass:"language-js"},[a("code",[t._v("Contract"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("trackBalance")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("subscribe")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token parameter"},[t._v("balance")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  console"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("log")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v('"ETH balance is "')]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" balance"),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\nContract"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("trackBalance")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v('"0x744d70fdbe2ba4cf95131626614a1763df805b9e"')]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("subscribe")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token parameter"},[t._v("balance")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  console"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("log")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v('"SNT balance is "')]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" balance"),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])])]),t._v(" "),a("div",[a("div",{staticStyle:{display:"block","flex-basis":"33%"}},[a("strong",[t._v("React Integration")]),t._v("\n      Subspace can make any react component compatible with observables so you easily reactive components\n    ")]),t._v(" "),a("div",{staticStyle:{display:"block",width:"100%"}},[a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{staticClass:"language-js"},[a("code",[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v(" observe "),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"@status-im/subspace/react"')]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),a("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" "),a("span",{staticClass:"token function-variable function"},[t._v("ProductComponent")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token parameter"},[a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v(" maxRating"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" minRating"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" averageRating "),a("span",{staticClass:"token punctuation"},[t._v("}")])]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  "),a("span",{staticClass:"token keyword"},[t._v("return")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("ul"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n    "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("li"),a("span",{staticClass:"token operator"},[t._v(">")]),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("b"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("minimum rating"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("b"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("minRating"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("li"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n    "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("li"),a("span",{staticClass:"token operator"},[t._v(">")]),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("b"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("maximum rating"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("b"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("maxRating"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("li"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n    "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("li"),a("span",{staticClass:"token operator"},[t._v(">")]),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("b"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("average rating"),a("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("b"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("averageRating"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("li"),a("span",{staticClass:"token operator"},[t._v(">")]),t._v("\n  "),a("span",{staticClass:"token operator"},[t._v("<")]),a("span",{staticClass:"token operator"},[t._v("/")]),t._v("ul"),a("span",{staticClass:"token operator"},[t._v(">")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),a("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" ReactiveProductComponent "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),a("span",{staticClass:"token function"},[t._v("observe")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("ProductComponent"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),a("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" Product "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" subspace"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("contract")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("abi"),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v(" address"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),a("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" rating$ "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" Product"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("events"),a("span",{staticClass:"token punctuation"},[t._v(".")]),t._v("Rating"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("track")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("map")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v('"rating"')]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("pipe")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token function"},[t._v("map")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token parameter"},[t._v("x")]),t._v(" "),a("span",{staticClass:"token operator"},[t._v("=>")]),t._v(" "),a("span",{staticClass:"token function"},[t._v("parseInt")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("x"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\nReactDOM"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("render")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("\n  "),a("span",{staticClass:"token operator"},[t._v("<")]),t._v("ReactiveProductComponent\n    maxRating"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("rating$"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("pipe")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token function"},[t._v("$max")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n    minRating"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("rating$"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("pipe")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token function"},[t._v("$min")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n    averageRating"),a("span",{staticClass:"token operator"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("rating$"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("pipe")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token function"},[t._v("$average")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n  "),a("span",{staticClass:"token operator"},[t._v("/")]),a("span",{staticClass:"token operator"},[t._v(">")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n  document"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("getElementById")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'hello-example'")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[t._v(")")]),a("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])])])])])}],!1,null,"4a74cfb0",null);s.default=o.exports},72:function(t,s,a){}}]);