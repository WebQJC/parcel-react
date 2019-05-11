import React from "react";
import ReactDOM from "react-dom";

const myhi = React.createElement('h1' , {id: 'myhi',title: 'this is a h1'}, 'helloworld');

ReactDOM.render(myhi, document.getElementById('app'));