/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import PageWrapper from "../../components/PageWrapper.tsx";
import Content from "../../components/Content.tsx";
import WeatherSearch from "../../islands/WeatherSearch.tsx";

const Weather = (props: PageProps) => {
    return <PageWrapper>
        <Content>What's the weather like? 🤔</Content>
        <WeatherSearch />
    </PageWrapper>;
}

export default Weather;
