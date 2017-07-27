module.exports = {
	devtool: 'eval-source-map', //��������Source Maps��ѡ����ʵ�ѡ��
	entry: __dirname + "/app/main.js", //�Ѷ���ἰ��Ψһ����ļ�
	output: {
		path: __dirname + "/public", //�������ļ���ŵĵط�
		filename: "wing.min.js" //���������ļ����ļ���
	},

	module: {
		loaders: [{
				test: /\.json$/,
				loader: "json-loader"
			}, {
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			// {
			// 	test: /\.css$/,
			// 	loader: 'css-loader' //��Ӷ���ʽ��Ĵ���
			// },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader', //��webpack��module���ֵ�loaders��������ü���
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},

	devServer: {
		contentBase: "./public", //���ط����������ص�ҳ�����ڵ�Ŀ¼
		colors: true, //�ն���������Ϊ��ɫ
		historyApiFallback: true, //����ת
		inline: true //ʵʱˢ��
	}

}