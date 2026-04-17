'use client'

import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import taskStore, {PriorityType} from "@/store/taskStore";
import {cn} from "@/lib/utils";


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
                <TabsTrigger value="low" className={cn(priority === 'low' ? 'bg-primary text-foreground! hover:text-foreground' : '')}>Low</TabsTrigger>
                <TabsTrigger value="medium" className={cn(priority === 'medium' ? 'bg-chart-6! text-foreground! hover:text-foreground' : '')}>Medium</TabsTrigger>
                <TabsTrigger value="high" className={cn(priority === 'high' ? 'bg-destructive! text-foreground! hover:text-foreground' : '')}>High</TabsTrigger>
            </TabsList>
        </Tabs>
    );
};

export default PrioritySelector;