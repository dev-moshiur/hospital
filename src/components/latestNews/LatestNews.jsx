

import './latestNews.scss'
import React from 'react'

import { news } from '../../data';
import News from '../news/News';

export default function LatestNews() {
  return (
    <div className='latestNews' id='blog'>


      <div className="intro">
        <div className="heading">
          Latest <span>News</span> 
        </div>
        <div className="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique tempore <br/>nostrum veritatis quam explicabo? In reiciendis eius
              
        </div>
        <div className="break">

        </div>
      </div>
      <div className="itemContainer">

        {news.map((elm)=><News image={elm.image} name={elm.name} comment={elm.comment} like={elm.like} about={elm.about} caption={elm.caption} text={elm.text}/>)}

      </div>
        
    </div>
  )
}
