import { useCounter } from '@/hooks/useCounter'
import { useMemo } from 'react';

const heavyStuff= (iterationNumber: number) => {
    console.time('Hevay_stuff_started');

    for(let index = 0; index < iterationNumber; index ++){
        console.log('ahi vamos...')
    }


    console.timeEnd('Heavy_stuff_started')
    return `${iterationNumber}`
}


export const MemoCounter = () => {
    const {counter, increment} = useCounter(4)
    const myHeavyValue = useMemo(() =>  heavyStuff(counter), [counter])

  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Memo - UseMemo - {myHeavyValue}</h1>
        <hr/>
        <h4>Counter:  {counter}</h4>
        <h4>Counter:  {counter}</h4>

        <button
        onClick={increment}
        className='bg-blue-500 text-white px-4 rounded-md ty-2 cursor-pointer'>
            +1
        </button>

    </div>
  )
}
