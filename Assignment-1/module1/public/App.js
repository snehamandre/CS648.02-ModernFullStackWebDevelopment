"use strict";

var nameComponent = /*#__PURE__*/React.createElement("div", {
  id: "out"
}, /*#__PURE__*/React.createElement("h2", {
  id: "name_comp"
}, "Sneha Mandrekar"));
var pictureComponent = /*#__PURE__*/React.createElement("div", {
  id: "imageWrapper"
}, /*#__PURE__*/React.createElement("img", {
  id: "headShot",
  src: "./image.jpg"
}));
var introComponent = /*#__PURE__*/React.createElement("div", {
  id: "introWrapper"
}, /*#__PURE__*/React.createElement("p", {
  id: "intro_comp"
}, "sneha Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
var buttonComponent = /*#__PURE__*/React.createElement("div", {
  id: "buttonWrapper"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/snehamandre"
}, /*#__PURE__*/React.createElement("button", {
  id: "button_comp"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));