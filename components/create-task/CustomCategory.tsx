'use client'

import {Field, FieldGroup} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import TaskDrawer from "@/components/create-task/TaskDrawer";
import TextInputComp from "@/components/create-task/TextInputComp";
import taskStore from "@/store/taskStore";
import ColorPicker from "@/components/create-task/ColorPicker";
import CustomIcon from "@/components/create-task/CustomIcon";
import {CUSTOM_CATEGORY_ICON_CONFIG} from "@/components/create-task/data/iconData";


function CustomCategory() {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [drawerMode, setDrawerMode] = useState<'category_icon' | 'category_color'>('category_icon');
    const selectedColor = taskStore(state => state.temp_category_color);
    const selectedIcon = taskStore(state => state.temp_category_icon);
    const setTaskValue = taskStore(state => state.setTaskValue);

    const LucideIcon = CUSTOM_CATEGORY_ICON_CONFIG[selectedIcon];

    const handleSaveInfo = () => {
        // Set the category state in zustand based on the current drawer mode
        setTaskValue(drawerMode, drawerMode === 'category_icon' ? selectedIcon : selectedColor);
        setDrawerIsOpen(!drawerIsOpen)
    }

    return (
        <FieldGroup className={'bg-chart-5 py-5  px-4 rounded-lg'}>
            <Field>
                {/*Custom Category Name Input*/}
                <TextInputComp
                    category={'category'}
                    className={'bg-input/70'}
                    label={'Category Name'}
                    placeholder={'e.g Morning Workout'}/>
            </Field>

            <div className={'row gap-5'}>
                {/*Custom Category Icon Selector*/}
                <div className={'col items-start h-fit hover:bg-transparent!'}
                     onClick={() => {
                         setDrawerMode('category_icon');
                         setDrawerIsOpen(!drawerIsOpen);
                     }}
                >
                    <div className={'row items-center gap-2 h-10 px-2 rounded-lg bg-input/70'}>
                        <LucideIcon/>
                        <p>Icon</p>
                        <Input className={'hidden'} disabled value={selectedIcon}/>
                    </div>
                </div>

                <div className={'col items-start h-fit hover:bg-transparent!'}
                     onClick={() => {
                         setDrawerMode('category_color');
                         setDrawerIsOpen(!drawerIsOpen);
                     }}
                >
                    <div className={'row items-center gap-2 h-10 px-2 rounded-lg bg-input/70'}>
                        <div className={`h-6 w-6 rounded-sm`}
                             style={{backgroundColor: selectedColor}}
                        >
                        </div>
                        <p>Color</p>
                        <Input className={'hidden'} disabled value={selectedColor}/>
                    </div>
                </div>
            </div>
            <TaskDrawer
                component={drawerMode === 'category_icon' ? <CustomIcon/> : <ColorPicker/>}
                openFn={drawerIsOpen}
                onCloseFn={() => handleSaveInfo()}/>
        </FieldGroup>
    );
}

export default CustomCategory;