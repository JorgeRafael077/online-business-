import SearchForm from "../../components/SeachForm";
import StartupCard from "../../components/StartupCard";

export default async function Home({ searchParams } : { 
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query 

  const post = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: 'John' },
    _id: 1,
    description: 'This is a description',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Saas',
    title: 'This is a title'
  }]

  return (
      <>  
        <section className="pink_container">
          <h1 className="heading">Mostre sua ideia, conecte-se, troque experiências e escreva sua própria história.</h1>

          <p className="sub-heading !max-w-3xl">
            Envie suas ideias, vote nas melhores propostas e ganhe destaque em competições online.
          </p>

          <SearchForm query={query}/>
        </section>

        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Resultados para "${query}"` : 'Últimas Ideias'}
          </p>

          <ul className="mt-7 card_grid">
            {post?.length > 0 ? (
              post.map((post: StartupCard) => (
                <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">Nenhuma ideia encontrada</p>
          )}
          </ul>

        </section>
        
      </>
  );
}
