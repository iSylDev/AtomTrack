'use client'

import taskStore from "@/store/taskStore";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Day, DAYS_OF_THE_WEEK, OccurrenceType} from "@/types/days";
import RecurrenceRadioGroup from "@/components/create-task/reccurrence/RecurrenceRadioGroup";
import {RecurrenceToggleGroup} from "@/components/create-task/reccurrence/RecurrenceToggleGroup";


const RecurrenceTab = () => {
    const occurrence = taskStore(state => state.occurrence);
    const setTaskValue = taskStore(state => state.setTaskValue)
    const occurrenceDays = taskStore(state => state.occurrence_days);

    const handleTabChange = (newMode: string) => {
        const mode = newMode as OccurrenceType;

        // 1. Update the mode (Daily/Weekly/Specific)
        setTaskValue('occurrence', mode);

        // 2. Sanitize occurrence_days based on the new mode
        switch (mode) {
            case 'daily':
                // Set to all days
                setTaskValue('occurrence_days', [...DAYS_OF_THE_WEEK]);
                break;

            case 'weekly':
                // Force to exactly one day (keep the first one selected, or default to Monday)
                const firstDay = occurrenceDays.length > 0 ? occurrenceDays[0] : 'Monday';
                setTaskValue('occurrence_days', [firstDay as Day]);
                break;

            case 'specific-days':
                // Set to the first two days as a default starting point
                setTaskValue('occurrence_days', [DAYS_OF_THE_WEEK[0], DAYS_OF_THE_WEEK[1]]);
                break;

            default:
                // Optional: Handle unexpected values
                break;
        }
    };

    return (
        <Tabs
            value={occurrence}
            onValueChange={handleTabChange}
        >
            <TabsList
                variant="default"
                className={'w-full bg-chart-5 group-data-horizontal/tabs:h-12 '}>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="specific-days">Specific Days</TabsTrigger>
            </TabsList>

            {/*Tab contents*/}
            <TabsContent value={'daily'}>
                <p className={'text-center mt-1'}>This task will be completed everyday</p>
            </TabsContent>

            <TabsContent value={'weekly'}>
                <RecurrenceRadioGroup/>
            </TabsContent>

            <TabsContent value={'specific-days'}>
                <RecurrenceToggleGroup/>
            </TabsContent>
        </Tabs>
    );
};

export default RecurrenceTab