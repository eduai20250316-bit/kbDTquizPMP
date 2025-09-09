# 🎯 PMP 시험 준비 퀴즈

PMBOK 7판 기반의 PMP(Project Management Professional) 자격증 시험 준비를 위한 모바일 웹 퀴즈 애플리케이션입니다.

## 🚀 라이브 데모

👉 **[PMP 퀴즈 앱 체험하기](https://eduai20250316-bit.github.io/kbDTquizPMP/)**

## ✨ 주요 특징

### 📱 **모바일 최적화**
- 반응형 디자인으로 모든 디바이스에서 완벽한 사용 경험
- PWA(Progressive Web App) 지원으로 앱처럼 설치 및 사용 가능
- 오프라인에서도 퀴즈 이용 가능
- 터치 친화적인 인터페이스

### 📚 **완전한 한글 지원**
- 모든 문제, 선택지, 정답, 해설이 한글로 제공
- PMBOK 7판 핵심 내용을 한국어로 이해하기 쉽게 구성
- 한국 PMP 수험생을 위한 맞춤형 콘텐츠

### 🎯 **실제 시험 준비**
- **150개 문제**: PMBOK 7판 기반 + 핵심 개념 실무 적용 문제
- **12가지 프로젝트 관리 원칙** 완전 커버
- **8개 성과 영역** 심화 문제 제공
- 실제 PMP 시험과 동일한 4지선다 형식

### 📊 **상세한 학습 분석**
- 실시간 점수 및 정답률 추적
- 성과별 등급 평가 (우수/양호/보통/미흡/학습필요)
- 틀린 문제 분석 및 복습 가이드 제공
- 상세한 해설과 PMBOK 참고 페이지 제공

### 🔄 **학습 최적화**
- 문제 순서 무작위화로 반복 학습 효과 증대
- 키보드 단축키 지원 (1-4: 선택지, Enter: 확인, ESC: 나가기)
- 결과 공유 기능으로 학습 동기 부여
- 다크 모드 자동 지원

## 🛠️ 기술 스택

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Design**: 모바일 퍼스트 반응형 디자인
- **PWA**: Service Worker, Web App Manifest
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📋 문제 구성

### 🎯 **PMBOK 7판 핵심 영역**

1. **프로젝트 관리 원칙 (12가지)**
   - 가치에 집중
   - 시스템 사고
   - 스튜어드십 등

2. **성과 영역 (8가지)**
   - 팀 (Team)
   - 개발 접근법 및 생명주기
   - 계획 (Planning)
   - 프로젝트 작업
   - 전달 (Delivery)
   - 측정 (Measurement)
   - 불확실성 (Uncertainty)
   - 이해관계자 (Stakeholder)

3. **프로젝트 관리 개념**
   - 테일러링
   - 적응형 vs 예측형 접근법
   - 가치 중심 전달
   - 리더십과 팀 관리

## 🚀 로컬 실행 방법

```bash
# 1. 저장소 복제
git clone https://github.com/eduai20250316-bit/kbDTquizPMP.git
cd kbDTquizPMP

# 2. 로컬 서버 실행 (Python 사용)
python -m http.server 8000

# 또는 Node.js 사용
npx serve .

# 3. 브라우저에서 접속
# http://localhost:8000
```

## 🌐 GitHub Pages 배포

### 자동 배포 설정

1. **저장소 설정**
   ```bash
   # GitHub에 저장소 생성 후
   git remote add origin https://github.com/eduai20250316-bit/kbDTquizPMP.git
   git push -u origin main
   ```

2. **GitHub Pages 활성화**
   - GitHub 저장소 → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" 선택
   - GitHub Actions이 자동으로 배포 수행

3. **자동 배포 확인**
   - `.github/workflows/deploy.yml` 파일이 자동 배포 처리
   - 코드 변경 시 자동으로 사이트 업데이트

### 수동 배포

```bash
# GitHub Pages에 직접 배포
git add .
git commit -m "Deploy PMP Quiz App"
git push origin main
```

## 📱 PWA 설치 방법

### **Android / Chrome**
1. 사이트 접속 후 주소창의 "설치" 버튼 클릭
2. 또는 Chrome 메뉴 → "홈 화면에 추가"

### **iOS / Safari**
1. Safari에서 사이트 접속
2. 공유 버튼 → "홈 화면에 추가"

### **데스크톱**
1. Chrome/Edge에서 주소창의 설치 아이콘 클릭
2. 또는 설정 메뉴 → "앱 설치"

## 🎯 사용법

### **기본 사용법**
1. 📱 **시작**: "퀴즈 시작하기" 버튼 클릭
2. 🤔 **문제 풀이**: 4개 선택지 중 정답 선택
3. ✅ **확인**: "답안 확인하기" 버튼으로 정답 여부 확인
4. 📖 **해설**: "해설 보기"에서 상세 설명 확인
5. ➡️ **진행**: "다음 문제"로 계속 진행
6. 🏆 **결과**: 30문제 완료 후 최종 결과 확인

### **키보드 단축키**
- `1`, `2`, `3`, `4`: 선택지 선택
- `Enter`: 현재 활성 버튼 클릭
- `ESC`: 시작 화면으로 돌아가기

### **고급 기능**
- 📤 **결과 공유**: 소셜 미디어나 메신저로 점수 공유
- 🔄 **재시작**: 문제 순서를 바꿔서 다시 도전
- 📋 **복습**: 틀린 문제만 모아서 재학습

## 🤝 기여하기

### **문제 추가/수정**
1. `script.js`의 `initializeQuestions()` 함수에서 문제 배열 수정
2. 문제 형식:
   ```javascript
   {
       question: "문제 내용",
       options: ["선택지1", "선택지2", "선택지3", "선택지4"],
       answer: "정답",
       explanation: "상세 해설",
       reference: "PMBOK 7판, X.X장"
   }
   ```

### **기능 개선**
1. Fork → Branch → Pull Request
2. Issue 등록 후 논의
3. 모바일 테스트 필수

### **버그 신고**
- [Issues](https://github.com/eduai20250316-bit/kbDTquizPMP/issues)에서 버그 리포트
- 브라우저, 디바이스 정보 포함

## 📞 지원 및 문의

- 🐛 **버그 신고**: [GitHub Issues](https://github.com/eduai20250316-bit/kbDTquizPMP/issues)
- 💡 **기능 제안**: [GitHub Discussions](https://github.com/eduai20250316-bit/kbDTquizPMP/discussions)
- 📧 **이메일 문의**: eduai20250316@example.com

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 🏆 PMP 시험 응원 메시지

> **"성공은 준비된 자에게 찾아옵니다!"** 
> 
> 이 퀴즈 앱으로 꾸준히 연습하시고, PMP 자격증 취득에 성공하시길 바랍니다! 💪
> 
> **#PMP #ProjectManagement #PMBOK #자격증 #성공**

---

⭐ **이 프로젝트가 도움이 되셨다면 GitHub에서 Star를 눌러주세요!** ⭐
