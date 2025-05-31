FROM node:20

# 作業ディレクトリを設定
WORKDIR /app/frontend

# package.jsonとpackage-lock.jsonを先にコピー（キャッシュを有効活用）
COPY frontend/package*.json ./

# 依存関係をインストール
RUN npm install

# アプリのソースコードをコピー
COPY frontend/ ./

# 開発用のポートを開放（Viteのデフォルトは5173
EXPOSE 5173

# Viteの開発サーバーを起動
CMD ["npm", "run", "dev"]