/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import PageWrapper from "../components/PageWrapper.tsx";
import Content from "../components/Content.tsx";

export default function Greet(props: PageProps) {
  return <PageWrapper>
    <Content>Hello {props.params.name}!</Content>
  </PageWrapper>;
}
