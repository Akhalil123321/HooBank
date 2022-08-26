import React from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Counter = () => {
    const [countOn, setCountOn] = React.useState(false)
    return (
        <ScrollTrigger onEnter={() => setCountOn(true)}>
        <div className='counter'>
            <div>
                <span className='number'>
                    {countOn && <CountUp end={3800} duration={2.5} suffix='+'/>}
                </span>
                <span className='grad'>user active</span>
            </div>
            <div>
                <span className='number'>
                    {countOn && <CountUp end={230} duration={2.5} suffix="+"/>}
                </span>
                <span className='grad'>trusted by company</span>
            </div>
            <div>
                <span className='number'>
                    {countOn && <CountUp end={230} duration={3.5} suffix="M+" prefix='$'/>}
                </span>
                <span className='grad'>transaction</span>
            </div>
        </div>
    </ScrollTrigger>
    )
}

export default Counter