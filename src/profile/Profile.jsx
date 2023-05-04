import React, { Children } from 'react'
import PropTypes from "prop-types";
let img = {
  width: '300px',
}
let styles ={
  color : 'red',
  fontFamily: 'sansSerif',
}
let border ={
border: 'solid 1px black',
}

const Profile = ({fullname,bio,profession,children,myFunction}) => {
  return (
   <div className='con'>
    <button onClick={ ()=> myFunction(fullname) }>show may name</button>
     <div className='container'>
       <h1 style={styles}> {fullname}</h1>
       <h2 style={border}>{bio} </h2>
       <h3>{profession} </h3>
       <div>{children}</div>
       <div>{myFunction} </div>
    </div>
       </div>
  )
}
Profile.defaultProps={
  fullname: 'adel',
}

Profile.propTypes ={
  fullname: PropTypes.string,
}

export default Profile