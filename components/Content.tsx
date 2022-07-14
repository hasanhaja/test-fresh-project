/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

export default function Content({ children }): FunctionComponent<{}> {
    return (
        <div class={tw`bg-gray-200 rounded-md p-10 mb-2`}>
            {children}
        </div>
    );
}
