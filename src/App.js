import React from "react";


function App() {
    const data = require('./birthdays.json');
    function getAge(Birthdate) {
        const birthday = new Date(Birthdate).getTime();
        const today = Date.now();
        const age = (today - birthday) / 31557600000;
        return age;
    }
    console.log(data);
    console.log(getAge);
    return (
        <>
            <div>{Object.keys(data).map((i) => (
                <p key={i}>
                    {data.birthday} is {data.firstName}'s birthday
                </p>
            ))};
            </div>
            <div>Happy Birthday</div>

        </>
    )
    
}

export {App}
