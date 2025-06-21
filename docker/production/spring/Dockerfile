 # またはopenjdk:21-bullseye
FROM openjdk:21-slim 
# xargs（findutils）をインストール
RUN apt-get update && apt-get install -y findutils && apt-get clean
# プロジェクトの backend ディレクトリをコンテナにコピー
COPY backend /app/backend
# 作業ディレクトリを設定
WORKDIR /app/backend
# 実行権限を付与（UNIX環境用）
RUN chmod +x gradlew
# Gradleでビルド
RUN ./gradlew bootJar -x test --no-daemon

COPY docker/production/spring/wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# ポートを公開
EXPOSE 8080
# CMDはdocker-composeで上書きされるが念のため指定
CMD ["java", "-jar", "build/libs/backend-0.0.1-SNAPSHOT.jar"]
