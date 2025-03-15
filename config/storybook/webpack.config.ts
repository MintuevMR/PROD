import webpack, { RuleSetRule } from "webpack";
import { BuildPaths } from "../build/types/config";
import path from "path";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";

export default ({ config }: { config: webpack.Configuration }) => {

    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };

    config.module!.rules = config.module?.rules?.map((rule) => {
        if (typeof rule !== "string" && /svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push(buildCssLoaders(true))

    return config;
}