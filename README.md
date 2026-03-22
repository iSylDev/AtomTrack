# Antigravity: AtomTrack

> _"Every action you take is a vote for the type of person you wish to become."_

Antigravity is a habit-tracking system based on the principles of Atomic Habits. It operates on the belief that habits are the compound interest of self-improvement. We don't just track tasks; we track the tiny, atomic shifts in behavior that eventually define our identity. If you repeat an action enough times, you aren't just "doing" a task—you are becoming the person who does it.

Most trackers focus on outcomes (what you want to achieve). Antigravity focuses on identity (who you wish to become).
The 1% Rule: Small, 1% improvements every day lead to massive shifts over time.

Proof of Identity: Every "Atom" earned is a literal vote for your new identity.

The Cost of Inaction: Habits require consistency. If a task isn't recorded by midnight, the vote is lost (0 Atoms), reinforcing the discipline required to maintain your trajectory.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Backend/Auth:** Supabase (PostgreSQL + Go-True)
- **Routing:** React Router v7
- **State Management:** Zustand
- **Data Fetching:** Tanstack Query (v5)
- **Form Handling:** React Hook Form + Zod
- **Styling:** Tailwind CSS + Shadcn UI

## Data Table:

- user_table:
  - user_id (uuid)
  - email (string)
  - password_hash
  - google_id (string)
  - username (string)
  - profile_picture (string)
  - note_password (string)
  - created_at (timestamp)
- tasks_table
  - id (uuid)
  - user_id (FK ⇒ user_id)
  - title (string)
  - category (string)
  - tag_color (string)
  - max_points (int)
  - created_at (timestamp)
- daily_completion_table
  - id (uuid)
  - task_id (FK ⇒ tasks.id)
  - user_id (FK ⇒ user.id)
  - date (date)
  - earned_points (int)
  - earned_atoms (int)
  - note_id
- task_note_table:
  - id (uuid)
  - task_id (FK ⇒ tasks.id)
  - date
  - note_text
  - is_protected
