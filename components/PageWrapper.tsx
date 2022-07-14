/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import Header from "./Header.tsx";

export default function PageWrapper({ children }): FunctionComponent<{}> {
    return (
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
            <Header />
            {children}
        </div>
    );
}
