import * as Toast from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import { usePlayground} from "../../../store/Playground";

export function VolcanoPopup() {
  const lastEvent = usePlayground((state) => state.lastVolcanoEvent);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (lastEvent) {
      setMessage(lastEvent.message);
      setOpen(true);

      // Auto-fermeture après 3s
      const timeout = setTimeout(() => setOpen(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [lastEvent]);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root open={open} onOpenChange={setOpen} className="bg-red-500 text-white p-4 rounded">
        <Toast.Title className="font-bold">💥 Éruption volcanique !</Toast.Title>
        <Toast.Description>{message}</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-40 right-4 w-80" />
    </Toast.Provider>
  );
}