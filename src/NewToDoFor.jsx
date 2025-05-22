import { useState } from 'react';

const NewToDo = (props) => {
    const [newItem, setNewItem] = useState('');
    function handleSubmit(e) {
        e.preventDefault();

        if (newItem === '') return
        props.onSubmit(newItem)

        setNewItem('');
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form items-center justify-center flex flex-col'>
            <div className='form-row w-full items-center justify-center'>
                <div>
                    <label htmlFor="item" className='my-4'>Add new List:</label>
                </div>
                <div>
                    <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id='item' autoComplete='off' placeholder='Add new list here'
                        className='w-[clamp(240px,70%,800px)] h-[10vh] rounded-xl px-4 box-border' />
                </div>

            </div>
            <button className='btn font-bold my-4 hover:outline-2 hover:outline-offset-2 hover:outline-amber-50 px-6 py-2 rounded-xl bg-gray-200 hover:bg-gray-500 hover:text-gray-200 transition-all'>Add</button>
        </form>
    )
}

export default NewToDo