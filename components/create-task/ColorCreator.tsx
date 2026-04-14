'use client'

import taskStore from "@/store/taskStore";
import {HexColorPicker} from "react-colorful";
import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Palette} from "lucide-react";


function CustomColorPicker() {
    const [isOpen, setOpen] = useState(false);
    const currColor = taskStore(state => state.temp_category_color)
    const setColor = taskStore(state => state.setTaskValue)

    return (
        <Popover>
            <PopoverTrigger className={'w-full'}>
                <div
                    className={'row justify-between items-center w-full mt-5 bg-chart-5 py-4 px-5 rounded-lg'}
                    onClick={() => setOpen(!isOpen)}
                >
                    <div className={'flex items-center gap-3'}>
                        <div
                            className={'h-10 w-10 rounded-md'}
                            style={{backgroundColor: currColor}}
                            onClick={() => setOpen(!isOpen)}
                        >
                        </div>

                        <div className={'flex flex-col items-start justify-center'}>
                            <p className={'text-primary'}>CUSTOM COLOR</p>
                            <h3 className={'uppercase text-xl text-foreground'}>{currColor}</h3>
                        </div>
                    </div>

                    <div>
                        <Palette className={'stroke-primary'}/>
                    </div>
                </div>
            </PopoverTrigger>

            <PopoverContent className={'bg-transparent border-transparent outline-transparent w-fit'}>
                <HexColorPicker
                    color={currColor}
                    onChange={(newColor) => setColor('temp_category_color', newColor)}/>
            </PopoverContent>

        </Popover>
    )
}

export default CustomColorPicker