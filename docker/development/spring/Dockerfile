FROM openjdk:21-slim

# 必要なツールをインストール（xargsなど）
RUN apt-get update && apt-get install -y findutils && apt-get clean

# Gradle wrapper に実行権限を与えるためにまずだけコピー
WORKDIR /app/backend
COPY backend/gradlew .
COPY backend/gradle ./gradle

RUN chmod +x ./gradlew

# 必要なライブラリ（依存）を先に取得（キャッシュ活用）
COPY backend/build.gradle ./build.gradle
COPY backend/settings.gradle ./settings.gradle
RUN ./gradlew dependencies --no-daemon || true

# あとは docker-compose の volumes 指定で /app/backend をホストと同期させる
# ここでソースコードはCOPYしない（volumesでマウントするから）

# EXPOSE 8000
CMD ["./gradlew", "bootRun", "--no-daemon"]
