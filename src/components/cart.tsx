import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ShoppingBagIcon } from 'lucide-react'

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center justify-center gap-2 rounded-md px-4 py-2 hover:bg-secondary/80">
          <ShoppingBagIcon className="h-4 w-4" />
          <span className="text-sm">Carrinho (3)</span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Meu Carrinho</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
