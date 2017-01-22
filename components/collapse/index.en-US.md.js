webpackJsonp([181,210],{

/***/ 656:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "A content area which can be collapsed and expanded."
	    ],
	    [
	      "h2",
	      "When To Use"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "Can be used to group or hide complex regions to keep the page clean."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          [
	            "code",
	            "Accordion"
	          ],
	          " is a special kind of ",
	          [
	            "code",
	            "Collapse"
	          ],
	          ", which allows only one panel to be expanded at a time."
	        ]
	      ]
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Data Display",
	    "title": "Collapse",
	    "cols": 1,
	    "filename": "components/collapse/index.en-US.md"
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
	      "Collapse"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Property"
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
	            "Default"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "activeKey"
	          ],
	          [
	            "td",
	            "key of the active panel"
	          ],
	          [
	            "td",
	            "string[]",
	            "|",
	            "string"
	          ],
	          [
	            "td",
	            "No default value. In ",
	            [
	              "code",
	              "accordion"
	            ],
	            " mode, it's the key of the first panel."
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "defaultActiveKey"
	          ],
	          [
	            "td",
	            "key of the initialized active panel"
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
	            "onChange"
	          ],
	          [
	            "td",
	            "a callback function, which can be executed when you switch the panels"
	          ],
	          [
	            "td",
	            "Function"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ],
	    [
	      "h3",
	      "Collapse.Panel"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "Property"
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
	            "Default"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "key"
	          ],
	          [
	            "td",
	            "corresponds to the ",
	            [
	              "code",
	              "activeKey"
	            ]
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
	            "header"
	          ],
	          [
	            "td",
	            "title of the panel"
	          ],
	          [
	            "td",
	            "string",
	            "|",
	            "ReactNode"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ]
	  ]
	};

/***/ }

});