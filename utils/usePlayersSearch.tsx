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
        moneytype: query.moneytype,
        moneymode: query.moneymode,
        charinfo: query.charinfo,
        job: query.job,
        gang: query.gang,
        metadata: query.metadata,
        inventory: query.inventory,
        page: pageNumber,
        limit: 10,
      },
    }).then((res) => {
      console.log(res.data);
    });
  }, [query, pageNumber]);

  return null;
}
export { usePlayerSearch };
