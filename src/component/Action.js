import React from 'react'
import Back from '../Images/3c.svg'
import '../css/action.css'

function Action() {
    return (
        <div class="cta" style={{ borderTop: "solid", borderColor: "#ccc" }}>
            <div class="container">
                <div class="text-center">
                    <h3>Our Focus Segments</h3>
                    <div class="mx-auto py-4">
                        <img class="" src={Back} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Action