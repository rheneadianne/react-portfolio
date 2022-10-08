import React from "react";
import itme from './../assets/images/it-me.png'

function About() {
    return (
        <section class="about" id="about">
            <article class="selfie"><img src={itme} alt='Drawn Selfie of Web Developer in style of video game Hades'/></article>
            <article class="desc">
                <h2>About me</h2>
                <p>
                    Hello! I'm <span>Rhenea Dianne.</span>  <br />
                    You can call me by either name! <br /><br />
                    I'm a Public Health Nurse currently working as an Outbreak Management Team Lead for Toronto Public Health. <br /><br />
                    I'm hoping to be an Epidemiologist one day with the province of Ontario! <br /><br />
                    In the mean time, I'm broadening my skills in various languages and data analytics with some hobby Web Development on the side.
                </p>
            </article>
        </section>
    )
}

export default About;