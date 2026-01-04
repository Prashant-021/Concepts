import { useCallback, useState } from "react";
import FormComponent from "../components/FormComponent";


const UseCallbackExample = () => {
    const [count, setCount] = useState(0)
    const buttonClick = useCallback((innerValue) => {
        console.log('Inner count value: ', innerValue);

    }, [])

    return (
        <div className="mt-4">
            <p>
                UseSelectorExample
            </p>
            <p>
                {count}
            </p>
            <button onClick={() => setCount(prev => prev + 1)}>Outer Button</button>
            <FormComponent buttonClick={buttonClick} />
        </div>
    )
}

export default UseCallbackExample