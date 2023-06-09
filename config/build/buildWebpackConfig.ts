import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';
import { buildLoader } from './buildLoader';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const {paths, mode, port, isDev} = options;
    const {entry, build, html, src} = paths;
    return {
        mode,
        entry,
        output: {
            filename: '[name].[contenthash].js',
            path: build,
            clean: true,
        },
        performance : {
            hints : false,
        },
        plugins: buildPlugins(html, isDev),
        module: {
            rules: buildLoader(isDev),
        },
        resolve: buildResolvers(src),
        devtool: isDev? 'inline-source-map': undefined,
        devServer: isDev? buildDevServer(port): undefined,
    };
}