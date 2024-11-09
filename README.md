# SPARCS AI Startup Hackathon 2024 : Team19 '모야Q'

## 서비스 설명

어린이들은 호기심이 많습니다. "왜?"라는 질문을 많이 던지곤 합니다. 부모 입장에서는 아이의 질문에 답하고 호기심을 채워주고 싶지만, 어려움이 있습니다. 인터뷰 결과, 만 2-7세 아동의 부모는 반복적인 질문과 추상적인 개념의 설명을 어려워했고, 만 7-12세 아동의 부모는 아이의 전문적인 지식 요구에 적절한 답변을 찾기 어려워했습니다.
아이의 호기심이 높지만 적절하게 대응하기 어렵다는 점에 주목하여, AI 기반으로 아동기의 호기심을 채워줄 수 있는 서비스를 고안했습니다. 아이와 챗봇 사이의 상호작용 뿐만 아니라, 궁극적으로 부모와 아이의 상호작용을 증진하기 위한 기능을 제공합니다.

### 기능 소개
1. 카메라 비전 기반 AI 챗봇 모야Q와 사진으로 질문 주고 받기
사진을 찍으면 모야Q가 설명해 줍니다. 추가 질문을 던지며, 모야Q와 대화를 주고 받을 수 있습니다. 마이 페이지에서 연령이나 발달 수준에 따라 챗봇의 언어 난이도를 조절할 수 있습니다.
2. 나눴던 질문을 모아 보는 '호기심 도감'
대화가 종료되면 태그 및 요약을 생성하여 도감 형식으로 볼 수 있습니다. 추가 질문도 추천하여, 부모와 아이 사이의 대화를 유도합니다.
3. 아이의 대화를 분석한 리포트
아이가 어떤 주제에 관심이 있는지 보여주며, 데이터 기반으로 추천 질문을 제시합니다.

![백엔드 repository 바로가기](https://github.com/hyeon9698/Team19-BE)

## 실행 방법

### 개발 환경 버전 정보

- Ubuntu 20.04.6
- npm 10.1.0
- node.js 20.9.0

### 1. Dependency 설치

위의 버전에 맞게 npm과 node.js를 설치한 이후 root directory에서 `npm install`을 입력해 주세요.

### 2. 환경 변수 설정

`.env.example`을 복사하여 `.env` 파일을 생성해 주세요. `REACT_APP_API_BASE={API 주소}`로 설정해 주시면 됩니다. (마지막에 `/`는 제외해 주세요)

### 3. 개발 환경 실행

`npm run start`로 실행이 가능합니다.

### 4. 빌드 및 배포

`npm run build`로 빌드가 가능합니다. 만약 Source Map 생성을 원하지 않으신다면 `npm run build:prod` 커맨드를 사용하시면 됩니다.

### 5. Vercel로 배포하기

아래의 버튼을 통해 Vercel에 바로 배포하실 수 있습니다. (Source Map을 생성하지 않는 커맨드로 빌드합니다)<br />
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjinhyeonkwon%2FTeam19-FE&env=REACT_APP_API_BASE&project-name=sash24-team19-fe&repository-name=sash24-team19-fe&demo-title=Demo%20site&demo-url=https%3A%2F%2Fteam19-fe.vercel.app%2F)
