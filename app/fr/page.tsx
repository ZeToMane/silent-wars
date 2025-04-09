import { Sections } from "@/components/Sections";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import data from "@/public/data/data.json";

export default function HomeFR() {
  //@ts-ignore
  return (
    <>
      <LanguageSwitcher lang="fr" />
      <Sections data={data.fr[0].about[0]} lang="fr" />
    </>
  );
}
