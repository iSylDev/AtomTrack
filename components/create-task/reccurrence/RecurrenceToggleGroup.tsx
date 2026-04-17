import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import taskStore from "@/store/taskStore";
import {Day, DAYS_OF_THE_WEEK} from "@/types/days";
import {formatDayToSingleLetter} from "@/helpers/formatDayToSingleLetter";
import {cn} from "@/lib/utils";
import getOccurrenceDescription from "@/helpers/getOccurrenceDescription";

export function RecurrenceToggleGroup() {
    const occurrenceDays = taskStore(state => state.occurrence_days);
    const setTaskValue = taskStore(state => state.setTaskValue);

    return (
        <>
            <p className={'text-center my-2'}>{getOccurrenceDescription(occurrenceDays)}</p>
            <ToggleGroup
                type="multiple"
                value={occurrenceDays}
                onValueChange={(values) => {
                    // value will be undefined if user clicks the same day twice
                    if (values && values.length > 1) setTaskValue('occurrence_days', values as Day[]);
                }}
                className="flex justify-between w-full max-w-sm"
            >
                {DAYS_OF_THE_WEEK.map((day) => (
                    <ToggleGroupItem
                        key={day}
                        value={day}
                        aria-label={day}
                        className={cn(
                            // Force the shape and ignore the ToggleGroup's 'smart' rounding
                            "h-10 w-10 rounded-full! aspect-square shrink-0",
                            "flex items-center justify-center p-0",
                            // Visuals
                            "data-[state=on]:bg-primary data-[state=off]:bg-transparent text-foreground bg-secondary/20"
                        )}
                    >
                        {formatDayToSingleLetter(day)}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup></>
    )
}
