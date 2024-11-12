import { Button } from "@/components/ui/button"

import { Dialog, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";


export default function Home() {
  return (
    <div className="p-32">

<Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="py-6">Login</DialogTitle>
          <DialogDescription>
            Seja bem vindo, em nossa área administrativa
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right"> E-mail </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right"> Senha </Label>
            <Input id="username" type="password" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant="ghost" className="rounded-md bg-violet-600 text-white w-28">Entrar</Button>
          <Button type="submit" variant="ghost" className="bg-red-500 text-white w-28 rounded-md">Sair</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  );
}
