import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";

export default component$(() => {
  return (
    <header
      class="fixed top-0 left-0 w-full flex justify-between
     items-center"
    >
      <h1>Corgitto</h1>
      <i class="fa-solid fa-cart-shopping"></i>
    </header>
  );
});
