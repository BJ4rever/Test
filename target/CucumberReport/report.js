$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Test/search.feature");
formatter.feature({
  "line": 2,
  "name": "User should able to use search functionality to find any product",
  "description": "",
  "id": "user-should-able-to-use-search-functionality-to-find-any-product",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should able to search product",
  "description": "",
  "id": "user-should-able-to-use-search-functionality-to-find-any-product;user-should-able-to-search-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on Tesco home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User search for any \"\u003cproduct\u003e\"on search menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should able to view all related \"\u003cproduct\u003e\" as a search result",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "user-should-able-to-use-search-functionality-to-find-any-product;user-should-able-to-search-product;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 11,
      "id": "user-should-able-to-use-search-functionality-to-find-any-product;user-should-able-to-search-product;;1"
    },
    {
      "cells": [
        "Tommee Tippee"
      ],
      "line": 12,
      "id": "user-should-able-to-use-search-functionality-to-find-any-product;user-should-able-to-search-product;;2"
    },
    {
      "cells": [
        "Pampers"
      ],
      "line": 13,
      "id": "user-should-able-to-use-search-functionality-to-find-any-product;user-should-able-to-search-product;;3"
    },
    {
      "cells": [
        "Walkers"
      ],
      "line": 14,
      "id": "user-should-able-to-use-search-functionality-to-find-any-product;user-should-able-to-search-product;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5595620776,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should able to search product",
  "description": "",
  "id": "user-should-able-to-use-search-functionality-to-find-any-product;user-should-able-to-search-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on Tesco home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User search for any \"Tommee Tippee\"on search menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should able to view all related \"Tommee Tippee\" as a search result",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTescoHomePage()"
});
