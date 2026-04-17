'use client'

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import RecurrenceRadioGroup from "@/components/create-task/reccurrence/RecurrenceRadioGroup";
import {RecurrenceToggleGroup} from "@/components/create-task/reccurrence/RecurrenceToggleGroup";
import taskStore, {PriorityType} from "@/store/taskStore";


const PrioritySelector = () => {
    const priority = taskStore(state => state.priority)
    const setTaskValue = taskStore(state => state.setTaskValue)

    const handleTabChange = (selectedPriority: string) => {
        const newPriority = selectedPriority as PriorityType;
        // 1. Update the Priority
        setTaskValue('priority', newPriority);
    };


    return (
        <Tabs
            value={priority}
            onValueChange={handleTabChange}
        >
            <TabsList
                variant="default"
                className={'w-full bg-chart-5 group-data-horizontal/tabs:h-12 '}>
                <TabsTrigger value="low">Low</TabsTrigger>
                <TabsTrigger value="medium">Medium</TabsTrigger>
                <TabsTrigger value="high">High</TabsTrigger>
            </TabsList>
        </Tabs>
    );
};

export default PrioritySelector;