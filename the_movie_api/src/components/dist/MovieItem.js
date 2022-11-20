"use strict";
exports.__esModule = true;
exports.MovieItem = void 0;
var react_1 = require("react");
exports.MovieItem = function (_a) {
  var movieList = _a.movieList;
  return react_1["default"].createElement(
    react_1["default"].Fragment,
    null,
    react_1["default"].createElement(
      "div",
      {
        className:
          "max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700",
      },
      movieList.map(function (item) {
        return react_1["default"].createElement(
          "div",
          {
            className: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3",
            key: item.id,
          },
          react_1["default"].createElement("img", {
            className: "max-w-full h-auto",
            src: "https://image.tmdb.org/t/p/w200" + item.poster_path,
            alt: item.title + " Poster",
          }),
          react_1["default"].createElement(
            "div",
            { className: "p-5" },
            react_1["default"].createElement(
              "h5",
              {
                className:
                  "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
              },
              item.title
            ),
            react_1["default"].createElement(
              "p",
              {
                className: "mb-3 font-normal text-gray-700 dark:text-gray-400",
              },
              "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            ),
            react_1["default"].createElement(
              "a",
              {
                href: "#",
                className:
                  "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
              },
              "Read more",
              react_1["default"].createElement(
                "svg",
                {
                  "aria-hidden": "true",
                  className: "w-4 h-4 ml-2 -mr-1",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                react_1["default"].createElement("path", {
                  "fill-rule": "evenodd",
                  d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                  "clip-rule": "evenodd",
                })
              )
            )
          )
        );
      })
    )
  );
};