import {create} from 'zustand'
import {icons} from 'lucide-react'

export interface taskInterface {
    name: string;
    category: string;
    occurrence: string;
    category_color: string;
    temp_category_color: string;
    category_icon: keyof typeof icons;
    setTaskValue: <K extends keyof Omit<taskInterface, 'setTaskValue'>>(
        key: K,
        value: taskInterface[K]
    )
        =>
        void;
}

const taskStore = create<taskInterface>((set) => ({
    name: '',
    category: 'Fitness',
    occurrence: 'Daily',
    category_color: '#3FFF8B',
    temp_category_color: '#3FFF8B',
    category_icon: 'Star',
    impact: '',
    setTaskValue: (key, value) => set((state) => ({
        ...state,
        [key]: value
    }))
}))

export default taskStore;