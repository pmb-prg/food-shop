import MenuPages from '../../components/templates/MenuPage'

function Menu({data}) {
  return (
      <MenuPages data={data} />
  )
}

export default Menu

//-------------------SSG(ISR)-------------------------------
export async function getStaticProps(){
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return{
    props: {data},
    revalidate: 10,
  }
}
