# Ajax & JSON

Ajax lets you load data into part of a page without having to refresh the entire thing. Often this data comes in JSON form. It is asynchronous/non-blocking (Ajax = asynchronous JavaScript and XML)

- This is good when loading a page for not blocking a page loading whilst retrieving a large amount of data as part of the load
- This is good when the page has already loaded if you need to update what the user sees on the page

## Data Formats

Data in an ajax response often comes in one of three formats:

### HTML (`.responseText`)

- Pros
  - Easy to write, request & display
  - Response data doesn't need to be processed; can be inserted directly onto the page
- Cons
  - Server must process the HTML
  - Not useful for anything besides web browsers (poor data portability)
  - Request must come from the same domain

### XML (`.responseXML`)

Looks like HTML but the tags describe the kinds of data they hold. Therefore even if you have never seen some specific XML code, you should be able to guess what kind of data it represents.

- Pros
  - More flexible than HTML; can represent complex structures
  - Works with multiple platforms/applications (good data portability)
  - Processed with the same DOM methods as HTML
- Cons
  - Verbose
  - Request must come from the same domain
  - Can require a lot of code to process the response data

### JSON (JavaScript Object Notation)

Looks like a JavaScript object but is just sent as serialised text (`JSON.stringify()`), which is then deserialised into objects (`JSON.parse()`) by the receiver. Key in double quotes, followed by value.

- Pros
  - Can be called from any domain
  - More concise
  - Commonly used with JavaScript
- Cons
  - Unforgiving syntax
  - Can contain malicious JavaScript

## Cross-Domain Requests

3 workarounds:

1. **Proxy file on the web server:** create a file on your server that collects the data from the remote server, using a server-side language. Your page then gets data from that file - hence _proxy_.
2. **JSONP (JSON with Padding):** add a `<script>` tag which loads the JSON data. Works because there is no restriction on a `<script>`'s `src` attribute.
3. **CORS (Cross-Origin Resource Sharing):** include additional information on the HTTP headers so the browser & server know they should be communicating with each other.

### JSONP

- The web page includes a script that directly requests the JSON data from the server: `<script src="http://example.org/jsonp"></script>`
- It also includes a function to process the data sent by the server: `<script>function showEvents(data) { // process data }</script>`
- The server returns a fill that calls `showEvents()`. This function is the 'Padding':
  ```json
  showEvents({
    "events": [
      {
        "location": "San Francisco, CA",
        "date": "May 1",
        "map": "img/map-ca.png"
      }...
    ]
  });
  ```
  - There is no need to use `parse()` or `stringify()`, because the data is being sent/received as a script file (not as a string) and is therefore automatically treated as an object
  - Actually, the server file is usually written so you can specify the name of the function on the web page, by providing it as a query string: `http://example.org/upcomingEvents.php?callback=showEvents`

## jQuery & Ajax

### `.ajax()`

- More flexible than the other methods - they are just shorthand/wrappers around `.ajax()`
- Provides over 30 settings to control requests. The shorthand methods are different configurations for these settings
  - Specified as a settings object, in object literal notation
- Has a vanilla JS equivalent in `XMLHttpRequest`, `fetch()`

### Requests

| Method Name     | Action                                                                | Vanilla JS Equivalent       |
| --------------- | --------------------------------------------------------------------- | --------------------------- |
| `.load()`       | Loads HTML fragments into an element                                  |                             |
| `$.get()`       | Loads data using GET                                                  | `XMLHttpRequest`, `fetch()` |
| `$.post()`      | Loads data using POST                                                 | `XMLHttpRequest`, `fetch()` |
| `$.getJSON()`   | Loads JSON data using GET                                             | `XMLHttpRequest`, `fetch()` |
| `$.getScript()` | Loads and executes JS data using GET (JSONP)                          |                             |
|                 |                                                                       |                             |
| `.serialize()`  | Puts form data into an encoded string (successful form controls only) | `FormData`                  |

### Responses

For methods besides `.load()`, returned data is dealt with via the `jqXHR` object. You can access properties or chain methods.

| jqXHR Property Name | Description                | XMLHttpRequest Equivalent |
| ------------------- | -------------------------- | ------------------------- |
| `.responseText`     | Data returned (text-based) | `.responseText`           |
| `.responseXML`      | Data returned (XML)        | `.responseXML`            |
| `.status`           | HTTP status code           | `.status`                 |
| `.statusText`       | Status description         | `.statusText`             |

| jqXHR Method Name | Description                              | XMLHttpRequest Equivalent |
| ----------------- | ---------------------------------------- | ------------------------- |
| `.done()`\*       | Code to run if request was successful    | `load` event              |
| `.fail()`\*       | Code to run if request was unsuccessful  | `.error` event            |
| `.always()`\*     | Code to run regardless of request status |                           |
| `.abort()`        | Halt communication                       | `.abort()`                |

- \*Note that `success()`, `.error()`, and `.always()` are deprecated.
