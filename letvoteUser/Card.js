import React from "react"
const Card = (props) => {
    return <div>
        <h2>Student</h2>
        <p>Identity Card</p>
        <div style={{ display: "flex" }}>
            <div>
                <p>Student Id</p>
                <p>{props.uni}</p>

                <p>Name</p>
                <p>{props.name}</p>

                <p>Born</p>
                <p>{props.year}</p>
            </div>
            <div>
                <img src="data:image/png;base64,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" />
            </div>
        </div>
    </div>

}
const Welcome = (props) => {
    return <h2>Welcome: {props.name}</h2>
}
export { Card, Welcome }