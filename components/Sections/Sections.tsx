import clsx from "clsx";

import css from "./Sections.module.scss";

import { Slider } from "@/components/Slider";

type SectionsProps = {
  activeSection: "about" | "trailers";
};

export function Sections({ activeSection }: SectionsProps) {
  return (
    <div className={clsx(css["sections-container"])}>
      {activeSection === "about" && (
        <div className={css.Sections} style={{ width: "100ch" }}>
          <h2>Notre organisation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            volutpat varius enim eu tincidunt. Praesent in metus leo. Praesent
            leo enim, efficitur ac odio nec, egestas euismod risus. Nullam porta
            felis et mi dapibus faucibus. Suspendisse tellus ligula, accumsan
            dictum diam eu, placerat scelerisque orci. Etiam vitae bibendum
            sapien, nec dictum dolor. Praesent interdum libero eu nulla lacinia,
            feugiat accumsan nisl eleifend. Etiam congue, augue vel commodo
            vestibulum, velit urna interdum mi, id fermentum lorem diam eu
            ligula. Nullam tempor mauris a sem venenatis accumsan. Vivamus
            ultricies nisi pretium ex lacinia consequat. Vestibulum id venenatis
            augue, eu bibendum sapien.
          </p>
          <p>
            Etiam interdum euismod magna, in laoreet nibh pretium vel. Curabitur
            tristique tempor finibus. Vestibulum sed felis neque. Nunc vitae
            orci condimentum, condimentum urna quis, semper tortor. Ut a
            placerat enim. Proin blandit sapien eget nibh blandit, quis euismod
            elit volutpat. Nullam euismod vitae dolor a commodo. Curabitur
            egestas, turpis ut pulvinar malesuada, neque mauris porttitor erat,
            et maximus magna arcu et urna. Aenean laoreet leo sit amet sodales
            malesuada.
          </p>
          <p>
            Morbi vehicula est turpis, in hendrerit quam varius eu. Proin
            molestie ullamcorper massa sed ultrices. In egestas urna ac
            pellentesque lacinia. Vestibulum non iaculis purus. Cras fermentum
            enim rhoncus interdum fringilla. Morbi dignissim orci non erat
            commodo vestibulum. Donec eu placerat neque. Nam in orci et ipsum
            imperdiet tincidunt. Sed ultrices, nisi quis rutrum dictum, quam
            dolor mattis leo, vitae pellentesque sapien nisl non mi.
          </p>
        </div>
      )}
      {activeSection === "trailers" && (
        <div className={css.Sections}>
          <Slider />
        </div>
      )}
    </div>
  );
}
