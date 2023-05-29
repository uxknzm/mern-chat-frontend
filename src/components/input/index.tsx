import React from 'react';

const Input = ({ value, onChangeInput, setVisibleSearchInput }: any) => {
    const onBlur = () => setVisibleSearchInput(false)
    return (
        <div className="relative mr-2 ml-2 mt-5 mb-3">
            <input className="bg-zinc-700 appearance-none rounded w-full py-2 px-4 text-gray-50 leading-tight focus:outline-none focus:bg-zinc-400 focus:border-gray-200" 
            placeholder="Search" 
            onChange={(e: any) => onChangeInput(e.target.value)} 
            value={value} 
            onBlur={onBlur} />
        </div>
    );
};

export default Input;