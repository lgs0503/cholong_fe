# CHO LONG - BACKEND

### 기술스택

* Vue3
    * Vue Router
    * Pinia

### Cloud 서버 정보 (구글클라우드)

* SSH 접속 (private key id_rsa_4096 필요)
```
ssh -i ./id_rsa_4096 cholong@34.64.245.234
```

* DOCKER
```
#로컬 및 github상 실행
#이미지빌드
docker build -t lgs0503/cholong_fe:1.0.1 .

#이미지 푸쉬
docker push lgs0503/cholong_fe:1.0.1
#-----------------------------------------------------------
#운영 에서 실행
#컨테이너 중지
docker stop cholong_fe

#컨테이너 삭제
docker rm cholong_fe

#도커 이미지삭제
docker rmi lgs0503/cholong_fe:1.0.1
#도커 풀
docker pull lgs0503/cholong_fe:1.0.1
#도커 컨테이너 실행
docker run -dit --name cholong_fe -p 8080:8080 lgs0503/cholong_fe:1.0.1

#도커 컨테이너 로그 확인
docker logs --tail 10 -f cholong_fe 
```
