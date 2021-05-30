import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "100vh",
        width: "100%",
        border: "2px solid gray",
        borderRadius: "2px"
    }
    return (
        <div>
            <div className="bg-dark text-light" style={footerStyle}>
                <p className="text-center my-2 py-1">
                    Copyright &copy; 2020 | todos-list
                </p> 
            </div>
        </div>
    )
}
