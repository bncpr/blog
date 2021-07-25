import { format, parseISO } from "date-fns"

export const Date = ({
  dateString,
  className,
}: {
  dateString: string
  className?: string
}) => {
  const _date = format(parseISO(dateString), "LLLL d, yyyy")
  return (
    <time dateTime={dateString} className={className}>
      {_date}
    </time>
  )
}
