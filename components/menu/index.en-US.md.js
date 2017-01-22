webpackJsonp([159,210],{

/***/ 752:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "Menu list of Navigation."
	    ],
	    [
	      "h2",
	      "When To Use"
	    ],
	    [
	      "p",
	      "Navigation menu is important for a website, it helps users jump from one site section to another quickly. Mostly, it includes top navigation and side navigation. Top navigation provides all the category and functions of the website. Side navigation provides the Multi-level structure of the website."
	    ],
	    [
	      "p",
	      "More layout and samples: ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "/docs/spec/layout"
	        },
	        "layout"
	      ],
	      "."
	    ],
	    [
	      "pre",
	      {
	        "lang": "html",
	        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>Menu<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>SubMenu<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>SubMenuItem<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>"
	      },
	      [
	        "code",
	        "<Menu>\n  <Menu.Item>Menu</Menu.Item>\n  <SubMenu title=\"SubMenu\">\n    <Menu.Item>SubMenuItem</Menu.Item>\n  </SubMenu>\n</Menu>"
	      ]
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "cols": 1,
	    "type": "Navigation",
	    "title": "Menu",
	    "filename": "components/menu/index.en-US.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#When-To-Use"
	        },
	        "When To Use"
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
	      "h3",
	      "Menu props"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Param"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default value"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "theme"
	          ],
	          [
	            "td",
	            "color of the theme"
	          ],
	          [
	            "td",
	            "string: ",
	            [
	              "code",
	              "light"
	            ],
	            " ",
	            [
	              "code",
	              "dark"
	            ]
	          ],
	          [
	            "td",
	            [
	              "code",
	              "light"
	            ]
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "mode"
	          ],
	          [
	            "td",
	            "type of the menu; vertical, horizontal, and inline modes are supported"
	          ],
	          [
	            "td",
	            "string: vertical horizontal inline"
	          ],
	          [
	            "td",
	            "vertical"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "selectedKeys"
	          ],
	          [
	            "td",
	            "array with the keys of currently selected menu items"
	          ],
	          [
	            "td",
	            "string[]"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "defaultSelectedKeys"
	          ],
	          [
	            "td",
	            "array with the keys of default selected menu items"
	          ],
	          [
	            "td",
	            "string[]"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "openKeys"
	          ],
	          [
	            "td",
	            "array with the keys of currently opened sub menus"
	          ],
	          [
	            "td",
	            "string[]"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "defaultOpenKeys"
	          ],
	          [
	            "td",
	            "array with the keys of default opened sub menus"
	          ],
	          [
	            "td"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onOpenChange"
	          ],
	          [
	            "td",
	            "called when open/close sub menu"
	          ],
	          [
	            "td",
	            "Function(openKeys: string[])"
	          ],
	          [
	            "td",
	            "noop"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onSelect"
	          ],
	          [
	            "td",
	            "callback of the selected item"
	          ],
	          [
	            "td",
	            "Function({ item, key, selectedKeys })"
	          ],
	          [
	            "td",
	            "none"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onDeselect"
	          ],
	          [
	            "td",
	            "callback of the deselected item, only supported for multiple mode"
	          ],
	          [
	            "td",
	            "Function({ item, key, selectedKeys })"
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
	            "onClick"
	          ],
	          [
	            "td",
	            "callback of the clicked menu item, params: {item, key, keyPath}"
	          ],
	          [
	            "td",
	            "function"
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
	            "style"
	          ],
	          [
	            "td",
	            "style of the root node"
	          ],
	          [
	            "td",
	            "object"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "inlineIndent"
	          ],
	          [
	            "td",
	            "indent px of inline menu item on each level"
	          ],
	          [
	            "td",
	            "number"
	          ],
	          [
	            "td",
	            "24"
	          ]
	        ]
	      ]
	    ],
	    [
	      "blockquote",
	      [
	        "p",
	        "More options in ",
	        [
	          "a",
	          {
	            "title": null,
	            "href": "https://github.com/react-component/menu#api"
	          },
	          "rc-menu"
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "Menu.Item props"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Param"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default value"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "disabled"
	          ],
	          [
	            "td",
	            "disabled or not"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "key"
	          ],
	          [
	            "td",
	            "unique id of the menu item"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "Menu.SubMenu props"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Param"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default value"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "disabled"
	          ],
	          [
	            "td",
	            "disabled or not"
	          ],
	          [
	            "td",
	            "boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "key"
	          ],
	          [
	            "td",
	            "unique id of the menu item"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td"
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
	            "title of the sub menu"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "children"
	          ],
	          [
	            "td",
	            "sub menus or sub menu items"
	          ],
	          [
	            "td",
	            "Arrat<MenuItem",
	            "|",
	            "SubMenu>"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onTitleClick"
	          ],
	          [
	            "td",
	            "callback of the clicked sub menu title"
	          ],
	          [
	            "td",
	            "Function({ eventKey, domEvent })"
	          ],
	          [
	            "td"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "Menu.ItemGroup props"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Param"
	          ],
	          [
	            "th",
	            "Description"
	          ],
	          [
	            "th",
	            "Type"
	          ],
	          [
	            "th",
	            "Default value"
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
	            "title of the group"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "children"
	          ],
	          [
	            "td",
	            "sub menu items"
	          ],
	          [
	            "td",
	            "MenuItem[]"
	          ],
	          [
	            "td"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "Menu.Divider"
	    ],
	    [
	      "p",
	      "divider line in between menu items, only used in vertical popup Menu or Dropdown Menu."
	    ]
	  ]
	};

/***/ }

});