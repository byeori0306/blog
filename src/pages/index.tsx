import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { css } from "@emotion/react";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main css={mainStyle}>
            <h1 css={titleStyle}>블로그 준비 중 🛠</h1>
        </main>
    );
};

const mainStyle = css`
    display: flex;
    /* align-items: center; */
    justify-content: center;
`;

const titleStyle = css`
    font-size: 3.2rem;
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
