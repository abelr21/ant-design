webpackJsonp([154,210],{

/***/ 770:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "模态对话框。"
	    ],
	    [
	      "h2",
	      "何时使用"
	    ],
	    [
	      "p",
	      "需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 ",
	      [
	        "code",
	        "Modal"
	      ],
	      " 在当前页面正中打开一个浮层，承载相应的操作。"
	    ],
	    [
	      "p",
	      "另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 ",
	      [
	        "code",
	        "ant.Modal.confirm()"
	      ],
	      " 等方法。"
	    ]
	  ],
	  "meta": {
	    "type": "Feedback",
	    "category": "Components",
	    "subtitle": "对话框",
	    "title": "Modal",
	    "filename": "components/modal/index.zh-CN.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#何时使用"
	        },
	        "何时使用"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#API"
	        },
	        "API"
	      ]
	    ]
	  ],
	  "api": [
	    "section",
	    [
	      "h2",
	      "API"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "参数"
	          ],
	          [
	            "th",
	            "说明"
	          ],
	          [
	            "th",
	            "类型"
	          ],
	          [
	            "th",
	            "默认值"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "visible"
	          ],
	          [
	            "td",
	            "对话框是否可见"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "confirmLoading"
	          ],
	          [
	            "td",
	            "确定按钮 loading"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "title"
	          ],
	          [
	            "td",
	            "标题"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "closable"
	          ],
	          [
	            "td",
	            "是否显示右上角的关闭按钮"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "true"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onOk"
	          ],
	          [
	            "td",
	            "点击确定回调"
	          ],
	          [
	            "td",
	            "function"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onCancel"
	          ],
	          [
	            "td",
	            "点击遮罩层或右上角叉或取消按钮的回调"
	          ],
	          [
	            "td",
	            "function(e)"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "width"
	          ],
	          [
	            "td",
	            "宽度"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "number"
	          ],
	          [
	            "td",
	            "520"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "footer"
	          ],
	          [
	            "td",
	            "底部内容"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td",
	            "确定取消按钮"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "okText"
	          ],
	          [
	            "td",
	            "确认按钮文字"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "确定"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "cancelText"
	          ],
	          [
	            "td",
	            "取消按钮文字"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "取消"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "maskClosable"
	          ],
	          [
	            "td",
	            "点击蒙层是否允许关闭"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "true"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "style"
	          ],
	          [
	            "td",
	            "可用于设置浮层的样式，调整浮层位置等"
	          ],
	          [
	            "td",
	            "object"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "wrapClassName"
	          ],
	          [
	            "td",
	            "对话框外层容器的类名"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "afterClose"
	          ],
	          [
	            "td",
	            "Modal 完全关闭后的回调"
	          ],
	          [
	            "td",
	            "function"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h4",
	      "清空旧数据"
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        [
	          "code",
	          "<Modal />"
	        ],
	        " 组件有标准的 React 生命周期，关闭后状态不会自动清空。\n如果希望每次打开都是新内容，需要自行手动清空旧的状态。或者打开时给 Modal 设置一个",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://github.com/ant-design/ant-design/issues/4165"
	          },
	          "全新的 key"
	        ],
	        "， React 会渲染出一个全新的对话框。"
	      ],
	      [
	        "pre",
	        {
	          "lang": null,
	          "highlighted": "<span class=\"token operator\">&lt;</span>Modal key<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>newRandomKey} visible<span class=\"token operator\">=</span>{this<span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible} <span class=\"token operator\">/</span><span class=\"token operator\">></span>"
	        },
	        [
	          "code",
	          "<Modal key={this.state.newRandomKey} visible={this.state.visible} />"
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "Modal.xxx()"
	    ],
	    [
	      "p",
	      "包括："
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "Modal.info"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "Modal.success"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "Modal.error"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "Modal.warning"
	          ]
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "Modal.confirm"
	          ]
	        ]
	      ]
	    ],
	    [
	      "p",
	      "以上均为一个函数，参数为 object，具体属性如下："
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "参数"
	          ],
	          [
	            "th",
	            "说明"
	          ],
	          [
	            "th",
	            "类型"
	          ],
	          [
	            "th",
	            "默认值"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "title"
	          ],
	          [
	            "td",
	            "标题"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "content"
	          ],
	          [
	            "td",
	            "内容"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onOk"
	          ],
	          [
	            "td",
	            "点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭"
	          ],
	          [
	            "td",
	            "function"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onCancel"
	          ],
	          [
	            "td",
	            "取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭"
	          ],
	          [
	            "td",
	            "function"
	          ],
	          [
	            "td",
	            "无"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "width"
	          ],
	          [
	            "td",
	            "宽度"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "number"
	          ],
	          [
	            "td",
	            "416"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "iconType"
	          ],
	          [
	            "td",
	            "图标 Icon 类型"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "question-circle"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "okText"
	          ],
	          [
	            "td",
	            "确认按钮文字"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "确定"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "cancelText"
	          ],
	          [
	            "td",
	            "取消按钮文字"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "取消"
	          ]
	        ]
	      ]
	    ],
	    [
	      "style",
	      "\n.code-box-demo .ant-btn {\n  margin-right: 8px;\n}\n"
	    ]
	  ]
	};

/***/ }

});