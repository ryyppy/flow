/* @flow */ import type {TProgram} from '/Users/pas/Projects/flow/npm-flow-lib/src/astTypes.js';
(/*TFlowCommentBlock*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 2,
      "column": 0
    },
    "end": {
      "line": 2,
      "column": 0
    }
  },
  "range": [
    11,
    11
  ],
  "body": [],
  "comments": [
    {
      "type": "Block",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 10
        }
      },
      "range": [
        0,
        10
      ],
      "value": " test "
    }
  ]
}: TProgram);
(/*TFlowCommentLine*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 2,
      "column": 0
    },
    "end": {
      "line": 2,
      "column": 0
    }
  },
  "range": [
    8,
    8
  ],
  "body": [],
  "comments": [
    {
      "type": "Line",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 7
        }
      },
      "range": [
        0,
        7
      ],
      "value": " asdf"
    }
  ]
}: TProgram);
(/*TFlowParseError*/{
  "errors": [
    {
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 4
        },
        "end": {
          "line": 1,
          "column": 5
        }
      },
      "message": "Unexpected token ="
    },
    {
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 6
        },
        "end": {
          "line": 1,
          "column": 8
        }
      },
      "message": "Unexpected number"
    }
  ],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 9
    }
  },
  "range": [
    0,
    9
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 5
        }
      },
      "range": [
        0,
        5
      ],
      "declarations": [
        {
          "type": "VariableDeclarator",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 5
            }
          },
          "range": [
            4,
            5
          ],
          "id": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 5
              }
            },
            "range": [
              4,
              5
            ],
            "name": "=",
            "typeAnnotation": null,
            "optional": false
          },
          "init": null
        }
      ],
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 6
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "range": [
        6,
        9
      ],
      "expression": {
        "type": "Literal",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 6
          },
          "end": {
            "line": 1,
            "column": 8
          }
        },
        "range": [
          6,
          8
        ],
        "value": 42,
        "raw": "42"
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TArrayExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 2
    }
  },
  "range": [
    0,
    2
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 2
        }
      },
      "range": [
        0,
        2
      ],
      "expression": {
        "type": "ArrayExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 2
          }
        },
        "range": [
          0,
          2
        ],
        "elements": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TArrayPattern*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 11
    }
  },
  "range": [
    0,
    11
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 11
        }
      },
      "range": [
        0,
        11
      ],
      "declarations": [
        {
          "type": "VariableDeclarator",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 11
            }
          },
          "range": [
            4,
            11
          ],
          "id": {
            "type": "ArrayPattern",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 6
              }
            },
            "range": [
              4,
              6
            ],
            "elements": [],
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 11
              }
            },
            "range": [
              9,
              11
            ],
            "value": 42,
            "raw": "42"
          }
        }
      ],
      "kind": "var"
    }
  ],
  "comments": []
}: TProgram);
(/*TArrowFunctionExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 1
    },
    "end": {
      "line": 1,
      "column": 9
    }
  },
  "range": [
    1,
    9
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 1
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "range": [
        1,
        9
      ],
      "expression": {
        "type": "ArrowFunctionExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 1
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "range": [
          1,
          9
        ],
        "id": null,
        "params": [],
        "defaults": [],
        "rest": null,
        "body": {
          "type": "BlockStatement",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 7
            },
            "end": {
              "line": 1,
              "column": 9
            }
          },
          "range": [
            7,
            9
          ],
          "body": []
        },
        "async": false,
        "generator": false,
        "expression": false,
        "returnType": null,
        "typeParameters": null
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TAssignmentExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 6
    }
  },
  "range": [
    0,
    6
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 6
        }
      },
      "range": [
        0,
        6
      ],
      "expression": {
        "type": "AssignmentExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 6
          }
        },
        "range": [
          0,
          6
        ],
        "operator": "=",
        "left": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "name": "a",
          "typeAnnotation": null,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 6
            }
          },
          "range": [
            4,
            6
          ],
          "value": 42,
          "raw": "42"
        }
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TBinaryExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 6
    }
  },
  "range": [
    0,
    6
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 6
        }
      },
      "range": [
        0,
        6
      ],
      "expression": {
        "type": "BinaryExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 6
          }
        },
        "range": [
          0,
          6
        ],
        "operator": "==",
        "left": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "name": "a",
          "typeAnnotation": null,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 5
            },
            "end": {
              "line": 1,
              "column": 6
            }
          },
          "range": [
            5,
            6
          ],
          "name": "b",
          "typeAnnotation": null,
          "optional": false
        }
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TBlockStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 2
    }
  },
  "range": [
    0,
    2
  ],
  "body": [
    {
      "type": "BlockStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 2
        }
      },
      "range": [
        0,
        2
      ],
      "body": []
    }
  ],
  "comments": []
}: TProgram);
(/*TBreakStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 15
    }
  },
  "range": [
    0,
    15
  ],
  "body": [
    {
      "type": "ForStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 15
        }
      },
      "range": [
        0,
        15
      ],
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 7
          },
          "end": {
            "line": 1,
            "column": 15
          }
        },
        "range": [
          7,
          15
        ],
        "body": [
          {
            "type": "BreakStatement",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 8
              },
              "end": {
                "line": 1,
                "column": 14
              }
            },
            "range": [
              8,
              14
            ],
            "label": null
          }
        ]
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TCallExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 3
    }
  },
  "range": [
    0,
    3
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 3
        }
      },
      "range": [
        0,
        3
      ],
      "expression": {
        "type": "CallExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 3
          }
        },
        "range": [
          0,
          3
        ],
        "callee": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "name": "a",
          "typeAnnotation": null,
          "optional": false
        },
        "arguments": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TCatchClause*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 18
    }
  },
  "range": [
    0,
    18
  ],
  "body": [
    {
      "type": "TryStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 18
        }
      },
      "range": [
        0,
        18
      ],
      "block": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 4
          },
          "end": {
            "line": 1,
            "column": 6
          }
        },
        "range": [
          4,
          6
        ],
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 7
          },
          "end": {
            "line": 1,
            "column": 18
          }
        },
        "range": [
          7,
          18
        ],
        "param": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 13
            },
            "end": {
              "line": 1,
              "column": 14
            }
          },
          "range": [
            13,
            14
          ],
          "name": "e",
          "typeAnnotation": null,
          "optional": false
        },
        "guard": null,
        "body": {
          "type": "BlockStatement",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 16
            },
            "end": {
              "line": 1,
              "column": 18
            }
          },
          "range": [
            16,
            18
          ],
          "body": []
        }
      },
      "guardedHandlers": [],
      "finalizer": null
    }
  ],
  "comments": []
}: TProgram);
(/*TClassDeclaration*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 38
    }
  },
  "range": [
    0,
    38
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 38
        }
      },
      "range": [
        0,
        38
      ],
      "id": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 6
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "range": [
          6,
          9
        ],
        "name": "Foo",
        "typeAnnotation": null,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 10
          },
          "end": {
            "line": 1,
            "column": 38
          }
        },
        "range": [
          10,
          38
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 12
              },
              "end": {
                "line": 1,
                "column": 27
              }
            },
            "range": [
              12,
              27
            ],
            "key": {
              "type": "Identifier",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 12
                },
                "end": {
                  "line": 1,
                  "column": 23
                }
              },
              "range": [
                12,
                23
              ],
              "name": "constructor",
              "typeAnnotation": null,
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 25
                },
                "end": {
                  "line": 1,
                  "column": 27
                }
              },
              "range": [
                25,
                27
              ],
              "id": null,
              "params": [],
              "defaults": [],
              "rest": null,
              "body": {
                "type": "BlockStatement",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 1,
                    "column": 25
                  },
                  "end": {
                    "line": 1,
                    "column": 27
                  }
                },
                "range": [
                  25,
                  27
                ],
                "body": []
              },
              "async": false,
              "generator": false,
              "expression": false,
              "returnType": null,
              "typeParameters": null
            },
            "kind": "constructor",
            "static": false,
            "computed": false,
            "decorators": []
          },
          {
            "type": "MethodDefinition",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 28
              },
              "end": {
                "line": 1,
                "column": 37
              }
            },
            "range": [
              28,
              37
            ],
            "key": {
              "type": "Identifier",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 28
                },
                "end": {
                  "line": 1,
                  "column": 32
                }
              },
              "range": [
                28,
                32
              ],
              "name": "meth",
              "typeAnnotation": null,
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 35
                },
                "end": {
                  "line": 1,
                  "column": 37
                }
              },
              "range": [
                35,
                37
              ],
              "id": null,
              "params": [],
              "defaults": [],
              "rest": null,
              "body": {
                "type": "BlockStatement",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 1,
                    "column": 35
                  },
                  "end": {
                    "line": 1,
                    "column": 37
                  }
                },
                "range": [
                  35,
                  37
                ],
                "body": []
              },
              "async": false,
              "generator": false,
              "expression": false,
              "returnType": null,
              "typeParameters": null
            },
            "kind": "method",
            "static": false,
            "computed": false,
            "decorators": []
          }
        ]
      },
      "superClass": null,
      "typeParameters": null,
      "superTypeParameters": null,
      "implements": [],
      "decorators": []
    }
  ],
  "comments": []
}: TProgram);
(/*TClassExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 1
    },
    "end": {
      "line": 1,
      "column": 35
    }
  },
  "range": [
    1,
    35
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 1
        },
        "end": {
          "line": 1,
          "column": 35
        }
      },
      "range": [
        1,
        35
      ],
      "expression": {
        "type": "ClassExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 1
          },
          "end": {
            "line": 1,
            "column": 35
          }
        },
        "range": [
          1,
          35
        ],
        "id": null,
        "body": {
          "type": "ClassBody",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 7
            },
            "end": {
              "line": 1,
              "column": 35
            }
          },
          "range": [
            7,
            35
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 24
                }
              },
              "range": [
                9,
                24
              ],
              "key": {
                "type": "Identifier",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 1,
                    "column": 9
                  },
                  "end": {
                    "line": 1,
                    "column": 20
                  }
                },
                "range": [
                  9,
                  20
                ],
                "name": "constructor",
                "typeAnnotation": null,
                "optional": false
              },
              "value": {
                "type": "FunctionExpression",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 1,
                    "column": 22
                  },
                  "end": {
                    "line": 1,
                    "column": 24
                  }
                },
                "range": [
                  22,
                  24
                ],
                "id": null,
                "params": [],
                "defaults": [],
                "rest": null,
                "body": {
                  "type": "BlockStatement",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 1,
                      "column": 22
                    },
                    "end": {
                      "line": 1,
                      "column": 24
                    }
                  },
                  "range": [
                    22,
                    24
                  ],
                  "body": []
                },
                "async": false,
                "generator": false,
                "expression": false,
                "returnType": null,
                "typeParameters": null
              },
              "kind": "constructor",
              "static": false,
              "computed": false,
              "decorators": []
            },
            {
              "type": "MethodDefinition",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 25
                },
                "end": {
                  "line": 1,
                  "column": 34
                }
              },
              "range": [
                25,
                34
              ],
              "key": {
                "type": "Identifier",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 1,
                    "column": 25
                  },
                  "end": {
                    "line": 1,
                    "column": 29
                  }
                },
                "range": [
                  25,
                  29
                ],
                "name": "meth",
                "typeAnnotation": null,
                "optional": false
              },
              "value": {
                "type": "FunctionExpression",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 1,
                    "column": 32
                  },
                  "end": {
                    "line": 1,
                    "column": 34
                  }
                },
                "range": [
                  32,
                  34
                ],
                "id": null,
                "params": [],
                "defaults": [],
                "rest": null,
                "body": {
                  "type": "BlockStatement",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 1,
                      "column": 32
                    },
                    "end": {
                      "line": 1,
                      "column": 34
                    }
                  },
                  "range": [
                    32,
                    34
                  ],
                  "body": []
                },
                "async": false,
                "generator": false,
                "expression": false,
                "returnType": null,
                "typeParameters": null
              },
              "kind": "method",
              "static": false,
              "computed": false,
              "decorators": []
            }
          ]
        },
        "superClass": null,
        "typeParameters": null,
        "superTypeParameters": null,
        "implements": [],
        "decorators": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TConditionalExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 5
    }
  },
  "range": [
    0,
    5
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 5
        }
      },
      "range": [
        0,
        5
      ],
      "expression": {
        "type": "ConditionalExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 5
          }
        },
        "range": [
          0,
          5
        ],
        "test": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "name": "a",
          "typeAnnotation": null,
          "optional": false
        },
        "consequent": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 2
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            2,
            3
          ],
          "name": "b",
          "typeAnnotation": null,
          "optional": false
        },
        "alternate": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 5
            }
          },
          "range": [
            4,
            5
          ],
          "name": "c",
          "typeAnnotation": null,
          "optional": false
        }
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TContinueStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 18
    }
  },
  "range": [
    0,
    18
  ],
  "body": [
    {
      "type": "ForStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 18
        }
      },
      "range": [
        0,
        18
      ],
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 7
          },
          "end": {
            "line": 1,
            "column": 18
          }
        },
        "range": [
          7,
          18
        ],
        "body": [
          {
            "type": "ContinueStatement",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 8
              },
              "end": {
                "line": 1,
                "column": 17
              }
            },
            "range": [
              8,
              17
            ],
            "label": null
          }
        ]
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TDebuggerStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 9
    }
  },
  "range": [
    0,
    9
  ],
  "body": [
    {
      "type": "DebuggerStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "range": [
        0,
        9
      ]
    }
  ],
  "comments": []
}: TProgram);
(/*TDoWhileStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 17
    }
  },
  "range": [
    0,
    17
  ],
  "body": [
    {
      "type": "DoWhileStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 17
        }
      },
      "range": [
        0,
        17
      ],
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 3
          },
          "end": {
            "line": 1,
            "column": 5
          }
        },
        "range": [
          3,
          5
        ],
        "body": []
      },
      "test": {
        "type": "Literal",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 12
          },
          "end": {
            "line": 1,
            "column": 16
          }
        },
        "range": [
          12,
          16
        ],
        "value": true,
        "raw": "true"
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TEmptyStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 1
    }
  },
  "range": [
    0,
    1
  ],
  "body": [
    {
      "type": "EmptyStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 1
        }
      },
      "range": [
        0,
        1
      ]
    }
  ],
  "comments": []
}: TProgram);
(/*TExpressionStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 3
    }
  },
  "range": [
    0,
    3
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 3
        }
      },
      "range": [
        0,
        3
      ],
      "expression": {
        "type": "AssignmentExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 3
          }
        },
        "range": [
          0,
          3
        ],
        "operator": "=",
        "left": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "name": "a",
          "typeAnnotation": null,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 2
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            2,
            3
          ],
          "name": "b",
          "typeAnnotation": null,
          "optional": false
        }
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TForInStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 19
    }
  },
  "range": [
    0,
    19
  ],
  "body": [
    {
      "type": "ForInStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 19
        }
      },
      "range": [
        0,
        19
      ],
      "left": {
        "type": "VariableDeclaration",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 5
          },
          "end": {
            "line": 1,
            "column": 10
          }
        },
        "range": [
          5,
          10
        ],
        "declarations": [
          {
            "type": "VariableDeclarator",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              9,
              10
            ],
            "id": {
              "type": "Identifier",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "name": "a",
              "typeAnnotation": null,
              "optional": false
            },
            "init": null
          }
        ],
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 14
          },
          "end": {
            "line": 1,
            "column": 15
          }
        },
        "range": [
          14,
          15
        ],
        "name": "b",
        "typeAnnotation": null,
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 17
          },
          "end": {
            "line": 1,
            "column": 19
          }
        },
        "range": [
          17,
          19
        ],
        "body": []
      },
      "each": false
    }
  ],
  "comments": []
}: TProgram);
(/*TForOfStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 19
    }
  },
  "range": [
    0,
    19
  ],
  "body": [
    {
      "type": "ForOfStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 19
        }
      },
      "range": [
        0,
        19
      ],
      "left": {
        "type": "VariableDeclaration",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 5
          },
          "end": {
            "line": 1,
            "column": 10
          }
        },
        "range": [
          5,
          10
        ],
        "declarations": [
          {
            "type": "VariableDeclarator",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 9
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              9,
              10
            ],
            "id": {
              "type": "Identifier",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 9
                },
                "end": {
                  "line": 1,
                  "column": 10
                }
              },
              "range": [
                9,
                10
              ],
              "name": "a",
              "typeAnnotation": null,
              "optional": false
            },
            "init": null
          }
        ],
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 14
          },
          "end": {
            "line": 1,
            "column": 15
          }
        },
        "range": [
          14,
          15
        ],
        "name": "b",
        "typeAnnotation": null,
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 17
          },
          "end": {
            "line": 1,
            "column": 19
          }
        },
        "range": [
          17,
          19
        ],
        "body": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TForStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 9
    }
  },
  "range": [
    0,
    9
  ],
  "body": [
    {
      "type": "ForStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 9
        }
      },
      "range": [
        0,
        9
      ],
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 7
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "range": [
          7,
          9
        ],
        "body": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TFunctionDeclaration*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 17
    }
  },
  "range": [
    0,
    17
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 17
        }
      },
      "range": [
        0,
        17
      ],
      "id": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 9
          },
          "end": {
            "line": 1,
            "column": 12
          }
        },
        "range": [
          9,
          12
        ],
        "name": "foo",
        "typeAnnotation": null,
        "optional": false
      },
      "params": [],
      "defaults": [],
      "rest": null,
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 15
          },
          "end": {
            "line": 1,
            "column": 17
          }
        },
        "range": [
          15,
          17
        ],
        "body": []
      },
      "async": false,
      "generator": false,
      "expression": false,
      "returnType": null,
      "typeParameters": null
    }
  ],
  "comments": []
}: TProgram);
(/*TFunctionExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 1
    },
    "end": {
      "line": 1,
      "column": 14
    }
  },
  "range": [
    1,
    14
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 1
        },
        "end": {
          "line": 1,
          "column": 14
        }
      },
      "range": [
        1,
        14
      ],
      "expression": {
        "type": "FunctionExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 1
          },
          "end": {
            "line": 1,
            "column": 14
          }
        },
        "range": [
          1,
          14
        ],
        "id": null,
        "params": [],
        "defaults": [],
        "rest": null,
        "body": {
          "type": "BlockStatement",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 12
            },
            "end": {
              "line": 1,
              "column": 14
            }
          },
          "range": [
            12,
            14
          ],
          "body": []
        },
        "async": false,
        "generator": false,
        "expression": false,
        "returnType": null,
        "typeParameters": null
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TIdentifier*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 2
    }
  },
  "range": [
    0,
    2
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 2
        }
      },
      "range": [
        0,
        2
      ],
      "expression": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 1
          }
        },
        "range": [
          0,
          1
        ],
        "name": "a",
        "typeAnnotation": null,
        "optional": false
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TIfStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 17
    }
  },
  "range": [
    0,
    17
  ],
  "body": [
    {
      "type": "IfStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 17
        }
      },
      "range": [
        0,
        17
      ],
      "test": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 4
          },
          "end": {
            "line": 1,
            "column": 5
          }
        },
        "range": [
          4,
          5
        ],
        "name": "a",
        "typeAnnotation": null,
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 7
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "range": [
          7,
          9
        ],
        "body": []
      },
      "alternate": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 15
          },
          "end": {
            "line": 1,
            "column": 17
          }
        },
        "range": [
          15,
          17
        ],
        "body": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TImportDeclaration*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 13
    }
  },
  "range": [
    0,
    13
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 13
        }
      },
      "range": [
        0,
        13
      ],
      "specifiers": [],
      "source": {
        "type": "Literal",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 7
          },
          "end": {
            "line": 1,
            "column": 12
          }
        },
        "range": [
          7,
          12
        ],
        "value": "foo",
        "raw": "'foo'"
      },
      "importKind": "value"
    }
  ],
  "comments": []
}: TProgram);
(/*TImportDefaultSpecifier*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 22
    }
  },
  "range": [
    0,
    22
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 22
        }
      },
      "range": [
        0,
        22
      ],
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 7
            },
            "end": {
              "line": 1,
              "column": 10
            }
          },
          "range": [
            7,
            10
          ],
          "id": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 7
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              7,
              10
            ],
            "name": "foo",
            "typeAnnotation": null,
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 16
          },
          "end": {
            "line": 1,
            "column": 21
          }
        },
        "range": [
          16,
          21
        ],
        "value": "bar",
        "raw": "'bar'"
      },
      "importKind": "value"
    }
  ],
  "comments": []
}: TProgram);
(/*TImportNamespaceSpecifier*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 27
    }
  },
  "range": [
    0,
    27
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 27
        }
      },
      "range": [
        0,
        27
      ],
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 7
            },
            "end": {
              "line": 1,
              "column": 15
            }
          },
          "range": [
            7,
            15
          ],
          "id": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 12
              },
              "end": {
                "line": 1,
                "column": 15
              }
            },
            "range": [
              12,
              15
            ],
            "name": "foo",
            "typeAnnotation": null,
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 21
          },
          "end": {
            "line": 1,
            "column": 26
          }
        },
        "range": [
          21,
          26
        ],
        "value": "bar",
        "raw": "'bar'"
      },
      "importKind": "value"
    }
  ],
  "comments": []
}: TProgram);
(/*TImportSpecifier*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 24
    }
  },
  "range": [
    0,
    24
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 24
        }
      },
      "range": [
        0,
        24
      ],
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 8
            },
            "end": {
              "line": 1,
              "column": 11
            }
          },
          "range": [
            8,
            11
          ],
          "id": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 8
              },
              "end": {
                "line": 1,
                "column": 11
              }
            },
            "range": [
              8,
              11
            ],
            "name": "foo",
            "typeAnnotation": null,
            "optional": false
          },
          "name": null
        }
      ],
      "source": {
        "type": "Literal",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 18
          },
          "end": {
            "line": 1,
            "column": 23
          }
        },
        "range": [
          18,
          23
        ],
        "value": "bar",
        "raw": "'bar'"
      },
      "importKind": "value"
    }
  ],
  "comments": []
}: TProgram);
(/*TLabeledStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 4
    }
  },
  "range": [
    0,
    4
  ],
  "body": [
    {
      "type": "LabeledStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 4
        }
      },
      "range": [
        0,
        4
      ],
      "label": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 1
          }
        },
        "range": [
          0,
          1
        ],
        "name": "a",
        "typeAnnotation": null,
        "optional": false
      },
      "body": {
        "type": "ExpressionStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 2
          },
          "end": {
            "line": 1,
            "column": 4
          }
        },
        "range": [
          2,
          4
        ],
        "expression": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 2
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            2,
            3
          ],
          "name": "b",
          "typeAnnotation": null,
          "optional": false
        }
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TLiteral*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 6
    }
  },
  "range": [
    0,
    6
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 6
        }
      },
      "range": [
        0,
        6
      ],
      "expression": {
        "type": "Literal",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 6
          }
        },
        "range": [
          0,
          6
        ],
        "value": "asdf",
        "raw": "'asdf'"
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TLogicalExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 6
    }
  },
  "range": [
    0,
    6
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 6
        }
      },
      "range": [
        0,
        6
      ],
      "expression": {
        "type": "LogicalExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 6
          }
        },
        "range": [
          0,
          6
        ],
        "operator": "||",
        "left": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "name": "a",
          "typeAnnotation": null,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 5
            },
            "end": {
              "line": 1,
              "column": 6
            }
          },
          "range": [
            5,
            6
          ],
          "name": "b",
          "typeAnnotation": null,
          "optional": false
        }
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TMemberExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 3
    }
  },
  "range": [
    0,
    3
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 3
        }
      },
      "range": [
        0,
        3
      ],
      "expression": {
        "type": "MemberExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 3
          }
        },
        "range": [
          0,
          3
        ],
        "object": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "name": "a",
          "typeAnnotation": null,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 2
            },
            "end": {
              "line": 1,
              "column": 3
            }
          },
          "range": [
            2,
            3
          ],
          "name": "b",
          "typeAnnotation": null,
          "optional": false
        },
        "computed": false
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TMetaProperty*/{
  "errors": [
    {
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 3
        },
        "end": {
          "line": 1,
          "column": 4
        }
      },
      "message": "Unexpected token ."
    }
  ],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 10
    }
  },
  "range": [
    0,
    10
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 10
        }
      },
      "range": [
        0,
        10
      ],
      "expression": {
        "type": "NewExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 10
          }
        },
        "range": [
          0,
          10
        ],
        "callee": {
          "type": "MemberExpression",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 3
            },
            "end": {
              "line": 1,
              "column": 10
            }
          },
          "range": [
            3,
            10
          ],
          "object": {
            "type": "Literal",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 3
              },
              "end": {
                "line": 1,
                "column": 4
              }
            },
            "range": [
              3,
              4
            ],
            "value": null,
            "raw": "null"
          },
          "property": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 10
              }
            },
            "range": [
              4,
              10
            ],
            "name": "target",
            "typeAnnotation": null,
            "optional": false
          },
          "computed": false
        },
        "arguments": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TNewExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 7
    }
  },
  "range": [
    0,
    7
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 7
        }
      },
      "range": [
        0,
        7
      ],
      "expression": {
        "type": "NewExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 7
          }
        },
        "range": [
          0,
          7
        ],
        "callee": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 5
            }
          },
          "range": [
            4,
            5
          ],
          "name": "a",
          "typeAnnotation": null,
          "optional": false
        },
        "arguments": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TObjectExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 1
    },
    "end": {
      "line": 1,
      "column": 3
    }
  },
  "range": [
    1,
    3
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 1
        },
        "end": {
          "line": 1,
          "column": 3
        }
      },
      "range": [
        1,
        3
      ],
      "expression": {
        "type": "ObjectExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 1
          },
          "end": {
            "line": 1,
            "column": 3
          }
        },
        "range": [
          1,
          3
        ],
        "properties": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TObjectPattern*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 12
    }
  },
  "range": [
    0,
    12
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 12
        }
      },
      "range": [
        0,
        12
      ],
      "declarations": [
        {
          "type": "VariableDeclarator",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 11
            }
          },
          "range": [
            4,
            11
          ],
          "id": {
            "type": "ObjectPattern",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 7
              }
            },
            "range": [
              4,
              7
            ],
            "properties": [
              {
                "type": "PropertyPattern",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 1,
                    "column": 5
                  },
                  "end": {
                    "line": 1,
                    "column": 6
                  }
                },
                "range": [
                  5,
                  6
                ],
                "key": {
                  "type": "Identifier",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 1,
                      "column": 5
                    },
                    "end": {
                      "line": 1,
                      "column": 6
                    }
                  },
                  "range": [
                    5,
                    6
                  ],
                  "name": "a",
                  "typeAnnotation": null,
                  "optional": false
                },
                "pattern": {
                  "type": "Identifier",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 1,
                      "column": 5
                    },
                    "end": {
                      "line": 1,
                      "column": 6
                    }
                  },
                  "range": [
                    5,
                    6
                  ],
                  "name": "a",
                  "typeAnnotation": null,
                  "optional": false
                },
                "computed": false,
                "shorthand": true
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 10
              },
              "end": {
                "line": 1,
                "column": 11
              }
            },
            "range": [
              10,
              11
            ],
            "name": "b",
            "typeAnnotation": null,
            "optional": false
          }
        }
      ],
      "kind": "var"
    }
  ],
  "comments": []
}: TProgram);
(/*TReturnStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 56
    }
  },
  "range": [
    0,
    56
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 29
        }
      },
      "range": [
        0,
        29
      ],
      "id": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 9
          },
          "end": {
            "line": 1,
            "column": 12
          }
        },
        "range": [
          9,
          12
        ],
        "name": "foo",
        "typeAnnotation": null,
        "optional": false
      },
      "params": [],
      "defaults": [],
      "rest": null,
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 15
          },
          "end": {
            "line": 1,
            "column": 29
          }
        },
        "range": [
          15,
          29
        ],
        "body": [
          {
            "type": "ReturnStatement",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 17
              },
              "end": {
                "line": 1,
                "column": 27
              }
            },
            "range": [
              17,
              27
            ],
            "argument": {
              "type": "Literal",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 24
                },
                "end": {
                  "line": 1,
                  "column": 26
                }
              },
              "range": [
                24,
                26
              ],
              "value": 42,
              "raw": "42"
            }
          }
        ]
      },
      "async": false,
      "generator": false,
      "expression": false,
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 30
        },
        "end": {
          "line": 1,
          "column": 56
        }
      },
      "range": [
        30,
        56
      ],
      "id": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 39
          },
          "end": {
            "line": 1,
            "column": 42
          }
        },
        "range": [
          39,
          42
        ],
        "name": "bar",
        "typeAnnotation": null,
        "optional": false
      },
      "params": [],
      "defaults": [],
      "rest": null,
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 45
          },
          "end": {
            "line": 1,
            "column": 56
          }
        },
        "range": [
          45,
          56
        ],
        "body": [
          {
            "type": "ReturnStatement",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 47
              },
              "end": {
                "line": 1,
                "column": 54
              }
            },
            "range": [
              47,
              54
            ],
            "argument": null
          }
        ]
      },
      "async": false,
      "generator": false,
      "expression": false,
      "returnType": null,
      "typeParameters": null
    }
  ],
  "comments": []
}: TProgram);
(/*TSequenceExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 1
    },
    "end": {
      "line": 1,
      "column": 4
    }
  },
  "range": [
    1,
    4
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 1
        },
        "end": {
          "line": 1,
          "column": 4
        }
      },
      "range": [
        1,
        4
      ],
      "expression": {
        "type": "SequenceExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 1
          },
          "end": {
            "line": 1,
            "column": 4
          }
        },
        "range": [
          1,
          4
        ],
        "expressions": [
          {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 1
              },
              "end": {
                "line": 1,
                "column": 2
              }
            },
            "range": [
              1,
              2
            ],
            "name": "a",
            "typeAnnotation": null,
            "optional": false
          },
          {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 3
              },
              "end": {
                "line": 1,
                "column": 4
              }
            },
            "range": [
              3,
              4
            ],
            "name": "b",
            "typeAnnotation": null,
            "optional": false
          }
        ]
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TSuper*/{
  "errors": [
    {
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 9
        },
        "end": {
          "line": 1,
          "column": 10
        }
      },
      "message": "Unexpected token ("
    },
    {
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 10
        },
        "end": {
          "line": 1,
          "column": 11
        }
      },
      "message": "Unexpected token )"
    },
    {
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 12
        },
        "end": {
          "line": 1,
          "column": 13
        }
      },
      "message": "Unexpected token {"
    },
    {
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 25
        },
        "end": {
          "line": 1,
          "column": 26
        }
      },
      "message": "Unexpected token ("
    }
  ],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 40
    }
  },
  "range": [
    0,
    40
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 40
        }
      },
      "range": [
        0,
        40
      ],
      "id": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 6
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "range": [
          6,
          9
        ],
        "name": "Foo",
        "typeAnnotation": null,
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 9
          },
          "end": {
            "line": 1,
            "column": 40
          }
        },
        "range": [
          9,
          40
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 10
              },
              "end": {
                "line": 1,
                "column": 38
              }
            },
            "range": [
              10,
              38
            ],
            "key": {
              "type": "Identifier",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 10
                },
                "end": {
                  "line": 1,
                  "column": 11
                }
              },
              "range": [
                10,
                11
              ],
              "name": ")",
              "typeAnnotation": null,
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 28
                },
                "end": {
                  "line": 1,
                  "column": 38
                }
              },
              "range": [
                28,
                38
              ],
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 1,
                      "column": 14
                    },
                    "end": {
                      "line": 1,
                      "column": 25
                    }
                  },
                  "range": [
                    14,
                    25
                  ],
                  "name": "constructor",
                  "typeAnnotation": null,
                  "optional": false
                }
              ],
              "defaults": [],
              "rest": null,
              "body": {
                "type": "BlockStatement",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 1,
                    "column": 28
                  },
                  "end": {
                    "line": 1,
                    "column": 38
                  }
                },
                "range": [
                  28,
                  38
                ],
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 1,
                        "column": 30
                      },
                      "end": {
                        "line": 1,
                        "column": 36
                      }
                    },
                    "range": [
                      30,
                      36
                    ],
                    "expression": {
                      "type": "Identifier",
                      "loc": {
                        "source": null,
                        "start": {
                          "line": 1,
                          "column": 30
                        },
                        "end": {
                          "line": 1,
                          "column": 35
                        }
                      },
                      "range": [
                        30,
                        35
                      ],
                      "name": "super",
                      "typeAnnotation": null,
                      "optional": false
                    }
                  }
                ]
              },
              "async": false,
              "generator": false,
              "expression": false,
              "returnType": null,
              "typeParameters": null
            },
            "kind": "method",
            "static": false,
            "computed": false,
            "decorators": []
          }
        ]
      },
      "superClass": null,
      "typeParameters": null,
      "superTypeParameters": null,
      "implements": [],
      "decorators": []
    }
  ],
  "comments": []
}: TProgram);
(/*TSwitchStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 31
    }
  },
  "range": [
    0,
    31
  ],
  "body": [
    {
      "type": "SwitchStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 31
        }
      },
      "range": [
        0,
        31
      ],
      "discriminant": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 8
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "range": [
          8,
          9
        ],
        "name": "a",
        "typeAnnotation": null,
        "optional": false
      },
      "cases": [
        {
          "type": "SwitchCase",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 13
            },
            "end": {
              "line": 1,
              "column": 20
            }
          },
          "range": [
            13,
            20
          ],
          "test": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 18
              },
              "end": {
                "line": 1,
                "column": 19
              }
            },
            "range": [
              18,
              19
            ],
            "name": "b",
            "typeAnnotation": null,
            "optional": false
          },
          "consequent": []
        },
        {
          "type": "SwitchCase",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 21
            },
            "end": {
              "line": 1,
              "column": 29
            }
          },
          "range": [
            21,
            29
          ],
          "test": null,
          "consequent": []
        }
      ],
      "lexical": false
    }
  ],
  "comments": []
}: TProgram);
(/*TTaggedTemplateExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 7
    }
  },
  "range": [
    0,
    7
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 7
        }
      },
      "range": [
        0,
        7
      ],
      "expression": {
        "type": "TaggedTemplateExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 7
          }
        },
        "range": [
          0,
          7
        ],
        "tag": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "name": "a",
          "typeAnnotation": null,
          "optional": false
        },
        "quasi": {
          "type": "TemplateLiteral",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 7
            }
          },
          "range": [
            1,
            7
          ],
          "quasis": [
            {
              "type": "TemplateElement",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 1
                },
                "end": {
                  "line": 1,
                  "column": 7
                }
              },
              "range": [
                1,
                7
              ],
              "value": {
                "raw": "asdf",
                "cooked": "asdf"
              },
              "tail": true
            }
          ],
          "expressions": []
        }
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TTemplateElement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 14
    }
  },
  "range": [
    0,
    14
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 14
        }
      },
      "range": [
        0,
        14
      ],
      "expression": {
        "type": "TemplateLiteral",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 14
          }
        },
        "range": [
          0,
          14
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 3
              }
            },
            "range": [
              0,
              3
            ],
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 11
              }
            },
            "range": [
              4,
              11
            ],
            "value": {
              "raw": "asdf",
              "cooked": "asdf"
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 12
              },
              "end": {
                "line": 1,
                "column": 14
              }
            },
            "range": [
              12,
              14
            ],
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true
          }
        ],
        "expressions": [
          {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 3
              },
              "end": {
                "line": 1,
                "column": 4
              }
            },
            "range": [
              3,
              4
            ],
            "name": "a",
            "typeAnnotation": null,
            "optional": false
          },
          {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 11
              },
              "end": {
                "line": 1,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ],
            "name": "b",
            "typeAnnotation": null,
            "optional": false
          }
        ]
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TTemplateLiteral*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 6
    }
  },
  "range": [
    0,
    6
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 6
        }
      },
      "range": [
        0,
        6
      ],
      "expression": {
        "type": "TemplateLiteral",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 6
          }
        },
        "range": [
          0,
          6
        ],
        "quasis": [
          {
            "type": "TemplateElement",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 0
              },
              "end": {
                "line": 1,
                "column": 6
              }
            },
            "range": [
              0,
              6
            ],
            "value": {
              "raw": "asdf",
              "cooked": "asdf"
            },
            "tail": true
          }
        ],
        "expressions": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TThisExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 5
    }
  },
  "range": [
    0,
    5
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 5
        }
      },
      "range": [
        0,
        5
      ],
      "expression": {
        "type": "ThisExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 4
          }
        },
        "range": [
          0,
          4
        ]
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TThrowStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 7
    }
  },
  "range": [
    0,
    7
  ],
  "body": [
    {
      "type": "ThrowStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 7
        }
      },
      "range": [
        0,
        7
      ],
      "argument": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 6
          },
          "end": {
            "line": 1,
            "column": 7
          }
        },
        "range": [
          6,
          7
        ],
        "name": "a",
        "typeAnnotation": null,
        "optional": false
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TTryStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 29
    }
  },
  "range": [
    0,
    29
  ],
  "body": [
    {
      "type": "TryStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 29
        }
      },
      "range": [
        0,
        29
      ],
      "block": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 4
          },
          "end": {
            "line": 1,
            "column": 6
          }
        },
        "range": [
          4,
          6
        ],
        "body": []
      },
      "handler": {
        "type": "CatchClause",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 7
          },
          "end": {
            "line": 1,
            "column": 18
          }
        },
        "range": [
          7,
          18
        ],
        "param": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 13
            },
            "end": {
              "line": 1,
              "column": 14
            }
          },
          "range": [
            13,
            14
          ],
          "name": "e",
          "typeAnnotation": null,
          "optional": false
        },
        "guard": null,
        "body": {
          "type": "BlockStatement",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 16
            },
            "end": {
              "line": 1,
              "column": 18
            }
          },
          "range": [
            16,
            18
          ],
          "body": []
        }
      },
      "guardedHandlers": [],
      "finalizer": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 27
          },
          "end": {
            "line": 1,
            "column": 29
          }
        },
        "range": [
          27,
          29
        ],
        "body": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TUnaryExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 2
    }
  },
  "range": [
    0,
    2
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 2
        }
      },
      "range": [
        0,
        2
      ],
      "expression": {
        "type": "UnaryExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 2
          }
        },
        "range": [
          0,
          2
        ],
        "operator": "-",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 1
            },
            "end": {
              "line": 1,
              "column": 2
            }
          },
          "range": [
            1,
            2
          ],
          "value": 1,
          "raw": "1"
        }
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TUpdateExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 3
    }
  },
  "range": [
    0,
    3
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 3
        }
      },
      "range": [
        0,
        3
      ],
      "expression": {
        "type": "UpdateExpression",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 3
          }
        },
        "range": [
          0,
          3
        ],
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 1
            }
          },
          "range": [
            0,
            1
          ],
          "name": "a",
          "typeAnnotation": null,
          "optional": false
        },
        "prefix": false
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TVariableDeclaration*/{
  "errors": [
    {
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 20
        },
        "end": {
          "line": 1,
          "column": 21
        }
      },
      "message": "Const must be initialized"
    }
  ],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 22
    }
  },
  "range": [
    0,
    22
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 6
        }
      },
      "range": [
        0,
        6
      ],
      "declarations": [
        {
          "type": "VariableDeclarator",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 4
            },
            "end": {
              "line": 1,
              "column": 5
            }
          },
          "range": [
            4,
            5
          ],
          "id": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 4
              },
              "end": {
                "line": 1,
                "column": 5
              }
            },
            "range": [
              4,
              5
            ],
            "name": "a",
            "typeAnnotation": null,
            "optional": false
          },
          "init": null
        }
      ],
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 7
        },
        "end": {
          "line": 1,
          "column": 13
        }
      },
      "range": [
        7,
        13
      ],
      "declarations": [
        {
          "type": "VariableDeclarator",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 11
            },
            "end": {
              "line": 1,
              "column": 12
            }
          },
          "range": [
            11,
            12
          ],
          "id": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 11
              },
              "end": {
                "line": 1,
                "column": 12
              }
            },
            "range": [
              11,
              12
            ],
            "name": "b",
            "typeAnnotation": null,
            "optional": false
          },
          "init": null
        }
      ],
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 14
        },
        "end": {
          "line": 1,
          "column": 22
        }
      },
      "range": [
        14,
        22
      ],
      "declarations": [
        {
          "type": "VariableDeclarator",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 20
            },
            "end": {
              "line": 1,
              "column": 21
            }
          },
          "range": [
            20,
            21
          ],
          "id": {
            "type": "Identifier",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 20
              },
              "end": {
                "line": 1,
                "column": 21
              }
            },
            "range": [
              20,
              21
            ],
            "name": "c",
            "typeAnnotation": null,
            "optional": false
          },
          "init": null
        }
      ],
      "kind": "const"
    }
  ],
  "comments": []
}: TProgram);
(/*TWhileStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 15
    }
  },
  "range": [
    0,
    15
  ],
  "body": [
    {
      "type": "WhileStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 15
        }
      },
      "range": [
        0,
        15
      ],
      "test": {
        "type": "Literal",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 7
          },
          "end": {
            "line": 1,
            "column": 11
          }
        },
        "range": [
          7,
          11
        ],
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 13
          },
          "end": {
            "line": 1,
            "column": 15
          }
        },
        "range": [
          13,
          15
        ],
        "body": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TWithStatement*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 11
    }
  },
  "range": [
    0,
    11
  ],
  "body": [
    {
      "type": "WithStatement",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 11
        }
      },
      "range": [
        0,
        11
      ],
      "object": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 6
          },
          "end": {
            "line": 1,
            "column": 7
          }
        },
        "range": [
          6,
          7
        ],
        "name": "o",
        "typeAnnotation": null,
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 9
          },
          "end": {
            "line": 1,
            "column": 11
          }
        },
        "range": [
          9,
          11
        ],
        "body": []
      }
    }
  ],
  "comments": []
}: TProgram);
(/*TYieldExpression*/{
  "errors": [],
  "tokens": [],
  "type": "Program",
  "loc": {
    "source": null,
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 38
    }
  },
  "range": [
    0,
    38
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 38
        }
      },
      "range": [
        0,
        38
      ],
      "id": {
        "type": "Identifier",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 10
          },
          "end": {
            "line": 1,
            "column": 13
          }
        },
        "range": [
          10,
          13
        ],
        "name": "foo",
        "typeAnnotation": null,
        "optional": false
      },
      "params": [],
      "defaults": [],
      "rest": null,
      "body": {
        "type": "BlockStatement",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 16
          },
          "end": {
            "line": 1,
            "column": 38
          }
        },
        "range": [
          16,
          38
        ],
        "body": [
          {
            "type": "ExpressionStatement",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 18
              },
              "end": {
                "line": 1,
                "column": 26
              }
            },
            "range": [
              18,
              26
            ],
            "expression": {
              "type": "YieldExpression",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 18
                },
                "end": {
                  "line": 1,
                  "column": 25
                }
              },
              "range": [
                18,
                25
              ],
              "argument": {
                "type": "Literal",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 1,
                    "column": 24
                  },
                  "end": {
                    "line": 1,
                    "column": 25
                  }
                },
                "range": [
                  24,
                  25
                ],
                "value": 1,
                "raw": "1"
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "loc": {
              "source": null,
              "start": {
                "line": 1,
                "column": 27
              },
              "end": {
                "line": 1,
                "column": 36
              }
            },
            "range": [
              27,
              36
            ],
            "expression": {
              "type": "YieldExpression",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 27
                },
                "end": {
                  "line": 1,
                  "column": 35
                }
              },
              "range": [
                27,
                35
              ],
              "argument": {
                "type": "Identifier",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 1,
                    "column": 34
                  },
                  "end": {
                    "line": 1,
                    "column": 35
                  }
                },
                "range": [
                  34,
                  35
                ],
                "name": "a",
                "typeAnnotation": null,
                "optional": false
              },
              "delegate": true
            }
          }
        ]
      },
      "async": false,
      "generator": true,
      "expression": false,
      "returnType": null,
      "typeParameters": null
    }
  ],
  "comments": []
}: TProgram);
