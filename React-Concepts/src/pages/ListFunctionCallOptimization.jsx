import React from 'react'

const ListFunctionCallOptimization = () => {
    return (
        <div className=' mt-3'>
            <div className='my-4 m-auto md:w-4/6'>

                <h2 className='text-2xl font-bold mb-2'>
                    The List Optimization Challange
                </h2>
                <ul className='mt-4 list-disc list-inside text-left'>
                    <li>Standard React Approach: How would you typically attach the click handler in the React component for each of the 1,000 buttons?</li>
                    <li>The Optimization Problem: Why might this standard approach be inefficient or cause performance issues, especially if the list size grows significantly (e.g., to 10,000 items)?</li>
                    <li>The Optimized Solution (JavaScript Concept): How can you drastically improve performance and memory usage using a core JavaScript concept, and how would you implement this concept in your React component?</li>
                </ul>
            </div>
        </div>
    )
}

export default ListFunctionCallOptimization