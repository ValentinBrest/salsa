import webpack from 'webpack';

import { buildCssLoaders } from './loaders/buildCssLoaders';

export function buildLoader (isDev: boolean): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };
  
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|webp|woff|mp4)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
  
    const cssLoader = buildCssLoaders(isDev);
  
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsLoader,
        cssLoader,
    ];
}