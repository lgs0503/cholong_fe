<script setup lang="ts">
import Slider from "@/components/common/Slider.vue";
import MainBoard from "@/components/common/MainBoard.vue";
import type {ImageItem, PostInfo} from "@/interface/common";

const bannerImageList : ImageItem[] = [
  {
    image: "../src/assets/images/1.png",
    description: "이미지입니다."
  },
  {
    image: "../src/assets/images/2.png",
    description: "이미지입니다2."
  },
  {
    image: "../src/assets/images/3.png",
    description: "이미지입니다3."
  }
]

const postInfoList : PostInfo[] = [
  {
    image: "",
    title: "[React] React 18 > 17 다운 그레이드 에러",
    category: "개발/React.Js",
    date : "2024.07.21 10:28",
    content : "npx react create app 으로 프로젝트 생성시 18버전으로 생성되는것을 확인할 수 있다. npm i react@버전 , npm i react-dom@버전 으로 원하는 버전으로 다운그레이드 할 경...",
    idx : 1
  },
  {
    image: "",
    title: "[SpringBoot]QueryDsl",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "쿼리를 직접 작성하지 않고 java에서 메소드를 호출하여 쿼리를 실행시키는 JPA 기법 build.gradle buildscript { ext...",
    idx : 2
  },
  {
    image: "",
    title: "[SpringBoot]QueryDsl",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "쿼리를 직접 작성하지 않고 java에서 메소드를 호출하여 쿼리를 실행시키는 JPA 기법 build.gradle buildscript { ext...",
    idx : 3
  },
  {
    image: "",
    title: "[Spring Boot] ResponseEntity 활용 파일 업다운로드",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "application.yml #파일 업로드 servlet: multipart: max-file-size: 10MB max-request-size: 10MB location: c://temp//spring_uploaded_files File Contrller package...",
    idx : 4
  },
  {
    image: "",
    title: "[Spring/Spring Boot] Spring 젠킨스 CI/CD 자동배포 설정",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "1. Spring Maven 프로젝트 설정 1) General - GitHub 설정 2) 소스 코드 관리 - Git 설정 및 브런치 지정 3) 빌드 유발 및 빌드환경 4) 빌드 후 조치 - 톰캣 설정 ( Context 지정 /...",
    idx : 5
  },
  {
    image: "",
    title: "[SpringBoot]QueryDsl",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "쿼리를 직접 작성하지 않고 java에서 메소드를 호출하여 쿼리를 실행시키는 JPA 기법 build.gradle buildscript { ext...",
    idx : 6
  },
  {
    image: "",
    title: "[SpringBoot]QueryDsl",
    category: "개발/Spring&SpringBoot",
    date : "2024.07.21 10:28",
    content : "쿼리를 직접 작성하지 않고 java에서 메소드를 호출하여 쿼리를 실행시키는 JPA 기법 build.gradle buildscript { ext...",
    idx : 7
  }
]


</script>

<template>
  <main>
    <section>
      <slider :image-list="bannerImageList"/>
    </section>
    <section class="main-board-section">
      <main-board :post-info-list="postInfoList"/>
    </section>
    <section>
      <h2 class="section-title">인기 게시물</h2>
      <div>
        <div>
          <img src="#" alt=""/>
        </div>
        <div>
          <img src="#" alt=""/>
        </div>
        <div>
          <img src="#" alt=""/>
        </div>
        <div>
          <img src="#" alt=""/>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
</style>