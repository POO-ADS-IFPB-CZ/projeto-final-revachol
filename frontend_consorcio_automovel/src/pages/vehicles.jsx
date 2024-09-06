import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";
export function Vehicles() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main>
        <div className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto">
          {array.map(num => (
            <div key={num} className="mx-auto border p-4 bg-red-100 max-w-64">
              <h1>Veículos</h1>
              <p>Aqui você encontra todos os veículos cadastrados.</p>
            </div>
          ))}
        </div>
      </Main>
      <Footer />
    </div>
  );
}
