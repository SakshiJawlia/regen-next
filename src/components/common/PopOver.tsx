import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Button from "./Button"

interface Props{
    successHandler:()=>void,
}

export function DialogDemo({successHandler}:Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button text="Sign Up"
                    type="submit"
                    bg="bg-[#0077B6]"
                    textColor="white"/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex gap-10 flex-col container mx-auto">
            <DialogTitle className="text-[#555555] text-2xl font-bold">Signup as</DialogTitle>
          <div className="flex justify-center items-center gap-5">
           <Button text="Buyer"
                    type="submit"
                    bg="bg-[#0077B6]"
                    onClick={successHandler}
                    textColor="white"/>
           <Button text="Supplier"
                    bg="bg-[#023047]"
                    textColor="white"/>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
