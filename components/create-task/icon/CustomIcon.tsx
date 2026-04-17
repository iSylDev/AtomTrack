import {Field, FieldLabel} from "@/components/ui/field";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {cn} from "@/lib/utils";
import {CUSTOM_CATEGORY_ICON_CONFIG, iconList, IconName} from "@/components/create-task/data/iconData";
import taskStore from "@/store/taskStore";

const CustomIcon = () => {
    const IconColor = taskStore(state => state.category_color)
    const selectedIcon = taskStore(state => state.temp_category_icon);
    const setTaskValue = taskStore(state => state.setTaskValue);


    return (
        <div>
            <RadioGroup
                value={selectedIcon}
                onValueChange={(icon: IconName) => setTaskValue('temp_category_icon', icon)}
                className="grid grid-cols-5  justify-center">
                {
                    iconList.map((i) => {
                            const isSelected = selectedIcon === i.icon;
                            const LucideIcon = CUSTOM_CATEGORY_ICON_CONFIG[i.icon]

                            return (
                                <Field orientation="horizontal" key={i.icon} className={'w-fit'}>
                                    <RadioGroupItem value={i.icon} id={i.icon} className={cn('hidden')}/>
                                    <FieldLabel htmlFor={i.icon}
                                                className={cn('gap-1 flex-col flex-between w-fit p-1 rounded-xl',
                                                    isSelected ? 'border-primary border' : ''
                                                )}
                                    >
                                        <div
                                            key={i.icon}
                                            className={'flex-between h-12 w-12 rounded-xl shrink-0 bg-chart-5'}
                                        >
                                            <LucideIcon style={{stroke: IconColor}}/>
                                        </div>
                                    </FieldLabel>
                                </Field>
                            )
                        }
                    )
                }
            </RadioGroup>
        </div>
    );
};

export default CustomIcon;