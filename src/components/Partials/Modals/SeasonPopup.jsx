import * as Toast from "@radix-ui/react-toast";
import { useEffect, useState } from "react";
import { usePlayground} from "../../../store/Playground";

export function SeasonPopup({time}) {
  const season = usePlayground((state) => state.season);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("");
  const [message, setMessage] = useState("");

 useEffect(() => {
    if (season && time != 0) {
      setMessage(
        season === 'summer'
          ? "🌞 C'est l'été : les récoltes abondent et les gens sont heureux !"
          : "❄️ C'est l'hiver : les provisions diminuent et le froid s'installe..."
      );
      setOpen(true);

      // Auto-fermeture après 3s
      const timeout = setTimeout(() => setOpen(false), 4000);
      setColor (season === 'summer' ? 'bg-amber-100' : 'bg-blue-100');
      return () => clearTimeout(timeout);
    }
  }, [season]);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root open={open} onOpenChange={setOpen} className= {`${color} text-black p-4 rounded`}>
        <Toast.Title className="font-bold"> Changement de saison ! </Toast.Title>
        <Toast.Description>{message}</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="fixed bottom-4 right-4 w-80" />
    </Toast.Provider>
  );
}