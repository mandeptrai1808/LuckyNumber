import React, {useState, useEffect} from 'react'

import Roll from 'digit-roll-react'
export default function DigitRoll() {

  return (
    <div className='text-5xl'>
        <Roll num={123456} length={6} divider=" " delay={5}/>
    </div>
  )
}
