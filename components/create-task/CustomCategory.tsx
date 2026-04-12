'use client'

import {FieldLabel, Field, FieldGroup} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {icons} from 'lucide-react'
import TaskDrawer from "@/components/create-task/TaskDrawer";


function CustomCategory() {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState<keyof typeof icons>('Star')
    const [selectedColor, setSelectedColor] = useState('#3FFF8B')
    const LucideIcon = icons[selectedIcon]

    const handleDrawerToggle = () => {
        setDrawerIsOpen(!drawerIsOpen);
    }

    return (
        <FieldGroup className={'bg-chart-5 py-4  px-3'}>
            <Field>
                <FieldLabel className={'col gap-2 items-start'}>
                    <p className={'uppercase text-chart-1'}>Custom Name</p>
                    <Input className={'h-10'}/>
                </FieldLabel>
            </Field>

            <div className={'row gap-5'}>
                <div className={'col items-start gap-2'}>
                    <p className={'uppercase text-chart-1'}>Icon</p>
                    <div className={'col items-start h-fit hover:bg-transparent!'}
                         onClick={() => console.log('hi')}
                    >
                        <div className={'row items-center gap-3 h-10 px-2 rounded-lg bg-input/70'}>
                            <LucideIcon/>
                            <p>Select</p>
                            <Input className={'hidden'} disabled value={selectedIcon}/>
                        </div>
                    </div>
                </div>
                <div className={'col items-start gap-2'}>
                    <p className={'uppercase text-chart-1'}>Color</p>
                    <div className={'col items-start h-fit hover:bg-transparent!'}
                         onClick={() => handleDrawerToggle()}
                    >
                        <div className={'row items-center gap-2 h-10 px-2 rounded-lg bg-input/70'}>
                            <div className={`h-6 w-6 rounded-sm`}
                                 style={{backgroundColor: selectedColor}}
                            >
                            </div>
                            <p>{selectedColor}</p>
                            <Input className={'hidden'} disabled value={selectedColor}/>
                        </div>
                    </div>
                </div>
            </div>
            <TaskDrawer openFn={drawerIsOpen} onCloseFn={() => handleDrawerToggle()}/>
        </FieldGroup>
    );
}

export default CustomCategory;