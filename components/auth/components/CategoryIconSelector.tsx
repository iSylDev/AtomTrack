import {icons} from "lucide-react";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {iconList} from "@/components/create-task/data/iconData";
import {cn} from "@/lib/utils";


const CategoryIconSelector = () => {
    return (
        <RadioGroup defaultValue="fitness" className="w-full h-fit flex overflow-x-scroll pb-2">
            {
                iconList.map((icon) => {
                        const LucideIcon = icons[icon.icon]
                        return (

                            <Label
                                key={icon.icon}
                                className={cn(
                                    'rounded-xl border border-border bg-chart-5 flex-between',
                                    'has-data-[state=checked]:border-chart-1 has-data-[state=checked]:text-chart-1')}>
                                <RadioGroupItem value={icon.icon} id={icon.icon} className={'hidden'}/>
                                <span className={'gap-1 flex-col flex-between w-13 h-13'}>
                                    <LucideIcon size={20}/>
                                </span>
                            </Label>
                        )
                    }
                )
            }
        </RadioGroup>
    );
};

export default CategoryIconSelector;