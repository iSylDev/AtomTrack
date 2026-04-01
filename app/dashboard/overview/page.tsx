'use client'
import useFetchUser from "@/hooks/useFetchUser"



export default function OverviewPage() {
  const { fetchUser } = useFetchUser();
  // fetchUser();
  return (
    <div>
      <h3>OverviewPage</h3>
    </div>
  )
}