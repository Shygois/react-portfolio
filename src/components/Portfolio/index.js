import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import WineDine from '../../assets/images/wine-and-dine.jpg';
import MasterTicket from '../../assets/images/masterTicket.JPG';
import GitHub from '../../assets/images/github.jpg';

function Portfolio() {

    const projects = [
        {
            name: "Project 1",
            description: "Photos and links to projects",
            thumbnail: WineDine,
            githubUrl: "",
            appUrl: "",
        },
        {
            name: "Project 2",
            description: "See past and current work experience",
            thumbnail: MasterTicket,
            githubUrl: "",
            appUrl: "",
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
                    {/* // link will go to appUrl */}
                        <a href=""><Card.Img variant="top" src={project.thumbnail} /></a>
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
