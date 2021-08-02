import { getTopTracksShort } from "../../lib/spotify";

export default async (_, res) => {
  const response = await getTopTracksShort();
  const { items } = await response.json();

  return res.status(200).json({ items });
};
