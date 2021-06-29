import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import WineDine from '../../assets/images/wine-and-dine.jpg';
import MasterTicket from '../../assets/images/masterTicket.JPG';
import GitHub from '../../assets/images/github.jpg';

function Portfolio() {

    const projects = [
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
            name: "Project 3",
            description: "Contact information",
            thumbnail: GitHub,
            githubUrl: "",
            appUrl: "",
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
