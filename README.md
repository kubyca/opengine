&nbsp;
<p align="center">
    <a href="https://github.com/kubyca/opengine/">
        <img src="https://static.kuby.ca/opengine.png" alt="OPEngine" width="200px" />
    </a>
</p>
<h3 align="center">Modular, robust, and reliable.</h3>
<p align="center">A modular API-first framework for building applications with no bloat included. Typescript + Express, with built-in security rules, and CSRF protection.</p>
<hr />
<p align="center">
    <a href="#features">Features</a> | <a href="#installation">Installation</a> | <a href="#contribution">Contributing</a> | <a href="#use-cases">Use Cases</a> | <a href="https://github.com/kubyca/opengine/issues/new">Create Issue</a> | <a href="https://kuby.ca/">Follow the development</a>
</p>

OPEngine is undergoing active development, you are free to star, watch, and contribute. All code written here is licensed under MIT, you are free to do what you wish with this code, and encourage you to do so!

# Features

- Modular components
- Import just what you need
- Express web server, with built-in security rules
- Built-in CSRF Protection
- No steep learning curve

# Installation

## Development Environment

Setting up a development environment is simple, you will need [git](https://git-scm.org/) installed, and [nodejs](https://nodejs.org/) in order for this to work. Once these are installed, you can run the following commands:

1. Clone the repository

> $ git clone https://github.com/kubyca/opengine.git

2. Open the directory and install dependencies

> $ cd opengine && npm install

3. Start the development server

> $ npm run dev

You're all set! You should now be able to access your server at [127.0.0.1:5861](http://127.0.0.1:5861)

# Contribution Guidelines

Thanks for your interest being a contributor! All contributions are welcome, this is a work-in-progress still, and contributions come in all shapes and sizes, some code, some feedback, and a mixture of that inbetween. I'd love to hear what your thoughts are!

A general rule of thumb is try to be descriptive about your changes in the pull request and commits, don't be afraid to squash many development commits if necessary into one clean commit!

# Use-cases

Suppose you wanted a simple microservice, you didn't need tons of batteries-included features such as view engines, server-side-rendering, etc. you just want a simple "get it done" framework, this is a goal opengine intends to meet. A simple framework, designed to be powerful and modular to the developer, without adding millions of dependencies and vendor-locking you into other dependencies. The flexibility to choose what you want, how you want it, where you want it.