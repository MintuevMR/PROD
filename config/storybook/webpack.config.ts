import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    if (config.module && config.module.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule) => {
            // Проверяем, что rule является объектом RuleSetRule
            if (rule && typeof rule === 'object' && !Array.isArray(rule)) {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }
            }
            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push(buildCssLoaders(true));
    config.resolve = {
        ...(config.resolve ?? {}),
        modules: [
            path.resolve(__dirname, '../../src'),
            'node_modules',
        ],
    };
    config.plugins?.push(
        new webpack.DefinePlugin({
            __IS_DEV__: true,
            __API__: JSON.stringify(''),
        }),
    );

    return config;
};
