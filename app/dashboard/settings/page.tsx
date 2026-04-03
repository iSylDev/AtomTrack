import IdentityCard from "@/components/settings/IdentityCard";
import Appearance from "@/components/settings/Appearance";
import Notifications from "@/components/settings/Notifications";
import PageHeader from "@/components/shared/PageHeader";
import Account from "@/components/settings/Account";

export const metadata = {
  title: 'AtomTrack | Settings',
  description: 'User settings'
}


export default function SettingsPage() {
  return (
    <div className="lg:px-6 2xl:px-12">
      <PageHeader
        header="Settings"
        subHeader="Manage your workspace configuration and personal preference"
      />
      <div className="grid grid-cols-1 gap-10 pb-12 lg:grid-cols-12 lg:gap-6">
        <IdentityCard />
        <Appearance />
        <Notifications />
        <Account />
      </div>
    </div>
  )
}