import React from 'react'
import Top from "./top";
import Modal from "./Modal";
import Bookshelve from "./content/Bookshelve";
import Carousel from "./carousel";
import Clients from "./Clients";


function PageOne() {
    return (
        <div className="site">
        <Modal/>
        <Top />
        <Carousel />
        <Bookshelve />
        <Clients/>
        </div>
    )
}

export default PageOne
