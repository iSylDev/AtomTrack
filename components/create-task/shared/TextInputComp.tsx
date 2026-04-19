'use client'

import {Input} from '../../ui/input'
import taskStore, {TaskInterface} from "@/store/taskStore";
import {cn} from "@/lib/utils";
import {useState} from "react";

type Props = {
    label?: string;
    placeholder?: string
    className?: string;
    category: keyof Omit<TaskInterface, 'setTaskValue' | 'resetForm' | 'errors'>
    error?: string;
}

const TextInputComp = ({label, placeholder, category, className, error}: Props) => {
    const setTaskValue = taskStore(state => state.setTaskValue);

    const [textInput, setTextInput] = useState<string>('')

    const classNameValue = className ? className : 'bg-chart-5!'

    return (
        <label className={'flex flex-col justify-center gap-2'}>
            <p className={'font-semibold uppercase text-xs'}>{label}</p>
            <Input id={label}
                   onBlur={() => setTaskValue(category, textInput)}
                   value={textInput}
                   name={label}
                   onChange={(e) => setTextInput(e.target.value)}
                   className={cn('h-12 px-4 border-border text-foreground placeholder:text-sm placeholder:text-card-foreground/50',
                       classNameValue)}
                   placeholder={placeholder}/>
            <p className={'text-destructive text-xs italic'}>{error}</p>
        </label>
    );
};

export default TextInputComp;