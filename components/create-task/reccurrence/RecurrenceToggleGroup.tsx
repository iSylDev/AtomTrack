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
        <div>
            <ToggleGroup
                type="multiple"
                value={occurrenceDays}
                onValueChange={(values) => {
                    // value will be undefined if user clicks the same day twice
                    if (values && values.length > 1) setTaskValue('occurrence_days', values as Day[]);
                }}
                className="flex justify-between w-full gap-2"
            >
                {DAYS_OF_THE_WEEK.map((day) => (
                    <ToggleGroupItem
                        key={day}
                        value={day}
                        aria-label={day}
                        className={cn(
                            // Force the shape and ignore the ToggleGroup's 'smart' rounding
                            "h-10 flex-1 rounded-lg! aspect-square shrink-0",
                            "flex items-center justify-center p-0 hover:cursor-pointer",
                            // Visuals
                            "data-[state=on]:bg-primary data-[state=off]:hover:bg-primary/10! data-[state=off]:bg-transparent text-foreground bg-secondary/20"
                        )}
                    >
                        {formatDayToSingleLetter(day)}
                    </ToggleGroupItem>

                ))}
            </ToggleGroup>
            <p className={'text-center my-3'}>{getOccurrenceDescription(occurrenceDays)}</p>
        </div>
    )
}
