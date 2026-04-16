'use client'

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import taskStore from "@/store/taskStore";
import {OccurrenceType} from "@/types/days";


const RecurrenceComponent = () => {
    const occurrence = taskStore(state => state.occurrence);
    const setTaskValue = taskStore(state => state.setTaskValue)

    return (
        <Tabs
            value={occurrence}
            onValueChange={(value) => setTaskValue('occurrence', value as OccurrenceType )}
            >
            <TabsList
                variant="default"
                className={'w-full bg-chart-5 group-data-horizontal/tabs:h-12 '}>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="specific-day">Specific Day</TabsTrigger>
            </TabsList>
            <TabsContent value={'daily'}><p className={'text-center mt-1'}>This task will be completed everyday</p>
            </TabsContent>
            <TabsContent value={'weekly'}> Weekly</TabsContent>
            <TabsContent value={'specific-day'}> Specific Day</TabsContent>
        </Tabs>
    );
};

export default RecurrenceComponent;