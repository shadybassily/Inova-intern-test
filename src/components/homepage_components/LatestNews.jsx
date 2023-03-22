import { useQuery } from '@tanstack/react-query';
import Card from '../Card';
export default function LatestNews() {
   //fetching latest news
   const {
      isLoading,
      error,
      data: latestNews,
   } = useQuery({
      queryKey: ['latest_news'],
      queryFn: () =>
         fetch('http://3.65.32.166/api/v1/news?page=1&per_page=10')
            .then((res) => res.json())
            .then((res) => res.data),
   });

   if (isLoading) return 'Loading...';
   if (error) return 'An error has occurred: ' + error.message;

   console.log(latestNews);

   return (
      <div className='flex flex-wrap gap-6 justify-center '>
      {latestNews.map(item => (
         <Card item={item} key={item.id} />
      ))}
        
      </div>
   );
}
