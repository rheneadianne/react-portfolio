import React from "react";
import PortfolioItems from "./PortfolioItems";
import iBetter from './../assets/images/iBetter.png'
import Vent from './../assets/images/demoGif.gif'
import Eat from './../assets/images/Eat.png'
import Code from './../assets/images/web-api-code-quiz.gif'
import Weather from './../assets/images/Weather_Dashboard.gif'
import Work from './../assets/images/scheduler.gif'


const items = [
    {
        title: 'IBetter',
        desc: 'Track your habits on a server, anywhere, everywhere',
        repo: 'https://github.com/Vinyldude8896/iBetter/',
        live: 'https://ibetter.herokuapp.com/',
        imageImport: iBetter
    },
    {
        title: 'Vent',
        desc: 'Anonymously post your thoughts to the digital void. Vent and shout your thoughts to the world.',
        repo: 'https://github.com/rheneadianne/vent',
        live: 'https://challenge-vent.herokuapp.com/',
        imageImport: Vent
    },
    {
        title: 'Eat, Drink, Relax',
        desc: 'Interactive webapp to help choose a random recipe, cocktail, and movie',
        repo: 'https://github.com/rheneadianne/EatDrinkRelax',
        live: 'https://rheneadianne.github.io/EatDrinkRelax/',
        imageImport: Eat
    },
    {
        title: 'Code Quiz',
        desc: ' Frontend Text your knowledge quiz',
        repo: 'https://rheneadianne.github.io/code-quiz/',
        live: 'https://github.com/rheneadianne/code-quiz',
        imageImport: Code
    },
    {
        title: 'Weather Dashboard',
        desc: 'Simple weather dashboard created using OpenWeatherAPI.',
        repo: 'https://github.com/rheneadianne/weather-dashboard',
        live: 'https://rheneadianne.github.io/weather-dashboard',
        imageImport: Weather
    },
    {
        title: 'Work Day Scheduler',
        desc: 'Simple daily planner to plan your work hours for the day',
        repo: 'https://github.com/rheneadianne/Work-Day-Scheduler',
        live: 'https://rheneadianne.github.io/Work-Day-Scheduler/',
        imageImport: Work
    }
]

function Portfolio() {
    return (
        <section>
            <PortfolioItems items={items}></PortfolioItems>
        </section>
    )
}

export default Portfolio;

// ill do the html later one second