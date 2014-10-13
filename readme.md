##BrowserSync Control panel - playground

The purpose of this repository is allow front-end designers/developers to work on the styling elements of 
 the upcoming BrowserSync control panel.
 
It's just HTML/CSS (using sass), so feel free to pull it down and have a go at reworking the CSS.

You can preview it now by visiting [http://shakyshane.github.io/bs-static/](http://shakyshane.github.io/bs-static/)

##Browser Support
We're only targeting latest Chrome/Safari/Firefox, so use all the modern techniques you want.

##HTML Rules
It will end up being an Angular JS app, so don't edit the structure too much, you *can* add classes to elements
or add more markup where needed though. If you're not sure, just ask me.

##JS
You should not use any Javascript at all. `uilang` is used to provide the `.active` class toggles, but you should 
not edit these or add any others. (as none of it will be used in the actual app)

##CSS/SASS
You are free to do whatever you like with the SASS files, restructure them or even start from scratch if you like.
All existing style were only put in place to give me something to start building the back-end on - so feel
  bad if you want to rip it all out and start again. :)

#Install

Clone this repo

```bash
$ git clone git@github.com:shakyShane/bs-static.git
```

and then, inside the newly created directory, install the tools by running:

```bash
$ sudo npm install -g gulp && npm install
```

#Develop
To have your SASS files auto-compiled when you makes changes, just run:

```bash
$ gulp
```

Now you're good to go - have fun!