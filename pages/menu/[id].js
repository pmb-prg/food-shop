import { useRouter } from 'next/router';
import React from 'react'
import DetailsPage from '../../components/templates/DetailsPage';

function FoodDetails({data}) {
    const router = useRouter();

    if(router.isFallback){
        return <h2>Loading...</h2>
    }
  return (
    <DetailsPage { ... data}/>
  )
}

export default FoodDetails

//----------------SSG(ISR)-----------------------

export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`${process.env.BASE_URL}/data/${params.id}`);
    const data = await res.json()

    if(!data.id){
        return{
            notFound: true,
        }
    }

    return{
        props:{data},
        revalidate: 10,
    }
    
}

//------------SSG Dynamic-----------------------
export async function getStaticPaths(){
    const res = await fetch(`${process.env.BASE_URL}/data`);
    const json = await res.json();
    const data = json.slice(0,10);
    const paths = data.map((i) => ({
        params:{
            id: i.id.toString(),
        }
    }))
    return{
        paths,
        fallback: true,
    }
}