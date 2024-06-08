exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192, // Size limit in bytes, adjust as necessary
                },
              },
            ],
          },
        ],
      },
    });
  };