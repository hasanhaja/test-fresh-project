/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import PageWrapper from "../../components/PageWrapper.tsx";
import Content from "../../components/Content.tsx";
import WeatherSearch from "../../islands/WeatherSearch.tsx";

export const handler: Handlers<string | null | undefined> = {
    GET(_, ctx) {
        const API_KEY = Deno.env.get("WEATHER_API_KEY");
        return ctx.render(API_KEY);
    },
};

const Weather = ({ data }: PageProps<string | null | undefined>) => {
    return <PageWrapper>
        <Content>What's the weather like? 🤔</Content>
        <WeatherSearch apiKey={data} />
    </PageWrapper>;
}

export default Weather;
