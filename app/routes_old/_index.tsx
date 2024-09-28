import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Adica" },
    { name: "description", content: "Welcome to Adica!" },
  ];
};

export default function Index() {
  return (
    <div>
      ok
    </div>
  );
}