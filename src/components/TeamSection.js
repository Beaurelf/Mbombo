import React from 'react'
import manImage from '../img/homme.png'
import womanImage from '../img/femme.png'
import TeamItem from './TeamItem'

const teams = [
    {
        name:'Diffo',
        role:'Informaticien',
        bref:'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        image:manImage
    },
    {
        name:'Daniel',
        role:'Informaticien',
        bref:'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        image:womanImage
    },
    {
        name:'Beaurel',
        role:'Informaticien',
        bref:'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        image:manImage
    },
    {
        name:'Pamela',
        role:'Informaticien',
        bref:'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        image:womanImage
    },
    {
        name:'Anicet',
        role:'Informaticien',
        bref:'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        image:manImage
    }
]

function TeamSection() {
    return (
        <div className='team-section row justify-content-center'>
            <h2 className='text-center'>Notre Équipe</h2>
            {teams.map((member, index) => {
                return(
                    <TeamItem
                        key={index}
                        name={member.name}
                        role={member.role}
                        image={member.image}
                        text={member.bref}
                    />  
                )
            })}
        </div>
    )
}

export default TeamSection
