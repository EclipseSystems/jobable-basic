export const PageTitle = ({ title, padding }: {
  title: string
  padding: Boolean
}) => {
  return <h1 className={`text-2xl font-bold ${padding} === true ? pb-4 : pb-0}`}>{title}</h1>
}