{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true,
          "browsers": [
            "last 2 versions",
            "> 1%",
            "not dead"
          ]
        },
        "useBuiltIns": "entry",
        "corejs": 3
      }
    ],
    "@babel/preset-react"
  ]
}