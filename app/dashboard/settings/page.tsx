import IdentityCard from "@/components/settings/IdentityCard";
import MobileAppearance from "@/components/settings/MobileAppearance";
import Notifications from "@/components/settings/Notifications";
import PageHeader from "@/components/shared/PageHeader";


export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        header="Settings"
        subHeader="Manage your workspace configuration and personal preference"
      />
      <div className="flex flex-col gap-9 pb-90">
        <div className="flex  gap-7">
          <IdentityCard />
          <MobileAppearance />
        </div>
        <Notifications />
      </div>
    </div>
  )
}