export function ErrorMessage({message}) {
    return ( 
        <div className="flex flex-col ">
        <h2 className="text-red-700 font-semibold">Erro!</h2>
        <p className="text-red-800">{message}</p>
      </div>
     );
  }