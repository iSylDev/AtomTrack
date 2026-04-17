import {create} from 'zustand'
import {CUSTOM_CATEGORY_ICON_CONFIG} from "@/components/create-task/data/iconData";
import {Occurrence, OccurrenceType} from "@/types/days";


export type PriorityType = 'low' | 'medium' | 'high'
export interface taskInterface {
    name: string;
    priority: PriorityType;
    category: string;
    occurrence: OccurrenceType;
    occurrence_days: Occurrence;
    category_color: string;
    temp_category_color: string;
    category_icon: keyof typeof CUSTOM_CATEGORY_ICON_CONFIG;
    temp_category_icon: keyof typeof CUSTOM_CATEGORY_ICON_CONFIG;
    setTaskValue: <K extends keyof Omit<taskInterface, 'setTaskValue'>>(
        key: K,
        value: taskInterface[K]
    )
        =>
        void;
}

const taskStore = create<taskInterface>((set) => ({
    name: '',
    priority: 'low',
    category: 'Fitness',
    occurrence: 'daily',
    occurrence_days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    category_color: '#3FFF8B',
    temp_category_color: '#3FFF8B',
    category_icon: 'Star',
    temp_category_icon: 'Star',
    setTaskValue: (key, value) => set((state) => ({
        ...state,
        [key]: value
    }))
}))

export default taskStore;