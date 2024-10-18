import { useEffect, useState } from "react";
import { Show } from "../../models/Show";
import { ShowService } from "../../services/ShowService";

const Home = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    (async () => {
      const service = new ShowService();
      const results = await service.find("office");
      setShows(results);
    })();
  }, []);

  return (
    <>{shows.length > 0 && shows.map((s) => <p key={s.id}>{s.name}</p>)}</>
  );
};

export default Home;
