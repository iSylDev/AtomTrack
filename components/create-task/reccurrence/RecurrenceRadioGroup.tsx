'use client'

import {RadioGroup, RadioGroupItem,} from "@/components/ui/radio-group";
import {FieldLabel, Field} from "@/components/ui/field";
import {DAYS_OF_THE_WEEK, Day} from "@/types/days";
import taskStore from "@/store/taskStore";
import {cn} from "@/lib/utils";
import {formatDayToSingleLetter} from "@/helpers/formatDayToSingleLetter";
import getWeeklyDescription from "@/helpers/getWeeklyDescription";

const RecurrenceRadioGroup = () => {
    const occurrenceDays = taskStore(state => state.occurrence_days)
    const setTaskValue = taskStore(state => state.setTaskValue)

    const specificDay = occurrenceDays[0];

    return (
        <div>
            <p className={'text-center my-2'}>{getWeeklyDescription(specificDay)}</p>
            <RadioGroup
                value={specificDay}
                onValueChange={(value) => setTaskValue('occurrence_days', [value as Day])}
                className="flex">
                {
                    DAYS_OF_THE_WEEK.map((day) => {
                            const isSelected = specificDay === day;

                            return (
                                <Field orientation="horizontal" key={day} className={''}>
                                    <RadioGroupItem value={day} id={day} className={cn('hidden')}/>
                                    <FieldLabel htmlFor={day}
                                                className={cn('w-10 h-10 rounded-full shrink-0 flex-between ',
                                                    isSelected ? 'bg-primary' : ''
                                                )}
                                    >
                                        <p>{formatDayToSingleLetter(day)}</p>
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

export default RecurrenceRadioGroup;