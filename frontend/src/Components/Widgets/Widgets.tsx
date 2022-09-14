import React from 'react'


interface WidgetsProps {
    type: string;
}

const Widgets = ({ type }: WidgetsProps) => {


    switch (type) {
        case "home":
            // send home widgets
            break;
        case "users":
            // send user widgets
            break;
        default:
            break;
    }
    return (
        <div>

        </div>
    )
}

export default Widgets;