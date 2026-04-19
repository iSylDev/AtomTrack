import {Field, FieldLabel} from "@/components/ui/field";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {cn} from "@/lib/utils";
import {CUSTOM_CATEGORY_ICON_CONFIG, iconList, IconName} from "@/components/create-task/data/iconData";
import taskStore from "@/store/taskStore";

const CustomIcon = () => {
    const IconColor = taskStore(state => state.category_color)
    const selectedIcon = taskStore(state => state.category_icon);
    const setTaskValue = taskStore(state => state.setTaskValue);

    const state = taskStore(state => state);
    console.log(state)


    return (
        <div>
            <RadioGroup
                value={selectedIcon}
                onValueChange={(icon: IconName) => setTaskValue('category_icon', icon)}
                className="grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))]">
                {
                    iconList.map((i) => {
                            const isSelected = selectedIcon === i.icon;
                            const LucideIcon = CUSTOM_CATEGORY_ICON_CONFIG[i.icon]

                            return (
                                <Field orientation="horizontal" key={i.icon} className={'w-fit'}>
                                    <RadioGroupItem value={i.icon} id={i.icon} className={cn('hidden')}/>
                                    <FieldLabel htmlFor={i.icon}
                                                className={cn('gap-1 flex-col flex-between w-fit p-1 rounded-xl lg:',
                                                    isSelected ? 'border-primary border' : 'lg:hover:bg-primary/10'
                                                )}
                                    >
                                        <div
                                            key={i.icon}
                                            className={cn('flex-between h-12 w-12 rounded-xl shrink-0 bg-chart-5 lg:h-10 lg:w-10 lg:p-2 lg:rounded-sm '
                                            )}
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