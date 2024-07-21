<script setup lang="ts">
import Slider from "@/components/common/Slider.vue";
import MainBoard from "@/components/common/MainBoard.vue";
import type {BestImageItem, ImageItem, PostInfo} from "@/interface/common";
import MainBestPost from "@/components/common/MainBestPost.vue";

const bannerImageList : ImageItem[] = [
  {
    image: "https://picsum.photos/700/150",
    description: "이미지입니다."
  },
  {
    image: "https://random.imagecdn.app/700/150",
    description: "이미지입니다2."
  },
  {
    image: "https://loremflickr.com/700/150",
    description: "이미지입니다3."
  }
]

const postInfoList : PostInfo[] = [
  {
    image: "https://picsum.photos/200/200",
    title: "[React] React 18 > 17 다운 그레이드 에러",
    category: "개발/React.Js",
    date : "2024.07.21 10:28",
    content : "npx react create app 으로 프로젝트 생성시 18버전으로 생성되는것을 확인할 수 있다. npm i react@버전 , npm i react-dom@버전 으로 원하는 버전으로 다운그레이드 할 경...",
    idx : 1
  },
  {
    image: "https://random.imagecdn.app/200/200",
    title: "[SpringBoot]QueryDsl",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "쿼리를 직접 작성하지 않고 java에서 메소드를 호출하여 쿼리를 실행시키는 JPA 기법 build.gradle buildscript { ext...",
    idx : 2
  },
  {
    image: "https://loremflickr.com/200/200",
    title: "[SpringBoot]QueryDsl",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "쿼리를 직접 작성하지 않고 java에서 메소드를 호출하여 쿼리를 실행시키는 JPA 기법 build.gradle buildscript { ext...",
    idx : 3
  },
  {
    image: "https://picsum.photos/200/200",
    title: "[Spring Boot] ResponseEntity 활용 파일 업다운로드",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "application.yml #파일 업로드 servlet: multipart: max-file-size: 10MB max-request-size: 10MB location: c://temp//spring_uploaded_files File Contrller package...",
    idx : 4
  },
  {
    image: "https://random.imagecdn.app/200/200",
    title: "[Spring/Spring Boot] Spring 젠킨스 CI/CD 자동배포 설정",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "1. Spring Maven 프로젝트 설정 1) General - GitHub 설정 2) 소스 코드 관리 - Git 설정 및 브런치 지정 3) 빌드 유발 및 빌드환경 4) 빌드 후 조치 - 톰캣 설정 ( Context 지정 /...",
    idx : 5
  },
  {
    image: "https://picsum.photos/200/200",
    title: "[SpringBoot]QueryDsl",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "쿼리를 직접 작성하지 않고 java에서 메소드를 호출하여 쿼리를 실행시키는 JPA 기법 build.gradle buildscript { ext...",
    idx : 6
  },
  {
    image: "https://picsum.photos/200/200",
    title: "[SpringBoot]QueryDsl",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "쿼리를 직접 작성하지 않고 java에서 메소드를 호출하여 쿼리를 실행시키는 JPA 기법 build.gradle buildscript { ext...",
    idx : 7
  }
]

const bestImageInfoList : BestImageItem[] = [
  {
    image: "https://random.imagecdn.app/200/150",
    title: "이미지1",
    idx : 1
  },
  {
    image: "https://picsum.photos/200/150",
    title: "이미지2",
    idx : 2
  },
  {
    image: "https://loremflickr.com/200/150",
    title: "이미지3",
    idx : 3
  },
  {
    image: "https://random.imagecdn.app/200/150",
    title: "이미지4",
    idx : 4
  },
];
</script>

<template>
  <main>
    <!-- 배너 -->
    <section>
      <slider :image-list="bannerImageList"/>
    </section>
    <!-- 전체글 -->
    <section class="main-board-section">
      <main-board :post-info-list="postInfoList"/>
    </section>
    <!-- 인기 게시글 -->
    <section class="main-best-section">
      <main-best-post :imageList="bestImageInfoList"/>
    </section>
  </main>
</template>

<style>
</style>