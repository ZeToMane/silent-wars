import { Sections } from "@/components/Sections";
import data from "@/public/data/data.json";

export default function HomeFR() {
  //@ts-ignore
  console.log("data complete: ", data.fr[0].about[0]);
  return <Sections data={data.fr[0].about[0]} lang="fr" />;
}
