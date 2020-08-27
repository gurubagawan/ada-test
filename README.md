
# Ada Front End Test

Welcome to the Front End Developer test! The goal of this test is to allow you to prove that you can program, as well as develop and design application interfaces. In this test, we have provided an API as well as documentation for it, and you will have to build a web interface for the aforementioned API.

You may implement this web app in whatever framework you are most comfortable with

## Task

## Tools to help you get started

### React
(create react app)[https://reactjs.org/docs/create-a-new-react-app.html]

### API Setup and Docs
It should be simple to get the API up and running:

1. `yarn`
2. `yarn start-server`

#### `GET /nodes`

Returns a shallow list of nodes with enough to render a sidebar

```
[
  {
    "id": 1,
    "title": "These are the voyages"
  },
  ...
]
```

#### `GET /nodes/:id`

returns a nodes' connections to children nodes

```
[
  {
    "id": 1,
    "connections": [
      2, // These are ID's to other nodes
      3,
      ...
    ]
  },
  ...
]
```

#### `POST /nodes/search`

returns search content related to a node


```
`POST {query: "test"}`

>>>
[
    {
        "id": 2,
        "title": "Data on friendship",
        "content": [...]
    },
    {
        "id": 5,
        "title": "Maybe Data with Beard",
        "content": [...]
    },
    {
        "id": 6,
        "title": "Borg Hails",
        "content": [...]
    }
]
```

#### `GET /variables`

returns all our variable data

```
[
  {
      "id": "74c695031a554c2ebfdb2ee123c8b4f6",
      "value": "first",
      "scope": "global"
  },
  ...
]
```