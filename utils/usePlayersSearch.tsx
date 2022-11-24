import React, { useEffect, useState } from "react";
import axios from "axios";
type Props = {
  name: string;
  citizenid: string;
  charinfo: string;
  moneytype: string;
  moneymode: string;
  money: number;
  job: string;
  metadata: string;
  gang: string;
  inventory: string;
  pagenumber: number;
};

export default function usePlayersSearch({
  name,
  citizenid,
  charinfo,
  moneytype,
  moneymode,
  money,
  job,
  metadata,
  gang,
  inventory,
  pagenumber,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [players, setPlayers] = useState<any>([]);
  const [hasMore, setHasMore] = useState(false);
  let cancel: any;
  useEffect(() => {
    console.log("useEffect");
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: `http://35.198.157.149:4000/players`,
      params: {
        name: name,
        citizenid: citizenid,
        charinfo: charinfo,
        job: job,
        metadata: metadata,
        gang: gang,
        inventory: inventory,
        page: pagenumber,
        limit: 10,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(res.data);
        setPlayers(res.data.results);
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [
    name,
    citizenid,
    charinfo,
    moneytype,
    moneymode,
    money,
    job,
    metadata,
    gang,
    inventory,
    pagenumber,
  ]);

  return { loading, error, players, hasMore };
}
