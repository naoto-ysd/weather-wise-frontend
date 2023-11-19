aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 302246904757.dkr.ecr.ap-northeast-1.amazonaws.com
docker build -t weather-wise-front .
docker tag weather-wise-front:latest 302246904757.dkr.ecr.ap-northeast-1.amazonaws.com/weather-wise-front:latest
docker push 302246904757.dkr.ecr.ap-northeast-1.amazonaws.com/weather-wise-front:latest
