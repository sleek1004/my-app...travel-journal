import React from 'react'






export default function Journal(props){
    return(
        <div className='journal'>
            <div>
            <img src={props.item.coverImg} alt="fun" className='jour-image' />
            </div>
            <div className='jour-stat'>
            <span className='location'>{props.item.location}<a className='map-link' href=' 'target="_blank">view on google Maps </a></span>
                <h1 className="jour-title">{props.item.title}</h1>
                <h6 className='jour-date'>{props.item.startDate}-{props.item.endDate}</h6>
                <p className='jour-text'>{props.item.description}</p>
            </div>
        
            


        </div>
    )

}