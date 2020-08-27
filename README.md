
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
        "connections": [
            2,
            3,
            ...
        ]
    },
    ...
]
```

### `GET /nodes/connections`

returns a nodes' connections to children nodes

### `POST /nodes/search`

returns search content related to a node

### `GET /variables`

returns all our variable data