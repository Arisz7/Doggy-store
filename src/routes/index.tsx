import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex flex-1">
      <img
        src="https://www.thefarmersdog.com/digest/wp-content/uploads/2021/12/corgi-top-1400x871.jpg"
        alt="corgi-home-page"
        class="object-cover"
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Corgitto",
  meta: [
    {
      name: "description",
      content: "Purchase Corgis",
    },
  ],
};
