import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
    const extensions: string[] = ['.tsx', '.ts', '.js'];

    return {
        extensions
    }
}