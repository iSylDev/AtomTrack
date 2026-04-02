export interface UserType {
  user_id: string;
  email: string;
  username: string;
  profile_picture: string;
  theme: 'light' | 'dark';
  task_deadline_notif: boolean;
  weekly_reports_notif: boolean; 
  marketing_updates_notif: boolean;
}


