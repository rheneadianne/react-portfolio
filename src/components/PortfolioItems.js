import React from "react";

function PortfolioItems(props) {
    return (
        <article class='row justify-content-center'>
            {props.items.map((item) => (
                <article class="card col-lg-5 col-md-12 p-1 m-5">
                    <img class="card-img-top" src={item.imageImport} alt="Project Screenshot"></img>
                    <article class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.desc}</p>
                        <a href={item.repo} class="btn btn-dark mxy-2">Repo</a>
                        <a href={item.live} class="btn btn-dark m-2">Live</a>
                    </article>
                </article>
            ))}
        </article>

    )
}

export default PortfolioItems