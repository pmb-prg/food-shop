import CategoriesPage from "../../components/templates/CategoriesPage"

function Categories({data}) {
  return (
    <CategoriesPage data={data} />
  )
}

export default Categories



//------------------SSR----------------------------------------------

export async function getServerSideProps(context){
  const { 
    query: {difficulty, time} 
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();

  //---------filer query ------------------------------
  const data = json.filter((i) => {


    const difficultyRes = i.details.filter(
      (d) => d.Difficulty && d.Difficulty === difficulty)
      
    const timeRes = i.details.filter(d => {
      const CookingTime = d["Cooking Time"] || "";
      const [timeDetails] = CookingTime.split(" ");
      if(time === "less" && timeDetails && +timeDetails <= 30){
        return d;
      } else if(time === "more" && timeDetails && +timeDetails > 30){
        return d
      }
    });

    if(time && difficulty && timeRes.length && difficultyRes.length){
      return i
    } else if(!time && difficulty && difficultyRes.length){
      return i
    } else if(!difficulty && time && timeRes.length){
      return i
    }
  })

  return {
    props:{ data },
  }
}