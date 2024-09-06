import { twMerge } from "tailwind-merge";

export function Main({className, children}) {
  return ( 
    <main className={twMerge("p-4 flex-grow", className)}>
      {children}
    </main>
   );
}
