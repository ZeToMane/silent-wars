import { Sections } from "@/components/Sections";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import data from "@/public/data/data.json";

export default function HomeFR() {
  //@ts-ignore
  console.log("data complete: ", data.en[0].about[0]);
  return (
    <>
      <LanguageSwitcher lang="en" />
      <Sections data={data.en[0].about[0]} lang="en" />
    </>
  );
}
