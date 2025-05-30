import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl }: BuildOptions): webpack.WebpackPluginInstance[] {
    const pligins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
    ];// .filter(Boolean);

    if (isDev) {
        pligins.push(new webpack.HotModuleReplacementPlugin());
        pligins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
        pligins.push(new ReactRefreshWebpackPlugin());
    }

    return pligins;
}
