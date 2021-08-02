import { getTopTracksLong } from "../../lib/spotify";

export default async (_, res) => {
  const response = await getTopTracksLong();
  const { items } = await response.json();

  return res.status(200).json({ items });
};
