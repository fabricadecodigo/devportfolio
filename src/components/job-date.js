import React from 'react'

export default (props) =>
    <div className={props.className}>
        <div className="px-5 py-3 bg-black text-white text-center w-48 rounded-full border-4 border-gray-700">
            {props.value}
        </div>
    </div>