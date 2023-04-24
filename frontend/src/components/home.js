import React from 'react'
import "./component.css"
import LottieAnimation from '../Lottie';
import home from "../animation/web-designer-with-idea.json"

const Home = () => {
  return (
<div className="component">
<div className="intro">Hello! I am Riya Kumari :)<p>
The project requires APIs to fetch data from Database(MongoDB) based on different conditions such as income, car brand, phone price, last name, email, and city. The fetched data is presented in the form of a table format on the frontend.

</p>
</div>
<div>
          <LottieAnimation lotti={home} height={500} width={500} />
        </div>


</div>
  )
}

export default Home