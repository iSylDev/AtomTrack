'use client'

import taskStore from "@/store/taskStore";
import {HexColorPicker} from "react-colorful";
import {useState} from "react";


function CustomColorPicker() {
    const [isOpen, setOpen] = useState(false);
    const currColor = taskStore(state => state.category_color)
    const setColor = taskStore(state => state.setTaskValue)

    return (
        <div
            className={'w-full relative mt-5 bg-chart-5 py-4 px-5 rounded-lg'}
            onClick={() => setOpen(!)}
        >
            <div
                className={'h-10 w-10 rounded-md'}
                style={{backgroundColor: currColor}}>

            </div>
            {
                isOpen && (
                    <HexColorPicker
                        className={'absolute bottom-[300]'}
                        color={currColor}
                        onChange={(newColor) => setColor('category_color', newColor)}/>
                )
            }
        </div>

    );
}

export default CustomColorPicker;