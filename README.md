# minsug-template

> A simple, interactive CLI tool for scaffolding multiple project templates (e.g., React + Vite, Next.js).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

  - [Interactive Mode](#interactive-mode)
  - [Non‑interactive Mode](#non‑interactive-mode)

- [Template Directory Structure](#template-directory-structure)
- [Adding New Templates](#adding-new-templates)
- [Options](#options)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

`minsug-template`은 하나의 패키지 안에서 여러 가지 프로젝트 뼈대를 제공하는 CLI 스캐폴딩 도구입니다. 사용자는 React + Vite, Next.js 등 미리 정의된 템플릿 중에서 선택하여 손쉽게 새 프로젝트를 생성할 수 있습니다.

## Features

- 🎨 **다중 템플릿 지원**: `template/` 디렉토리에 추가한 모든 하위 폴더가 자동으로 사용 가능
- 🤖 **인터랙티브 모드**: `inquirer` 기반의 단계별 질문으로 템플릿과 프로젝트 이름 선택
- 🚀 **빠른 비대화형 모드**: 명령어 인자만 전달하면 바로 프로젝트 생성
- 📂 **간단한 파일 복사**: `fs-extra`의 `copy()`로 템플릿 전체 복사
- 🛠️ **확장성**: --git, --install 같은 옵션 추가 가능 (추후 구현)

## Prerequisites

- Node.js ≥ 14.x
- npm ≥ 6.x

## Installation

Global 설치 없이 `npx` 만으로 실행할 수 있습니다:

```bash
npx minsug-template
```

원한다면 전역으로 설치할 수도 있습니다:

```bash
npm install -g minsug-template
```

## Usage

### Interactive Mode

인자 없이 실행하면 순서대로 템플릿과 프로젝트 이름을 묻습니다:

```bash
npx minsug-template
```

1. 사용할 템플릿 선택
2. 프로젝트 이름 입력
3. 템플릿 복사 완료 메시지 출력

### Non‑interactive Mode

템플릿과 프로젝트 이름을 인자로 전달하면 바로 실행됩니다:

```bash
npx minsug-template <template> <project-name>
# 예시:
npx minsug-template react-vite my-app
```

## Template Directory Structure

프로젝트 루트의 `template/` 폴더 안에 각 템플릿을 서브폴더로 배치합니다:

```
create-multitemplate/
└─ template/
   ├─ vite-react-redux-tailwind/
   │   ├─ package.json
   │   ├─ src/
   │   └─ …
   └─ nextjs/
       ├─ package.json
       ├─ pages/
       └─ …
```

템플릿 폴더 이름이 바로 CLI에서 사용할 `template` 인자가 됩니다.

## Adding New Templates

1. `template/` 디렉토리에 새 폴더 생성: `template/<new-template-name>/`
2. 해당 폴더 안에 뼈대 파일(예: `package.json`, `src/`, 설정 파일) 배치
3. CLI 실행 시 자동으로 목록에 반영됩니다.

## Options

| 옵션        | 설명                                |
| ----------- | ----------------------------------- |
| `--install` | 프로젝트 생성 후 `npm install` 실행 |
| `--git`     | 프로젝트 생성 후 `git init` 실행    |

> **Note:** 현재 옵션은 미구현 상태이며, 추후 버전에서 지원 예정입니다.

## Troubleshooting

- \`\`

  - CommonJS 환경에서 발생 시, `require('inquirer')` 후 `inquirer.default` 확인 로직을 추가하세요.

- **템플릿 폴더를 찾을 수 없다는 에러**

  - `template/` 디렉토리와 서브폴더 이름이 정확한지 확인합니다.

- **npx 실행 시 패키지를 찾을 수 없음**

  - 로컬 테스트 시 `npm link` 또는 `npx .` 방식으로 실행하세요.

## Contributing

1. Fork this repository
2. 새 브랜치 생성: `git checkout -b feature/new-template`
3. 변경 사항 커밋: \`git commit -m "Add new template"
4. 원격 브랜치에 푸시: `git push origin feature/new-template`
5. Pull Request 생성

## License

MIT © 2025 minsugchae
