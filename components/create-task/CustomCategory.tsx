'use client'

import {FieldLabel, Field, FieldGroup} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {icons} from 'lucide-react'


function CustomCategory() {
    const [selectedIcon, setSelectedIcon] = useState<keyof typeof icons>('Star')
    const [color, setColor] = useState('')
    const LucideIcon = icons[selectedIcon]

    return (
        <FieldGroup className={'bg-chart-5 py-4  px-3'}>
            <Field>
                <FieldLabel className={'col gap-2 items-start'}>
                    <p className={'uppercase text-chart-1'}>Custom Name</p>
                    <Input className={'h-10'}/>
                </FieldLabel>
            </Field>

            <div className={'col items-start gap-2'}>
                <p className={'uppercase text-chart-1'}>Icon</p>
                <Button className={'col items-start h-fit hover:bg-transparent!'}
                        onClick={() => console.log('hi')}
                        variant={'ghost'}
                        type={'button'}
                >
                    <LucideIcon/>
                    <Input className={' border-0'} disabled value={selectedIcon}/>
                </Button>
            </div>
        </FieldGroup>
    );
}

export default CustomCategory;