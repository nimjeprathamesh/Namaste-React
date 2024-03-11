/* 1st
* <div id='react'>
*   <h1>Hello World from React</h1>
* </div>
*/ const heading = React.createElement("h2", {
    id: "heading"
}, "Hello World from React");
const react = ReactDOM.createRoot(document.getElementById("react"));
react.render(heading);
/* 2nd
* <div id='parent'>
*   <div id='child'>
*       <h1>I am h1 tag</h1>
*   </div>
* </div>
*/ // const parent = React.createElement(
//     'div',
//     {id: 'parent'},
//     React.createElement(
//         'div',
//         {id: 'child'},
//         React.createElement('h1', {}, 'I am an h1 tag.')
//     )
// );
// const root = ReactDOM.createRoot(document.getElementById('nestedreact'));
// root.render(parent);
/* 3rd
* <div id='parent'>
*   <div id='child'>
*       <h1>I am h1 tag</h1>
*       <h2>I am h2 tag</h1>
*   </div>
* </div>
*/ // const parent = React.createElement(
//     'div',
//     {id: 'parent'},
//     React.createElement('div', {id: 'child'}, [
//         React.createElement('h1', {}, 'I am an h1 tag.'),
//         React.createElement('h2', {}, 'I am an h2 tag.')
//     ])
// );
// const root = ReactDOM.createRoot(document.getElementById('nestedreact'));
// root.render(parent);
/* 4rd
* <div id='parent'>
*   <div id='child1'>
*       <h1>I am h1 tag</h1>
*       <h2>I am h2 tag</h1>
*   </div>
*   <div id='child2'>
*       <h1>I am h1 tag</h1>
*       <h2>I am h2 tag</h1>
*   </div>
* </div>
*/ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am an h1 tag."),
        React.createElement("h2", {}, "I am an h2 tag.")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am an h1 tag."),
        React.createElement("h2", {}, "I am an h2 tag.")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("nestedreact"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
