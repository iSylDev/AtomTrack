import categoryColor from "@/components/create-task/data/categoryColor";
import CustomColorPicker from "@/components/create-task/ColorCreator";
import {Field, FieldLabel} from "@/components/ui/field";
import {cn} from "@/lib/utils";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import taskStore from "@/store/taskStore";

const ColorPicker = () => {
    const temp_category_color = taskStore(state => state.temp_category_color)
    const setTaskValue = taskStore(state => state.setTaskValue)

    return (
        <>
            <div className={''}>
                <RadioGroup
                    value={temp_category_color}
                    onValueChange={(color) => setTaskValue('temp_category_color', color)}
                    className="flex flex-wrap gap-3 justify-center">
                    {
                        categoryColor.map((c) => {
                                const isSelected = temp_category_color === c.color;
                                const indicator = `border-[${c.color}] border`;

                                return (
                                    <Field orientation="horizontal" key={c.color} className={'w-fit'}>
                                        <RadioGroupItem value={c.color} id={c.color}
                                                        className={cn('hidden')}/>
                                        <FieldLabel htmlFor={c.color}
                                                    className={cn('gap-1 flex-col flex-between w-fit p-1 rounded-xl',
                                                        isSelected ? indicator : ''
                                                    )}
                                                    style={{borderColor: isSelected ? c.color : 'transparent'}}
                                        >
                                            <div
                                                style={{backgroundColor: c.color}}
                                                key={c.color}
                                                className={'h-12 w-12 rounded-xl shrink-0'}
                                            >
                                            </div>
                                        </FieldLabel>
                                    </Field>
                                )
                            }
                        )
                    }
                </RadioGroup>

            </div>
            <div>
                <CustomColorPicker/>
            </div>
        </>
    );
};

export default ColorPicker;