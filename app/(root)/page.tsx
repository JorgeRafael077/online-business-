import SearchForm from "../components/SeachForm";

export default async function Home({ searchParams } : { 
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query 

  return (
      <>  
        <section className="pink_container">
          <h1 className="heading">Mostre sua ideia, conecte-se, troque experiências e escreva sua própria história.</h1>

          <p className="sub-heading !max-w-3xl">
            Envie suas ideias, vote nas melhores propostas e ganhe destaque em competições online.
          </p>

          <SearchForm query={query}/>
        </section>
        
      </>
  );
}
