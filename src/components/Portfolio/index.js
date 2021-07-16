import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import WineDine from '../../assets/images/wine-and-dine.jpg';
import MasterTicket from '../../assets/images/masterTicket.JPG';
import TechBlog from '../../assets/images/techblog.JPG';
import NoteTaker from '../../assets/images/notetaker.JPG';
import WeatherDashboard from '../../assets/images/weatherdash.JPG';
import CalendarApp from '../../assets/images/WorkdayScheduler.JPG';
import MasterTicketTwo from '../../assets/images/MasterTicketTwo.JPG';

function Portfolio() {

    const projects = [
        {
            name: "masterTicket2.0",
            description: "masterTicket2.0 is an updated version of masterTicket and continues to be the place to find music events for you.",
            thumbnail: MasterTicketTwo,
            githubUrl: "https://github.com/UCB-Bootcamp/masterTicket2.0",
            appUrl: "https://masterticket2.herokuapp.com/",
        },
        {
            name: "Wine & Dine",
            description: "Wine and Dine is an application built to help users pair wine with food.",
            thumbnail: WineDine,
            githubUrl: "https://github.com/UCB-Bootcamp/wine-and-dine",
            appUrl: "https://ucb-bootcamp.github.io/wine-and-dine/",
        },
        {
            name: "masterTicket",
            description: "masterTicket is the place to find music events for you.",
            thumbnail: MasterTicket,
            githubUrl: "https://github.com/UCB-Bootcamp/masterTicket",
            appUrl: "https://masterticket.herokuapp.com/",
        },
        {
            name: "Tech Blog",
            description: "Tech blog site where developers can publish their own blog posts and comment on others.",
            thumbnail: TechBlog,
            githubUrl: "https://github.com/Shygois/tech-blog",
            appUrl: "https://desolate-chamber-64920.herokuapp.com/",
        },
        {
            name: "Note Taker",
            description: "App that allows users to add, and edit notes.",
            thumbnail: NoteTaker,
            githubUrl: "https://github.com/Shygois/Note-taker",
            appUrl: "https://intense-garden-81829.herokuapp.com/",
        },
        {
            name: "Weather Dashboard",
            description: "For travelers who want to see the weather for multiple cities in order to plan a trip accordingly.",
            thumbnail: WeatherDashboard,
            githubUrl: "https://github.com/Shygois/weather-dashboard",
            appUrl: "https://shygois.github.io/weather-dashboard/",
        },
        {
            name: "Work Day Scheduler",
            description: "Calendar app that allows users to create a daily schedule.",
            thumbnail: CalendarApp,
            githubUrl: "https://github.com/Shygois/calendar-app",
            appUrl: "https://shygois.github.io/calendar-app/",
        },
    ];

    const gotoGithub = (event) => {
        let githubUrl = event.target.dataset.url;
        window.location.href = githubUrl;
    }
    return (
        <>
        {
            projects.map((project, index) => {
                return (
                    <Card key={index} style={{ width: '18rem' }}>
                        <a href={project.appUrl}><Card.Img variant="top" src={project.thumbnail} /></a>
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <Button variant="primary" data-url={project.githubUrl} onClick={gotoGithub}>Github Repo</Button>
                        </Card.Body>
                    </Card>
                )
            })
        }
        </>
    )

}

export default Portfolio;
