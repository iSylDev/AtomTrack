import categoryColor from "@/components/create-task/data/categoryColor";
import CustomColorPicker from "@/components/create-task/color/ColorCreator";
import {Field, FieldLabel} from "@/components/ui/field";
import {cn} from "@/lib/utils";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import taskStore from "@/store/taskStore";
import {useIsMobile} from "@/hooks/shared/use-mobile";
import colorList from "@/components/create-task/data/categoryColor";

const ColorPicker = () => {
    const selectedColor  = taskStore(state => state.category_color);

    const setTaskValue = taskStore(state => state.setTaskValue)
    const store = taskStore(state => state)
    console.log(store)

    return (
        <>
            <div>
                <RadioGroup
                    value={selectedColor}
                    onValueChange={(color) => setTaskValue('category_color', color)}
                    className="grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))] justify-center">
                    {
                        colorList.map((c) => {
                                const isSelected = selectedColor === c.color;
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
                                                className={'h-12 w-12 rounded-xl shrink-0 lg:h-10 lg:w-10'}
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