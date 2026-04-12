'use client'

import {Input} from '../ui/input'
import taskStore, {taskInterface} from "@/store/taskStore";
import {cn} from "@/lib/utils";

type Props = {
    label?: string;
    placeholder?: string
    className?: string;
    category: keyof Omit<taskInterface, 'setTaskValue'>
}

const TextInputComp = ({label, placeholder, category, className}: Props) => {
    const setTaskValue = taskStore(state => state.setTaskValue);
    const store = taskStore(state => state)
    const classNameValue = className ? className : 'bg-chart-5!'

    return (
        <label className={'flex flex-col justify-center gap-2'}>
            <p
                className={'text-chart-1 uppercase text-xs'}>{label}</p>
            <Input id={label}
                   name={label}
                   onChange={(e) => setTaskValue(category, e.target.value)}
                   className={cn('h-12 px-4 border-border text-foreground placeholder:text-sm placeholder:text-card-foreground/50',
                     classNameValue )}
                   placeholder={placeholder}/>
        </label>
    );
};

export default TextInputComp;