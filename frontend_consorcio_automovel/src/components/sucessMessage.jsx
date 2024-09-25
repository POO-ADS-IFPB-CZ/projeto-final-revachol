export function SucessMessage({message}) {
    return ( 
        <div className="flex flex-col ">
            <div className="bg-green-200 text-black-700 p-4 rounded">
          <p className="text-1xl font-semibold">{message}</p>
        </div>
        </div>
     );
  }