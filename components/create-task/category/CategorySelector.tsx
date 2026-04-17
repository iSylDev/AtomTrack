'use client'

import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Field, FieldLabel, FieldDescription} from "@/components/ui/field";
import {icons} from 'lucide-react'
import {category} from "@/components/create-task/data/categoryData";
import {cn} from "@/lib/utils";
import taskStore from "@/store/taskStore";


const CategorySelector = () => {
    const selectedCategory = taskStore((state) => state.category);
    const store = taskStore(state => state)
    const setTaskValue = taskStore((state) => state.setTaskValue)
    console.log(store)

    return (
        <RadioGroup
            value={selectedCategory}
            onValueChange={(value) => setTaskValue('category', value)}
            className="w-full grid grid-cols-4">
            {
                category.map((c) => {
                        const LucideIcon = icons[c.icon]
                        return (
                            <Field orientation="horizontal" key={c.name}
                                   className={cn('rounded-xl border border-border bg-chart-5 flex-between',
                                       selectedCategory.toLowerCase() === c.name.toLowerCase() ? "outline outline-chart-1" : "border-transparent")}>
                                <RadioGroupItem value={c.name} id={c.name}
                                                className={cn('hidden')}/>
                                <FieldLabel
                                    onClick={() => {
                                        // Check if the custom category is selected and toggle the isCustomCategory flag
                                        if (c.name === 'Custom') setTaskValue('isCustomCategory', true)
                                        else setTaskValue('isCustomCategory', false)
                                    }}
                                    htmlFor={c.name} className={'gap-1 flex-col flex-between w-22 h-17'}>
                                    <div>
                                        <LucideIcon className={cn(c.iconColor, '')}/>
                                    </div>
                                    <FieldDescription className={'text-foreground text-xs'}>
                                        {c.name}
                                    </FieldDescription>
                                </FieldLabel>
                            </Field>
                        )
                    }
                )
            }
        </RadioGroup>
    )
};

export default CategorySelector;