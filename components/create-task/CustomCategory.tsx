import {FieldLabel, Field, FieldGroup} from "@/components/ui/field";
import {Input} from "@/components/ui/input";


function CustomCategory() {
    return (
        <FieldGroup className={'bg-chart-5 py-4  px-3'}>
            <Field>
                <FieldLabel className={'col gap-2 items-start'}>
                    <p className={'uppercase text-chart-1'}>Custom Name</p>
                    <Input className={'h-12'} />
                </FieldLabel>
            </Field>

            <div>

            </div>
        </FieldGroup>
    );
}

export default CustomCategory;