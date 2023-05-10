import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers({ paths }: BuildOptions): webpack.ResolveOptions {
    const extensions: string[] = ['.tsx', '.ts', '.js'];

    return {
        extensions,
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}
