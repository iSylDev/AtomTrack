'use client'

import {Field, FieldGroup} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import TextInputComp from "@/components/create-task/shared/TextInputComp";
import taskStore from "@/store/taskStore";
import ColorPicker from "@/components/create-task/color/ColorPicker";
import CustomIcon from "@/components/create-task/icon/CustomIcon";
import {CUSTOM_CATEGORY_ICON_CONFIG} from "@/components/create-task/data/iconData";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";


function CustomCategory() {
    const categoryError = taskStore(state => state.errors.categoryError);
    const isCustomCategory = taskStore(state => state.isCustomCategory);
    const globalColor = taskStore(state => state.category_color);


    const selectedColor = taskStore(state => state.category_color);
    const selectedIcon = taskStore(state => state.category_icon);

    const LucideIcon = CUSTOM_CATEGORY_ICON_CONFIG[selectedIcon];

    return (
        <>
            {
                // Only display this component if the custom category mode is selected
                isCustomCategory && (
                    <FieldGroup className={'bg-chart-5 py-5  px-4 rounded-lg'}>
                        <Field>
                            {/*Custom Category Name Input*/}
                            <TextInputComp
                                category={'category'}
                                className={'bg-input/70'}
                                label={'Category Name'}
                                placeholder={'e.g Morning Workout'}
                                error={categoryError}
                            />
                        </Field>

                        <div className={'row gap-5'}>
                            {/*Custom Category Icon Selector*/}
                            <Popover>
                                <PopoverTrigger className={'col items-start h-fit hover:bg-transparent!'}>
                                    <div className={'row items-center gap-2 h-10 px-2 rounded-lg bg-input/70'}>
                                        <LucideIcon style={{stroke: globalColor}}/>
                                        <p>Edit Icon</p>
                                        <Input className={'hidden'} disabled value={selectedIcon}/>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className={'mx-7'}>
                                    <CustomIcon/>
                                </PopoverContent>
                            </Popover>

                            {/*Custom Category Color Selector*/}
                            <Popover>
                                <PopoverTrigger>
                                    <div className={'col items-start h-fit hover:bg-transparent!'}>
                                        <div className={'row items-center gap-2 h-10 px-2 rounded-lg bg-input/70'}>
                                            <div className={`h-6 w-6 rounded-sm`}
                                                 style={{backgroundColor: selectedColor}}
                                            >
                                            </div>
                                            <p>Edit Color</p>
                                            <Input className={'hidden'} disabled value={selectedColor}/>
                                        </div>
                                    </div>
                                </PopoverTrigger>

                                <PopoverContent className={'mx-7'}>
                                    <ColorPicker/>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </FieldGroup>
                )
            }
        </>
    )


}

export default CustomCategory;