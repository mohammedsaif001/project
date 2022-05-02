import React from 'react'
import Steps from './Steps'
import StepsContent from './StepsContent'

function AlgorithmSteps() {
    return (
        <div id='workingAlgo' className='mt-4'>
            <div className='stepsContainer mt-4' >
                <div className="container2"> <h1>Steps</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, repudiandae velit harum exercitationem consequuntur, alias eius tempore et delectus ratione facilis qui neque explicabo pariatur, ipsa dolorum nulla odio perferendis praesentium. Dolores minima harum consequatur nisi, saepe quos adipisci quod placeat non a, deleniti, reprehenderit rerum! Consequatur dolor enim iure mollitia nostrum maxime architecto perferendis itaque.</p></div>
                <div className="row container2">
                    {/* {StepsContent.length > 0 && StepsContent.map((ele) => (

                        <Steps number={ele.slNo} heading={ele.heading} description={ele.description} key={ele.slNo} />
                    ))} */}
                    {StepsContent.length > 0 && StepsContent.map((ele, index) => (
                        <Steps number={ele.slNo} heading={ele.heading} description={ele.description} key={ele.slNo} value={index} />
                    ))}


                </div>
            </div>
        </div >
    )
}

export default AlgorithmSteps