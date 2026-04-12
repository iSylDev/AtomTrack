import {taskInterface} from '@/store/taskStore'

export interface UserTaskInterface extends taskInterface {
    id: string;
    user_id: string;
}

