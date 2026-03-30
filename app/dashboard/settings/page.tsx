import IdentityCard from "@/components/settings/IdentityCard";
import Appearance from "@/components/settings/Appearance";
import Notifications from "@/components/settings/Notifications";
import PageHeader from "@/components/shared/PageHeader";
import Account from "@/components/settings/Account";


export default function SettingsPage() {
  return (
    <div className="px-6 pt-">
      <PageHeader
        header="Settings"
        subHeader="Manage your workspace configuration and personal preference"
      />
      <div className="grid grid-cols-1 gap-6 pb-12 md:grid-cols-12">
        <IdentityCard />
        <Appearance />
        <Notifications />
        <Account />
      </div>
    </div>
  )
}