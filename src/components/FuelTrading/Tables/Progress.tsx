import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const timing = [
    {
      t:"12:40 PM",
      name:"Blue Ammonia",
      weight:"250 KGS"
    },
    {
      t:"11:30 AM",
      name:"Green Ammonia",
      weight:"120 KGS"
    },
    {
        t:"8:30 PM",
        name:"Gray Hydrogen",
        weight:"200 KGS"
    },
    {
        t:"7:45 PM",
        name:"Blue Ammonia",
        weight:"190 KGS"
    },
    {
        t:"10:00 AM",
        name:"Red Methanol",
        weight:"250 KGS"
    }
  ]
  
  export function Progress() {
    return (
      <Table className="bg-white rounded-2xl shadow-[0px_4px_8px_0px_rgba(0,0,0,0.06),0px_0px_4px_0px_rgba(0,0,0,0.04)]">
        <TableBody>
          {timing.map((time) => (
            <TableRow>
              <TableCell className="font-medium">{time.t}</TableCell>
              <TableCell>{time.name}</TableCell>
              <TableCell>{time.weight}</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>$3.000.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  

