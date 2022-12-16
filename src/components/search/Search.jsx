

import React from 'react'

import './search.scss'

export default function Search({setsearch,search}) {
  return (
    <div className={search? 'search active':'search'}>
        <input type="search" name="search" id="" />
        <label htmlFor="search">Search</label>
        <div className="cross" onClick={()=>setsearch(false)}>
            <span>

            </span>
            <span>

            </span>
        </div>
    </div>
  )
}
