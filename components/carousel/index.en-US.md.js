webpackJsonp([187,210],{

/***/ 630:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "A carousel component. Scales with its container."
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
	          "When there is a group of content on the same level."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "When there is insufficient content space, it can be used to save space in the form of a resolving door."
	        ]
	      ],
	      [
	        "li",
	        [
	          "p",
	          "Commonly used for a group of pictures/cards."
	        ]
	      ]
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Data Display",
	    "title": "Carousel",
	    "filename": "components/carousel/index.en-US.md"
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
	            "effect"
	          ],
	          [
	            "td",
	            "Animation effect, either ",
	            [
	              "code",
	              "scrollx"
	            ],
	            " or ",
	            [
	              "code",
	              "fade"
	            ]
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "scrollx"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "dots"
	          ],
	          [
	            "td",
	            "Whether to show the dots at the bottom of the gallery"
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
	            "vertical"
	          ],
	          [
	            "td",
	            "Whether to use a vertical display"
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
	            "autoplay"
	          ],
	          [
	            "td",
	            "Whether to scroll automatically"
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
	            "easing"
	          ],
	          [
	            "td",
	            "Transition name"
	          ],
	          [
	            "td",
	            "string"
	          ],
	          [
	            "td",
	            "linear"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "beforeChange"
	          ],
	          [
	            "td",
	            "Callback function called before the current index changes"
	          ],
	          [
	            "td",
	            "function(from, to)"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "afterChange"
	          ],
	          [
	            "td",
	            "Callback function called after the current index changes"
	          ],
	          [
	            "td",
	            "function(current)"
	          ]
	        ]
	      ]
	    ],
	    [
	      "p",
	      "For more info on the parameters, refer to the ",
	      [
	        "a",
	        {
	          "title": null,
	          "href": "https://github.com/akiran/react-slick"
	        },
	        "https://github.com/akiran/react-slick"
	      ]
	    ],
	    [
	      "style",
	      "\n.ant-carousel .slick-slide {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: #364d79;\n  color: #fff;\n  overflow: hidden;\n}\n"
	    ]
	  ]
	};

/***/ }

});