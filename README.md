# web-framework
Trying my hand at creating a simple framework for building dynamic websites w/out the complexity of a large framework like react, vue, angular, etc.

> [!IMPORTANT]
> This should be simple, more like an HTMX-style framework not a React, Angular, or Vue framework. Also, not a jQuery-style library.

## Tasks

### Todos
- [ ] Look up proper citation formats for references 
- [ ] Read up on creating JavaScript modules, or modern ways of organizing JS code--it has been a while
- [ ] Look into testing frameworks for JavaScript
- [-] 

### Completed
- [x] Initial research on modern JavaScript modules
- [x] Make a first pass at executing an "init" function once that page is loaded--does nothing.

## Name
Currently, calling it `jeuje` because the word kind of encapsulates the purpose of the framework--it is used to "jeuje" up web pages--and I also just like the word.

The YouTube video on bone broth (linked at the end of the document) shows how I've always heard it pronounced--if you need that. There's also a little New York Times blurb, also in the References, on spellings and origin of the word I found interesting. I kinda purposefully used the less common spelling (according to the article) because that's kinda how I imagined it was spelled, and, +1, it had "j"s in it. :)

## Installation/Usage
Looking at any of the examples, you can see that all it really takes is to download the `jeuje.js` file, reference it in your js code (`<script type="module" src="js/main-or-whatever.js"></script>`), and [use it in your module](./examples/simple/simple.js).

No need to build it or anything. I don't think anything like that will be needed, but we'll see.

> [!TIP]
> You may come across a CORS error if just loading your HTML file locally outside a server. Because of security precautions in browsers these days, you'll probably want to fire up your favorite (or whatever is easist) webserver. Initially, I just used the [`npm` `http-server`](https://www.npmjs.com/package/http-server) since I already had it installed. 
> `http-server -o --cors` was the command I used.

## References
- ["Binging with Babish: Bone Broth from The Mandalorian"](https://www.youtube.com/watch?v=6GHwG1y-NE0&t=337) - Babish Culinary Universe, "YouTube.com", 5 years ago
- ["‘Jeuje,’ ‘Zhoosh,’ ‘Zhuzh’: A Word of Many Spellings, and Meanings"](https://www.nytimes.com/2022/01/31/style/jeuje-zhoosh-zhuzh.html) - Hayley Phelan,
"New York Times", Jan. 31, 2022
