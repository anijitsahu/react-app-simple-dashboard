# react-app-simple-dashboard-page-pwa

A Simple Dashboard page using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook and [Chart JS](https://www.npmjs.com/package/react-chartjs-2) for plotting charts.

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to _transpile_ all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

All the charts are drawn by a popular library named [Chart JS](https://www.npmjs.com/package/react-chartjs-2). In version 2 it supports [React JS](https://reactjs.org/docs/getting-started.html) components.

For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of [CSS3](https://www.w3schools.com/css/) is used for layout creation purpose. [Fontawesome](https://fontawesome.com/) icons are added for aesthetic purpose.

It is a [Progressive Web Application(PWA)](https://web.dev/progressive-web-apps/)

This is a _responsive web application_ for viewing in both Mobile and Desktop.


## Features

1.  Code is rewritten with [React JS 18](https://reactjs.org/docs/getting-started.html)
2.  Latest features of JavaScript i.e. ES6, ES7, ES8 is used
3.  [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
4.  **Charts code** is rewritten with [react-chatjs-2 (v4.0)](https://react-chartjs-2.netlify.app/) and [Chart.js (v3.7)](https://www.chartjs.org/docs/latest/)

<br/>

5.  This is a Simple Dashboard page Application
6.  Charts are plotted using [Chart JS](https://www.npmjs.com/package/react-chartjs-2)
7.  Charts are upadated when user changes the hourly watching rate of channel viewing

<br/>

8.  Maximum and minimum values of the hourly rate is `24` and `0` respectively
9.  Three types of chart namely _Pie, Doughnut_ and _Bar_ is available
10. _Tooltips_ on each of the graph is supported
11. _Legend_ and _title_ showing for data indication is supported

<br/>

12. This is just a Simple Carousel program

- Next image can be seen by clicking `>` button
- Next button will not be shown when the last image is reached

13. Previous image can be seen clicking `<` button

- While loading the first image previous button will not be there for obvious reason

14. No database / storage is there. So no changes are _persistant_
15. Mobile view is supported
16. As it is a [Progressive Web Application(PWA)](https://web.dev/progressive-web-apps/) it supports features like **installability, offline load**  through *manifest.json and Service Worker*

17. Some of Unit Test Cases are added using [Jest](https://jestjs.io/docs/getting-started) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) 

## Installation

Clone the repository:

```bash
$ git clone https://github.com/anijitsahu/react-app-simple-dashboard-page.git
```

Navigate inside the directory and install all the dependencies:

```bash
$ cd react-app-simple-dashboard-page

# install dependencies
$ npm install
```

Now run the application

```bash
$ npm start
```

```bash
# Optional to run test cases
$ npm test
```

Open the `localhost:8080/` in a web browser

Change the _hourly_ watching values of the popular channels and see the changes in the graph

Choose the graph types from `DOUGHNUT, PIE` and `BAR` for different types of output

_tested with latest version of <img src="screenshots/chrome.png" width="20px" title="Google Chrome">[Google Chrome](https://www.google.com/chrome/) and <img src="screenshots/firefox.png" width="25px" title="Firefox Developer edition">[Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)_

## Screenshots

Some screens of the application is given below for better understanding.

Desktop as well as Mobile version of the screenshots are given side by side.

<p> Home Screen <br/> 
 <img src="screenshots/desktop 1.png" width="590px" title="Home screen"/>
 <img src="screenshots/mobile 1.png" width="190px" title="Home screen"/> 
</p>
 
 <p> Pie Chart <br/> 
 <img src="screenshots/desktop 2.png" width="590px" title="Pie Chart screen"/>
 <img src="screenshots/mobile 2.png" width="190px" title="Pie Chart screen"/> 
</p>

 <p> Bar Chart <br/> 
 <img src="screenshots/desktop 3.png" width="590px" title="Bar Chart screen"/>
 <img src="screenshots/mobile 3.png" width="190px" title="Bar Chart screen"/> 
</p>

 <p> Tooltips of each chart <br/> 
 <img src="screenshots/desktop 4.png" width="590px" title="Tooltips of each chart screen"/>
 <img src="screenshots/mobile 4.png" width="210px" title="Tooltips of each chart screen"/> 
</p>
