import { memo, useState } from "react"

const FormComponent = memo(function ({ buttonClick }) {
    const [count, setCount] = useState(1)
    let startTime = performance.now()
    while (performance.now() - startTime < 500) {
    }
    const handleInnerButtonClick = () => {
        setCount(prev => prev + 1)
    }
    console.log('Component Rerendering');

    return (
        <div>
            <p>
                Form
            </p>
            <p>
                {count}
            </p>
            <button onClick={handleInnerButtonClick}>Click</button>
            <button onClick={() => buttonClick(count)}>Submit</button>
        </div>
    )
})
export default FormComponent