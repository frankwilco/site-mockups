# Lists
HTML provides two built-in ways to represent a list of items. But first, we have to take note of three important tags that we will use throughout this exercise: `<li>`, `<ul>`, `<ol>`.

## List item <li>
Before we head on to the two methods of creating lists, the `<li>` or List Item element must be tackled first. Every entry that we will put in our list must be placed inside the list item element, except for the list element inside another list, or nested lists, to be discussed later.

### Example:
```
<li>Item one</li>
<li>Item two</li>
<li>Item three</li>
```

## Unordered lists <ul>
The first (and probably the easiest) method of creating a list of items is expressing it in a bulleted form. For this purpose, `<ul>`, which stands for Unordered List can be used. In creating our own unordered list, we have to start with the `<ul>` tag, include our list entries using `<li>`, which means list item, and close the list with `</li>`.

### Example:
```
<ul>
    <li>This is the first item in the list.</li>
    <li>This is the second item in the list.</li>
    <li>And lastly, the final or third item in the list.</li>
</ul>
```
### Output:
- This is the first item in the list.
- This is the second item in the list.
- And lastly, the final or third item in the list.

---

## Ordered lists <ol>

Looks somehow easy, right? On to the second part, what if we want our list to be numbered? The `<ol>` tag, or Ordered List comes into play.

Similar to unordered lists, the general strucutre is practically the same, except that we now have to start with the `<ol>` tag, include our list entries using `<li>`, and close the list with `</ol>`

### Example:
```
<ol>
    <li>This is the first item in the list.</li>
    <li>This is the second item in the list.</li>
    <li>And lastly, the final or third item in the list.</li>
</ol>
```
### Output:
1. This is the first item in the list.
2. This is the second item in the list.
3. And lastly, the final or third item in the list.

---

## Attributes accepted by Ordered lists <ol>

Ordered lists also accepts some attributes that might be useful in some cases. These are:
- `reversed`
- `type`
- `start`

**`reversed` attribute**

The first attribute, `reversed` interprets the list in a reversed order, that is, the counting or the way list items are numbered is from highest to lowest, like 5 to 1. It should be noted that this attribute does NOT reverse or modify the order of the list elements themselves, rather the counting of list times is the only thing that's changed.

### Example:
```
<ol reversed>
    <li>This is the first item in the list.</li>
    <li>This is the second item in the list.</li>
    <li>And lastly, the final or third item in the list.</li>
</ol>
```
### Output:
3. This is the first item in the list.
2. This is the second item in the list.
1. And lastly, the final or third item in the list.

**`type` attribute**

The second attribute, `type` allows us to set the numbering type, the style in which the list will be organized. There are only five (5) numbering types that are accepted by this attribute.
- `a` for lowercase letters
- `A` for uppercase letters
- `i` for lowercase Roman numerals
- `I` for uppercase Roman numerals
- `1` for numbers (default)

The following is an example that uses lowercase letters.
### Example:
```
<ol type="a">
    <li>This is the first item in the list.</li>
    <li>This is the second item in the list.</li>
    <li>And lastly, the final or third item in the list.</li>
</ol>
```
### Output:
a. This is the first item in the list.
b. This is the second item in the list.
c. And lastly, the final or third item in the list.

The following is an example that uses uppercase Roman numerals.
### Example:
```
<ol type="I">
    <li>This is the first item in the list.</li>
    <li>This is the second item in the list.</li>
    <li>And lastly, the final or third item in the list.</li>
</ol>
```
### Output:
I. This is the first item in the list.
II. This is the second item in the list.
III. And lastly, the final or third item in the list.

**`start` attribute**

The third attribute, `start` specifies from what number should the list start. For example, we have a list of three items, but we wanted it to start counting from number 5. To do this, we'll use the `start` attribute. It should be noted that only Arabic numerals (1, 2, 3) are accepted by this attribute, regardless of what is defined in the `type` attribute that was shown earlier.

The following is an example of a list with three items, but begins counting with the number five (5):
### Example:
```
<ol start="5">
    <li>This is the first item in the list.</li>
    <li>This is the second item in the list.</li>
    <li>And lastly, the final or third item in the list.</li>
</ol>
```
### Output:
5. This is the first item in the list.
6. This is the second item in the list.
7. And lastly, the final or third item in the list.

Likewise, the following is an example of a list with three items using uppercase Roman numerals:
### Example:
```
<ol type="I" start="5">
    <li>This is the first item in the list.</li>
    <li>This is the second item in the list.</li>
    <li>And lastly, the final or third item in the list.</li>
</ol>
```
### Output:
V. This is the first item in the list.
VI. This is the second item in the list.
VII. And lastly, the final or third item in the list.

---

## Nested lists

Perhaps you have this question: Can I mix both ordered lists and unordered lists?
The answer is: **YES**, and we call them nested lists, that is, a list inside another list. You can include a *nearly infinite* number of lists inside another list, and thus, you are abusing computers!

The following is an example of an ordered list with an unordered list inside it:

### Example:
```
<ol>
    <li>This is the first item in the list.</li>
    <ul>
        <li>Bullet 1</li>
        <li>Bullet 2</li>
        <li>Bullet 3</li>
    </ul>
    <li>This is the second item in the list.</li>
    <li>And lastly, the final or third item in the list.</li>
    <ul>
        <li>Bullet 1</li>
        <li>Bullet 2</li>
        <li>Bullet 3</li>
    </ul>
</ol>
```
### Output:
1. This is the first item in the list.
    - Bullet 1
    - Bullet 2
    - Bullet 3
2. This is the second item in the list.
3. And lastly, the final or third item in the list.
    - Bullet 1
    - Bullet 2
    - Bullet 3


Likewise, the same thing can be done with an unordered list inside an ordered list:
### Example:
```
<ul>
    <li>This is the first item in the list.</li>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
    <li>This is the second item in the list.</li>
    <li>And lastly, the final or third item in the list.</li>
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
</ul>
```
### Output:
- This is the first item in the list.
    1. Item 1
    2. Item 2
    3. Item 3
- This is the second item in the list.
- And lastly, the final or third item in the list.
    1. Item 1
    2. Item 2
    3. Item 3

---

## Abusing Nested Lists (not to be taken literally)
True to what I said earlier, you can practically include a *nearly infinite* number of lists inside another list:

### The Pyramid of Giza - Example:
```
<ul>
    <li>This is the first item in the list.</li>
    <ul>
        <li>Aaaaa</li>
        <ul>
            <li>Aaaaa</li>
            <ul>
                <li>Aaaaa</li>
                <ol>
                    <li>Loooooooo</li>
                    <ol>
                        <li>Bbbbbbbbbb</li>
                        <ul>
                            <li>AAAAAAAAAAAAAAAA</li>
                            <ul>
                                <li>Bbbbbbbbbbbbbbbbbbb</li>
                                <ol start="2">
                                    <li>AAAAAAAAAAAAAAAAA</li>
                                    <ol type="I">
                                        <li>Looooooooooooooooooooooo</li>
                                        <ul>
                                            <li>XXXXXXXXXXXXXXXXXXXXXXXX</li>
                                        </ul>
                                    </ol>
                                </ol>
                            </ul>
                        </ul>
                    </ol>
                </ol>
            </ul>
        </ul>
    </ul>
</ul>
```
### The Pyramid of Giza - Output:
- This is the first item in the list.
    - Aaaaa
        - Aaaaa
            - Aaaaaa
                1. Loooooooo
                    1. Bbbbbbbbbb
                        - AAAAAAAAAAAAAAAA
                            - Bbbbbbbbbbbbbbbbbbb
                                2. AAAAAAAAAAAAAAAAA
                                    I. Looooooooooooooooooooooo
                                        - XXXXXXXXXXXXXXXXXXXXXXXX

---

## References
- MDN Contributors. (2020, December 23). <ul>: The Unordered List element. *Mozilla Web Docs*. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
- MDN Contributors. (2020, December 18). <ol>: The Ordered List element. *Mozilla Web Docs*. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
- MDN Contributors. (2020, December 18). <li>. *Mozilla Web Docs*. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
