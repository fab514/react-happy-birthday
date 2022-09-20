import React from "react";


function App() {
    const data = require('./birthdays.json');
    // function getAge(Birthdate) {
    //     const birthday = new Date(Birthdate).getTime();
    //     const today = Date.now();
    //     const age = (today - birthday) / 31557600000;
    //     return age;
    // }
    console.log(data)
    return <div>Happy Birthday</div>
}

export {App}
