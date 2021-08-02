import { getTopTracksMedium } from "../../utils/spotify";

export default async (_, res) => {
  const response = await getTopTracksMedium();
  const { items } = await response.json();

  return res.status(200).json({ items });
};
