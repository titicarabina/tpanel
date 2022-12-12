import { useEffect } from "react";
import axios from "axios";
function usePlayerSearch(query: any, pageNumber: number) {
  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/searchPlayers",
      params: {
        name: query.name,
        license: query.license,
        citizenid: query.citizenid,
        money: query.money,
        
        page: pageNumber,
      },
    }).then((res) => {
      console.log(res.data);
    });
  }, [query, pageNumber]);

  return null;
}
export { usePlayerSearch };
