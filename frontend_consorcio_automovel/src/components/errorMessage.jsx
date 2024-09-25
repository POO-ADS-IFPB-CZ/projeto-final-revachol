export function ErrorMessage({message}) {
    return ( 
        <div className="flex flex-col ">
            <div className="bg-red-200 text-red-700 p-4 rounded">
          <h2 className="text-2xl font-semibold">Erro!</h2>
          <p className="mt-2">{message}</p>
        </div>
        </div>
     );
  }