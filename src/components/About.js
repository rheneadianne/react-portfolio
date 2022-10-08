import React from "react";
import itme from './../assets/images/it-me.png'

function About() {
    return (
        <section class="card m-5">
            <section class='row'>
            <article class="selfie col-lg-4 col-md-6 col-sm-12"><img src={itme} class= "img-fluid" alt='Drawn Selfie of Web Developer in style of video game Hades'/></article>
            <article class="card-body col-lg-8 col-md-6 col-sm-12">
                <h2 class="p-4">About me</h2>
                <p class="p-4">
                    Hello! I'm <span>Rhenea Dianne.</span>  <br />
                    You can call me by either name! <br /><br />
                    I'm a Public Health Nurse currently working as an Outbreak Management Team Lead for Toronto Public Health. <br /><br />
                    I'm hoping to be an Epidemiologist one day with the province of Ontario! <br /><br />
                    In the mean time, I'm broadening my skills in various languages and data analytics with some hobby Web Development on the side.
                </p>
            </article>
        </section>
        </section>
    )
}

export default About;