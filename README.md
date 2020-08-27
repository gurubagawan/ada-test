
# Ada Front End Test

## Task

## API Setup and Docs
It should be simple to get the API up and running:

1. `yarn`
2. `yarn start-server`

### `GET /nodes`

Returns a shallow list of nodes with enough to render a sidebar

```
[
  {
    "id": 1,
    "title": "These are the voyages",
    "content": [
      {
        "type": "text",
        "body": "These are the voyages of the Starship Enterprise"
      },
      ...
    ]
  },
  ...
]
```

### `GET /nodes/connections`

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

### `POST /nodes/search`

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

### `GET /variables`

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