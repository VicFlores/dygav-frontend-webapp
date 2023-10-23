import React, { FC } from "react";
import Head from "next/head";

export const UtilHead: FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={content} />
    </Head>
  );
};
