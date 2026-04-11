import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {FieldContent, Field, FieldLabel, FieldDescription} from "@/components/ui/field";
import {icons} from 'lucide-react'
import {category} from "@/components/create-task/data/data";
import {cn} from "@/lib/utils";


const CategorySelector = () => {
    return (
        <RadioGroup defaultValue="fitness" className="w-full grid grid-cols-4">
            {
                category.map((c) => {
                        const LucideIcon = icons[c.icon]
                        return (

                            <Field orientation="horizontal" key={c.name} className={'rounded-xl border border-border bg-chart-5 flex-between'}>
                                <RadioGroupItem value={c.name} id={c.name} className={'hidden'}/>
                                <FieldContent className={'gap-1 flex-col flex-between w-22 h-17'}>
                                    <FieldLabel htmlFor={c.name}>
                                        <LucideIcon className={cn(c.iconColor, '')}/>
                                    </FieldLabel>
                                    <FieldDescription className={'text-foreground text-xs'}>
                                        {c.name}
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                        )
                    }
                )
            }
        </RadioGroup>
    )
};

export default CategorySelector;