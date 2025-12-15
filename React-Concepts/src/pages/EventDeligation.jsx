import React, { useEffect, useRef, useState } from 'react'

const focuableElementsList = ['button', 'input']

const EventDeligation = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const dialogRef = useRef(null);

    useEffect(() => {
        if (!dialogRef.current) return;
        const dialogNode = dialogRef.current;
        const focuableElements = dialogNode.querySelectorAll(focuableElementsList)
        console.log(focuableElements);
        let firstElement = focuableElements[0];
        let lastElement = focuableElements[focuableElements.length - 1];
        firstElement.focus()
        const handleKeyDown = (event) => {
            if (event.key === 'Tab') {
                if (!event.shiftKey) {
                    if (document.activeElement === lastElement) {
                        event.preventDefault();
                        firstElement.focus();
                    }
                } else {
                    if (document.activeElement === firstElement) {
                        event.preventDefault();
                        lastElement.focus();
                    }
                }
            }
        }
        dialogNode.addEventListener('keydown', handleKeyDown);

        return () => {
            if (dialogNode) {
                dialogNode.removeEventListener('keydown', handleKeyDown);
            }
        }
    }, [isDialogOpen])

    const handleDialogOpen = () => {
        setIsDialogOpen(prev => !prev);
    }

    return (

        <div className='hmt-3'>
            <div className='my-4 m-auto md:w-4/6'>

                <h2 className='text-2xl font-bold mb-2'>
                    EventDeligation
                </h2>
                <p>That's a very important issue related to Accessibility (a11y), specifically with focus management in modal dialogs. 
                    When the user tabs past the last element in your dialog and focus moves to the background 
                    content, it's called "focus escape".
                </p>
                <p>
                    "To fix this, you need to implement Focus Trapping (or Focus Locking) within your DialogComponent. This ensures that when the user presses Tab or shift + tab, the focus stays inside the dialog's elements.</p>
            </div>

            <button onClick={handleDialogOpen}>{isDialogOpen ? "Close Dialog" : "Open Dialog"}</button>
            {isDialogOpen &&
                <div className='m-auto w-xl flex flex-col gap-2 p-4 bg-gray-400 rounded-xl mt-3' ref={dialogRef}>
                    <button onClick={() => setIsDialogOpen(false)}>Close</button>
                    <input type="text" className='bg-white text-black border-2 border-red-500 focus:border-red-500' />
                    <button>Save</button>
                </div>
            }
        </div>
    )
}

export default EventDeligation