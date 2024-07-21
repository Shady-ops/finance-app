'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <p className='w-full'>
        <CountUp 
            end={amount}
            decimal=','
            decimals={2}
            prefix='$'
        />
    </p>
  )
}

export default AnimatedCounter