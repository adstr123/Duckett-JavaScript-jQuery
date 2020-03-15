# APIs

User interfaces (UIs) let users interact with applications. Application programming interfaces (APIs) let code talk to applications. You do not need to know _how_ the API code achieves its task; only what it does and how to use it.

- The DOM is an API that lets scripts access and update the contents of a web page
- jQuery is an API allowing scripts to use its methods to work with elements

## HTML5 APIs

### Example: Web Storage API

Cookies:

- Can't hold much data
- Are sent to the server with every request on that domain
- Are not considered secure

Therefore the `storage` object was introduced on the `window` object, with local and session variants:

- Store up to 5MB of data in key/value pairs, or more with user permissions
- They use a same-origin policy:
  - **Protocol** must match
  - **Subdomain** must match
  - **Domain** must match
  - **Port** must match

| Method Name           | Description                                    |
| --------------------- | ---------------------------------------------- |
| `setItem(key, value)` | Creates new key/value pair                     |
| `getItem(key)`        | Get value for a specified key                  |
| `removeItem(key)`     | Remove key/value pair for specified key        |
| `clear()`             | Clear all information from that storage object |

| Property Name | Description    |
| ------------- | -------------- |
| `length`      | Number of keys |

### Example: History API

Single-page applications enabled by jQuery do not update the history, and the forward/back buttons won't work. The History API attempt to resolve this by introducing the `history` object on the `window` object.

| Method Name                       | Description                             |
| --------------------------------- | --------------------------------------- |
| `back()`                          | Moves backwards in history              |
| `forward()`                       | Moves forwards in history               |
| `go(index)`                       | Takes you to a specific page in history |
| `pushState(state, title, url)`    | Adds state item to history stack        |
| `replaceState(state, title, url)` | Replaces state item in history stack    |

| Property Name | Description                             |
| ------------- | --------------------------------------- |
| `length`      | Number of items in the `history` object |

| Event Name          | Description                                     |
| ------------------- | ----------------------------------------------- |
| `window.onpopstate` | Fired when the user moves forwards or backwards |

#### Getting Information from `history`

1. Interrogate the `location` object to get the correct URL for the page and load content appropriately
2. Look at state saved in `history.state` to load content from state

## jQuery APIs

The jQuery foundation maintains its own set of plugins to help create UIs. To use them, in general you just have to know:

1. How to structure HTML5
2. The element(s) to use in a jQuery selector
3. The jQuery UI method to call

### Example: jQuery UI Accordion

```html
<body>
  <div id="prizes">
    <h3>1st Prize</h3>
    <div>
      <p>
        First prize is your very own DJI Phantom - a small, all-in-one
        quadcopter designed for aerial photography enthusiasts. It comes fully
        configured and ready to fly. Both compact and stylish, the highly
        integrated design means that it's easy to carry wherever you go, ready
        at a moment's notice.
      </p>
    </div>
    <h3>2nd Prize</h3>
    <div>
      <p>
        Second prize is the Arduino Robot - the first official Arduino on
        wheels! The robot has two processors, one on each of its two boards. The
        Motor Board controls the motors, and the Control Board reads sensors and
        decides how to operate. Each of the boards is a full Arduino board
        programmable using the Arduino IDE.
      </p>
    </div>
    <h3>3rd Prize</h3>
    <div>
      <p>
        Third prize is a collection of books for the motivated maker. Includes
        best-selling titles <i>Makers</i> by Cory Doctorow,
        <i
          >The Maker Movement Manifesto: Rules for Innovation in the New World
          of Crafters, Hackers, and Tinkerers</i
        >
        by Mark Hatch, and
        <i
          >Invent To Learn: Making, Tinkering, and Engineering in the
          Classroom</i
        >
        by Sylvia Libow Martinez.
      </p>
    </div>
  </div>
  <!-- #prizes -->
  <script src="js/jquery-1.11.0.min.js"></script>
  <script src="js/jquery-ui.js"></script>
  <script>
    $(function() {
      $("#prizes").accordion();
    });
  </script>
</body>
```

### Example: jQuery UI Tabs

```html
<body>
  <div id="prizes">
    <ul>
      <li><a href="#tab-1">1st Prize</a></li>
      <li><a href="#tab-2">2nd Prize</a></li>
      <li><a href="#tab-3">3rd Prize</a></li>
    </ul>
    <div id="tab-1">
      <p>
        First prize is the DJI Phantom - a small, all-in-one quadcopter designed
        for aerial photography enthusiasts. It comes fully configured and ready
        to fly. Both compact and stylish, the highly integrated design means
        that it's easy to carry wherever you go, ready at a moment's notice.
      </p>
    </div>
    <div id="tab-2">
      <p>
        Second prize is the Arduino Robot - the first official Arduino on
        wheels! The robot has two processors, one on each of its two boards. The
        Motor Board controls the motors, and the Control Board reads sensors and
        decides how to operate. Each of the boards is a full Arduino board
        programmable using the Arduino IDE.
      </p>
    </div>
    <div id="tab-3">
      <p>
        Third prize is a collection of books for the motivated maker. Includes
        best-selling titles <i>Makers</i> by Cory Doctorow,
        <i
          >The Maker Movement Manifesto: Rules for Innovation in the New World
          of Crafters, Hackers, and Tinkerers</i
        >
        by Mark Hatch, and
        <i
          >Invent To Learn: Making, Tinkering, and Engineering in the
          Classroom</i
        >
        by Sylvia Libow Martinez.
      </p>
    </div>
  </div>
  <script src="js/jquery-1.11.0.min.js"></script>
  <script src="js/jquery-ui.js"></script>
  <script>
    $(function() {
      $("#prizes").tabs();
    });
  </script>
</body>
```
