import React from "react";

function Navigation(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (

        <section>
            <ul class = "nav justify-content-center">
                {tabs.map((tab) => (
                    <li class = "nav-item">
                        <a href={"#" + tab.toLowerCase()} onClick={() => props.handlePageChange(tab)} class={props.currentPage === tab ? "nav-link text-dark" : "nav-link text-black-50"}>
                            {props.currentPage === tab ? tab.toUpperCase() : tab.toLowerCase()}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Navigation;