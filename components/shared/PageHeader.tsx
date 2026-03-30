

export default function PageHeader({ header, subHeader }: { header: string, subHeader: string }) {

  return (
    <div className="mt-5 mb-9">
      <h3 className="text-3xl font-bold">{header}</h3>
      <p className="text-card-foreground mt-2">{subHeader}</p>
    </div>
  )
}