import webpack from 'webpack';
import MiniCssExtractPlugin, { loader } from "mini-css-extract-plugin";
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.includes('.module.'),
                        localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:5]"
                    },
                }
            },
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        tsLoader,
        scssLoader
    ]
}