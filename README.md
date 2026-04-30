<img src="https://capsule-render.vercel.app/api?type=waving&color=ffaaaa&height=150&section=header&text=🌸%20Bloom%20-%20나만의%20만다라트%20계획표&fontSize=40" />

> 작은 씨앗이 81개의 꽃잎으로 피어나 한 송이의 꽃이 된다.

<br />
🔗 배포 : https://mandalart-bloom.vercel.app
<br />

## ✨ 프로젝트 소개

### 개요
- **Bloom(블룸)** 은 **"작은 씨앗이 81개의 꽃잎으로 피어나 한 송이의 꽃이 된다."** 는 의미의 만다라트 기법을 활용한 목표 관리 웹 애플리케이션입니다.<br />
- 사용자는 9×9 격자에 중심 목표를 설정하고, 이를 달성하기 위한 세부 목표들을 작성하여 **체계적으로 목표를 계획하고 달성**할 수 있도록 돕습니다. color-picker 라이브러리를 사용하여 원하는 **색상으로 변경**할 수 있고, **JPG·PNG·PDF 파일로 저장**할 수 있습니다. <br />

### 대상
- 새해 목표, 학업 계획, 취업 준비 등 체계적인 목표 수립이 필요한 모든 사람
- 단순한 To-do 리스트가 아닌, 핵심 목표에서 실행 계획까지 한눈에 정리하고 싶은 사람
- 작성한 만다라트를 파일로 저장하거나 출력하여 오래 간직하고 싶은 사람

### 목적
- 기존 웹 만다라트 서비스는 데이터 유실, 커스터마이징 부재, 저장 기능 등 안되는 한계들을 갖고 있습니다.
- Bloom은 이러한 불편함을 해소하고 누구나 브라우저에서 바로 만다라트를 작성·꾸미고·저장할 수 있는 완결된 경험을 제공하는 것을 목표로 합니다.

## ✨ 기술 스택
### Front-end
<table>
  <tr>
    <td align="center" width="80">
      <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png" width="60"><br>
      React
    </td>
    <td align="center" width="80">
      <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913457/noticon/eh4d0dnic4n1neth3fui.png" width="60"><br>
      TypeScript
    </td>
    <td align="center" width="80">
      <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657314490/noticon/ur8spzfcq4acw7ijp68v.png" width="60"><br>
      Tailwind CSS
    </td>
    <td align="center" width="80">
      <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1741157974/noticon/whqhhulwqkiyt2ebgbr6.png" width="60"><br>
      Zustand
    </td>
  </tr>
</table>

### Tools
<table>
  <tr>
    <td align="center" width="80">
      <img src="https://avatars.githubusercontent.com/u/66879934?v=4" width="60"><br>
      Lucide
    </td>
    <td align="center" width="80">
      <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1679535484/noticon/arqfoi6i7gubuqkpigud.png" width="60"><br>
      Vite
    </td>
    <td align="center" width="80">
      <img src="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/vercel-logo-icon.png" width="60"><br>
      Vercel
    </td>
    <td align="center" width="80">
      <img src="https://prettier.io/icon.png" width="60"><br>
      Prettier
    </td>
    <td align="center" width="80">
      <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1599890132/noticon/c9dgkhp3m5rxmzn3fnp9.png" width="60"><br>
      ESLint
    </td>
  </tr>
</table>

## ✨ 주요 기능

- 9×9 만다라트 그리드 렌더링 및 셀 인라인 편집
- 핵심 목표 ↔ 세부 목표 자동 동기화
- 색상 커스터마이징 (react-colorful)
- JPG·PNG·PDF 내보내기 (html-to-image + jsPDF)
- Zustand persist 미들웨어로 자동 저장 및 복원

## ✨ 기존 서비스와의 차별점

| 항목 | 기존 서비스 | Bloom |
| :------: |------------|-------|
| 새로고침 시 데이터 | ❌ 작성된 데이터가 모두 초기화 | ✅ 작성된 데이터가 남아있음 |
| 색상 커스터마이징 | ❌ 미지원 | ✅ 원하는 색상 변경 가능 |
| 파일 내보내기 | ❌ PNG만 지원 | ✅ JPG · PNG · PDF 지원 |

## ✨ 시작하기

```bash
$ git clone https://github.com/hyesom2/Bloom.git
$ cd Bloom
$ npm install
$ npm run dev
```

## ✨ 향후 업데이트 계획
- [ ] 기기 간 동기화
- [ ] 여러 개의 만다라트 관리
- [ ] 실행 계획 달성 체크 및 진행률 시각화
- [ ] 카테고리별 템플릿 제공
- [ ] 링크 공유 기능
- [ ] 다크 모드 지원
