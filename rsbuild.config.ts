import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { readFileSync } from "node:fs";
import { relative } from "node:path";
import { env } from "node:process";

const isProduction = process.env.NODE_ENV === "production";
const APP_NAME = "web template";
const HTML_PLACEHOLDER = readFileSync("src/placeholder.html");

export default defineConfig(() => {
  return {
    plugins: [pluginReact()],
    dev: {
      writeToDisk: false,
    },
    source: {
      entry: {
        index: relative(__dirname, "src/entry.client.tsx"),
      },
      alias: {
        "@": relative(__dirname, "src"),
      },
      define: {
        "process.env": JSON.stringify(env),
      },
    },
    output: {
      assetPrefix:
        env?.GITHUB_REPOSITORY?.split("/")?.[1] || '/',
    manifest: true,
    sourceMap: {
      css: !isProduction,
    },
  },
    html: {
      template: relative(__dirname, "src/index.html"),
      title: APP_NAME,
      templateParameters: {
        description: "web template by rsbuild",
        placeholder: `<div class="app-placeholder">${HTML_PLACEHOLDER}<p>${APP_NAME}</p></div>`,
      },
    },
  };
});
