import IdentityCard from "@/components/settings/IdentityCard";
import MobileAppearance from "@/components/settings/Appearance";
import Notifications from "@/components/settings/Notifications";
import PageHeader from "@/components/shared/PageHeader";
import Account from "@/components/settings/Account";


export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        header="Settings"
        subHeader="Manage your workspace configuration and personal preference"
      />
      <div className="flex flex-col gap-9 pb-90">
        <div className="flex flex-col md:flex-row gap-7">
          <IdentityCard />
          <MobileAppearance />
        </div>
        <div className="flex flex-col md:flex-row gap-9">
          <Notifications />
          <Account />
        </div>
      </div>
    </div>
  )
}