// import React from 'react'
import { Link } from "react-router-dom"

import { Button } from "@chakra-ui/react"

const Header = () => {
    return (
        <>
            <div>Home</div>
            <div>About</div>
            <div>Sklls</div>
            <Link to={"/footer"}>Footer</Link>
            <Button > CLick Me!</Button>
        </>
    )
}

export default Header