
import React, { useState } from 'react';

import { doctors } from '../../data';

import './doctors.scss'

export default function 
() {
    const [doctorsId, setdoctorsId] = useState(1)
  return (
    <div className="doctors" id='team'>
        <div className="intro">
            <div className="header">

                Our <span>Doctors</span>

            </div>
            <div className="tittle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iste eum <br/>cumque accusantium molestias, sint illo porro, 
            

            </div>

            <div className="break">

            </div>
        </div>
        <div className="doctorsList">

            {doctors.map((elm)=><div onClick={()=>setdoctorsId(elm.id)} className={(doctorsId==elm.id)? 'doctorsContainer active':'doctorsContainer'}>
                <img src={elm.img} alt="" />
            </div>)}



        </div>
        <div className="doctorsInfo">
            <div className="imgAndName">
                <img src={doctors.filter((item)=>item.id==doctorsId)[0].img} alt="" />
                <div className="nameAndIspecialist">
                <div className="specialist">
                    {doctors.filter((item)=>item.id==doctorsId)[0].specialist}

                </div>
                <div className="name">
                    {doctors.filter((item)=>item.id==doctorsId)[0].name}

                </div>
            </div>
            <div className="btn">
                <a href="#">Make an Appintment</a>
            </div>
            </div>
            <div className="overview">
                <div className="header">
                    Overview for <span>{doctors.filter((item)=>item.id==doctorsId)[0].name}</span>
                </div>
                <div className="tittle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ut 
                    nisi adipisci deleniti, repudiandae magnam distinctio
                     et sunt rem ducimus, excepturi deserunt harum cum nulla reprehenderit 
                     quia molestias, nam maiores!

                </div>
                <div className="info">
                    <div className="row">
                        <span>Experience</span>
                        Security in {doctors.filter((item)=>item.id==doctorsId)[0].specialist}
                    </div>
                    <div className="row">
                        <span>Board Cirtification</span>
                        {doctors.filter((item)=>item.id==doctorsId)[0].specialist}
                    </div>
                    <div className="row">
                        <span>Appointment</span>
                        Mon-Sat
                    </div>
                    <div className="row">
                        <span>Scedule</span>
                        8:00 AM to 4 PM
                    </div>
                    <div className="row">
                        <span>
                            Primary Address
                        </span>
                        Nijpara,Birganj<br/>,Dinajpur
                    </div>
                </div>
            </div>
            <div className="patientComplement">
                <div className="heading">
                    Patient Complement
                </div>
                
                <div className="details">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odit quam blanditiis consequatur tempora labore commodi voluptatem est distinctio dicta! Dolores autem nesciunt, beatae laudantium non facere at voluptas quo?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique odit quam blanditiis consequatur tempora labore commodi voluptatem est distinctio dicta! Dolores autem nesciunt, beatae laudantium non facere at voluptas quo?
                    
                </div>
                <div className="img">
                    <img src={doctors[6].img} alt="" />
                </div>
                
                <div className="name">
                    Deniel Forg
                </div>
                <div className="student">
                    Student
                </div>
            </div>
            

        </div>
    </div>
  )
}
