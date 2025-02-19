import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

function NewProject({ onAdd, onCancel }) {
    const modal = useRef();
    const title = useRef(null);
    const description = useRef(null);
    const dueDate = useRef(null);

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        // validation ...
        if (
            enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className='text-xl font-bold text-stone-600 my-4'>Invalid Input</h2>
                <p className='text-stone-500 mb-4'>Oops ... Looks like you forgot to enter a vlue !</p>
                <p className='text-stone-500 mb-4'>Please make sure you provide a valid value for every input field</p>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-8 my-4'>
                    <li>
                        <button onClick={onCancel} className='text-stone-800 hover:text-stone-950'>Canecl</button>
                    </li>
                    <li>
                        <button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button>
                    </li>
                </menu>
                <div>
                    <Input ref={title} type="text" label="TITLE" />
                    <Input ref={description} label="DESCRIPTION" textarea />
                    <Input ref={dueDate} type="date" label="DUE DATE" />
                </div>
            </div>
        </>
    )
}

export default NewProject