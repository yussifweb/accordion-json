import React from 'react'
import Accord from './Accord';
import {faqs} from './faqs'


function HotShots() {
    return (
    <div>
      {
       faqs.map((faq) => {
         return <Accord key={faq.title} title={faq.title} head={faq.head} text={faq.text}></Accord>
       }) 
      }
    </div>
    )
}

export default HotShots
