import React, { useEffect, useMemo, useState } from 'react'

const UseMemoExample = () => {

    const [list, setList] = useState([])
    const [searchTermOne, setSearchTermOne] = useState('')
    const [searchTermTwo, setSearchTermTwo] = useState('')
    const [buttonClick, setButtonClick] = useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setList(data.products)
            })
    }, [])

    const handleSearchOne = (e) => {
        setSearchTermOne(e.target.value)
    }
    const handleSearchTwo = (e) => {
        setSearchTermTwo(e.target.value)
    }
    const handleButtonOneClickEvent = () => {
        console.log("button Clicked");
        setButtonClick(prev => !prev)
    }
    const handleButtonTwoClickEvent = () => {
        console.log("button Clicked");
        setButtonClick(prev => !prev)
    }

    const filteredProducts1 = list?.filter(item => {
        console.log("List1 Expensive Logic");

        return item.title.toLowerCase().includes(searchTermOne.toLowerCase())
    })
    const filteredProducts2 = useMemo(() => {
        console.log("Filtering logic running...");
        return (
            list?.filter(item => item.title.toLowerCase().includes(searchTermTwo.toLowerCase()))
        )
    }, [list, searchTermTwo])


    return (
        <div className='mt-4'>
            <p>
                useMemo Hook
            </p>
            <div className='flex'>
                <div className='w-1/2 md:full'>
                    <p>without useMemo</p>
                    <button onClick={handleButtonOneClickEvent}>Click</button>
                    {buttonClick}
                    <input type="text" placeholder='Search' className='my-4' onChange={handleSearchOne} />
                    {filteredProducts1.map(item => {
                        return <p key={item.id}>{item.title}</p>
                    })}
                </div>
                <div className='w-1/2 md:full'>
                    <p>with useMemo</p>
                    <button onClick={handleButtonTwoClickEvent}>Click</button>
                    {buttonClick}
                    <input type="text" placeholder='Search' className='my-4' onChange={handleSearchTwo} />
                    {filteredProducts2.map(item => {
                        return <p key={item.id}>{item.title}</p>
                    })}
                </div>
            </div>

        </div>
    )
}
export default UseMemoExample