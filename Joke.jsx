import React from 'react';

function Eminem(props) {
    return (
        <div>
            <a href="https://en.wikipedia.org/wiki/Eminem">Eminem</a>
            {props}
        </div>
    );
}

function Joke() {
    // NOTE: We are NOT giving ANY props to Eminem ;)) Exactly as he predicted!
    return <Eminem />;
}

// "Ha-ha!"
Joke();

// EXPLANATION: (for folks who need it - but common, most of you seriosly should'nt need an explanation)
//
// In 'Till I Collapse there is a famous line: "I'll probably never get the props I feel I ever deserve"
//
// ...combination of listening to this recently and being an active developer -> I got an idea...
