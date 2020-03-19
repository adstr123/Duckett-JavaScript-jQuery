# Filtering, Searching & Sorting

You can manage large data by filtering (selecting based on criteria), searching (matching) or sorting (re-ordering).

## Array Methods

| Method Name           | Description                                            | Return Value    |
| --------------------- | ------------------------------------------------------ | --------------- |
| **Adding Elements**   |                                                        |                 |
| `.push()`             | Add 1+ items to the end of the array                   | Array length    |
| `.unshift()`          | Add 1 item to the start of the array                   | Array length    |
| **Removing Elements** |                                                        |                 |
| `.pop()`              | Remove last element from the array                     | Removed element |
| `.shift()`            | Remove first element from the array                    | Removed element |
| **Iterating**         |                                                        |                 |
| `forEach()`           | Execute a function once for each array element         |                 |
| `some()`              | Check if 1+ elements in an array pass some criteria    | Boolean         |
| `every()`             | Check if all elements in an array pass some criteria   | Boolean         |
| **Combining**         |                                                        |                 |
| `concat()`            | Combine this array with specified array                | Combined array  |
| **Filtering**         |                                                        |                 |
| `filter()`            | Create new array with elements that pass some criteria | Filtered array  |
| **Reordering**        |                                                        |                 |
| `sort()`              | Reorder items in the array by UTF-16 code unit values  | Reordered array |
| `reverse()`           | Reverse order of items in the array                    | Reversed array  |
| **Modifying**         |                                                        |                 |
| `.map()`              | Call a function on each element in the array           | Modified array  |

## jQuery Object Filter/Sort Methods

| Method Name          | Description                                                                      |
| -------------------- | -------------------------------------------------------------------------------- |
| **Adding/Combining** |                                                                                  |
| `.add()`             | Add elements to a set of matched elements                                        |
| **Removing**         |                                                                                  |
| `.not()`             | Remove elements from a set of matched elements                                   |
| **Iterating**        |                                                                                  |
| `each()`             | Apply function to each element in a matched set                                  |
| **Filtering**        |                                                                                  |
| `filter()`           | Reduce elements in matched set to those that match a selector/pass some criteria |
| **Converting**       |                                                                                  |
| `toArray()`          | Convert jQuery object to array of DOM elements                                   |

## Arrays vs. Objects

Use arrays when:

- The order of items is important
- You need `Array`'s helpful properties e.g. `.length`, `.sort()`
- You need to easily add and remove objects regularly
- You need to iterate over objects easily

Use objects when:

- You want to access properties using their name
- You have a complex homogenous data structure

## Dynamic Filtering

You can build a slider that automatically shows/hides filtered content based on user input. This is more efficient than rebuilding the HTML with every change, as constant DOM updates can be taxing.

The approach:

- Use an array to keep track of data
  - The array contains objects, each with an index, each containing:
    - ...an object for each entry in the source data, representing all data
    - ...a reference to the corresponding DOM node (HTML table row) on the page
- When dynamically updating:
  - Loop through the array
  - Check each object against the data criteria (in this case, whether their daily rate is within a lower/upper bound)
  - Show/hide the reference DOM node depending on whether it matches that criteria

## Filtered Image Gallery

The approach:

- Use an object to keep track of tags
  - The object contains key/value pairs:
    - Key: the tag name
    - Value: an array of images that have that tag stored as pat of their `data-tags` HTML attribute
- On init:
  - Loop through tags (keys)
  - Add a button for each tag
  - Add a `click` event handler for each button
    - This first hides all active images
    - Then shows the images that have the clicked tag

## Searchable Images

The approach:

- On init, build a cache in the form of an object
  - The object contains key/value pairs:
    - Key: reference to the jQuery object reference to each `<img/>`
    - Value: the converted text in the image's `alt` text
      - The text needs to be converted to lower case & whitespace trimmed to ensure successful use of the `indexOf()` method
- On text input:
  - Convert the query using the same approach as for the `alt` texts
  - Loop over each element in the cache
    - Check if the query exists in the cache element's (image) converted text with `indexOf()`
    - Show the image if it does

## Sorting a table

- `sort()` always compares two values at a time
- By default, `sort()` reorders lexicographically - even with numbers, which can produce weird results
- You can pass a comparison function as a parameter
  - Items will be reordered based on the return value
    - **<0** - `a` before `b`
    - **0** - remain in same order
    - **>0** - `b` before `a`
  - E.g. to reorder in ascending numerical order: `numbers.sort( (a, b) => a - b )`
  - E.g. to order dates, convert to `Date` objects so they can be compared, then to `dateA - dateB`

The approach:

- Store table rows (`<tr>` elements) in the `rows` array
- When a column header (`<th>` element) is clicked:
  - If column already has `ascending` or `descending` class, simply toggle to the opposite, reverse the `rows` array and overwrite the table contents with `rows`
  - Else add the relevant order class
  - Sort the column:
    - The sort function of which depends on the data type, specified in the column's `data-sort` attribute
    - Assign `a` and `b` in the `sort()` function by selecting the correct column index in each `row` element
  - Overwrite the table contents with the reordered `rows`
