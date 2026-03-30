import IdentityCard from "@/components/settings/IdentityCard";
import MobileAppearance from "@/components/settings/MobileAppearance";
import PageHeader from "@/components/shared/PageHeader";


export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        header="Settings"
        subHeader="Manage your workspace configuration and personal preference"
      />
      <div className="flex flex-col gap-7">
        <IdentityCard />
        <MobileAppearance />
      </div>
    </div>
  )
}