````markdown
# team4-fe

**중앙해커톤 SolvAi 팀의 프론트 엔드 레포지토리**

## 🚀 개발 시작하기

1. **`pnpm` 설치**  
   `pnpm`을 전역으로 설치합니다:
   ```bash
   npm install -g pnpm
````

2. **`의존성 설치`**

   ```bash
   pnpm install
   ```

3. **개발 서버 시작**
   아래 명령어로 개발 서버를 시작합니다:

   ```bash
   pnpm start
   ```

⚙️ **코드 스타일 관리 (Biome 사용)**

* **biome 설치**
  biome을 프로젝트에 설치합니다:

  ```bash
  pnpm add @biomejs/biome --save-dev
  ```

* **biome 초기화**
  biome 설정 파일을 초기화합니다:

  ```bash
  pnpx biome init
  ```

* **코드 스타일 검사**
  코드 스타일을 검사하려면 아래 명령어를 사용합니다:

  ```bash
  pnpx biome lint
  ```

* **자동 수정**
  코드 스타일을 자동으로 수정하려면:

  ```bash
  pnpx biome lint --fix
  ```

📦 **스크립트**

* `pnpm start`: 개발 서버 시작
* `pnpx biome lint`: 코드 스타일 검사
* `pnpx biome lint --fix`: 코드 스타일 자동 수정

```
```
