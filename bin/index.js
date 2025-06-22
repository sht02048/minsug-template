#!/usr/bin/env node

const path = require("path");
const { readdirSync } = require("fs");
const { copy } = require("fs-extra");

let inquirer = require("inquirer");
if (inquirer.default && typeof inquirer.default.prompt === "function") {
  inquirer = inquirer.default;
}

async function main() {
  // 1) 템플릿 디렉토리에서 available 목록 읽기
  const templatesDir = path.resolve(__dirname, "../template");
  const available = readdirSync(templatesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // 2) 커맨드라인 인자 파싱
  const [, , argTemplate, argProject] = process.argv;

  // 3) 인자가 모두 주어지지 않았으면 인터랙티브로 질문
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "어떤 템플릿으로 생성하시겠습니까?",
      choices: available,
      when: () => !available.includes(argTemplate),
      default: available[0],
    },
    {
      type: "input",
      name: "projectName",
      message: "프로젝트 이름을 입력하세요:",
      validate: (input) =>
        input.trim() !== "" || "프로젝트 이름은 비어 있을 수 없습니다.",
      when: () => !argProject,
      default: "my-app",
    },
  ]);

  const templateName = available.includes(argTemplate)
    ? argTemplate
    : answers.template;
  const projectName = argProject || answers.projectName;

  // 4) 복사 소스·대상 경로
  const srcPath = path.resolve(templatesDir, templateName);
  const destPath = path.resolve(process.cwd(), projectName);

  // 5) 복사 실행
  try {
    await copy(srcPath, destPath);
    console.log(
      `\n✔️  '${templateName}' 템플릿으로 '${projectName}' 프로젝트를 생성했습니다.`
    );
    console.log(`   cd ${projectName} && npm install\n`);
  } catch (err) {
    console.error(`❌ 생성 실패: ${err.message}`);
    process.exit(1);
  }
}

main();
