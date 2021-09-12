const calendarReactData = {
  title: "2주차 과제에 리엑트 ⚛️ 사용하기.",
  stackBadges: [
    {
      url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      alt: "React",
    },
  ],
  contents: [
    {
      title:
        '<a href="https://soonitoon.github.io/cmi-react-calendar">클릭!</a>',
    },
    {
      title:
        '<a href="https://github.com/soonitoon/cmi-react-calendar">리포지토리 💾</a>',
    },
    {
      title: "요구사항",
      content: [
        "creat-react-app을 사용한 프로젝트 초기 설정.",
        "함수형 컴포넌트를 사용하여 개발.",
        "<code>javascript</code>, <code>jsx</code>를 사용(typescript는 뒤에서 사용)",
        "<code>useContext</code>를 사용하여 전역상태관리(라이브러리는 뒤에서 사용)",
      ],
    },
    {
      title: "결과물",
      content: [
        "년, 월, 일을 <code>useContext</code>를 사용하여 전역 관리함.",
        "캘린더에 표시할 날짜 구하는 코드, 날짜 변경 코드를 모듈화하여 컴포넌트를 깔끔하게 구성.",
        "<code>styled component</code>를 사용하여 각각의 컴포넌트 스타일을 컴포넌트 내부에서 관리",
        "각각의 날짜, 변경 버튼 같이 반복되는 부분은 최대한 컴포넌트 재사용성을 높임.",
      ],
    },
    {
      title: "코드 리뷰 후 수정사항",
      content: [
        "버튼 컴포넌트에서 <code>prop</code> 이름에 what, where과 같이 의미를 알 수 없는 단어를 사용하는 것은 좋지 않음.",
        "<code>jsx</code>를 사용한 파일의 확장자는 <code>.js</code>말고 명시적으로 <code>.jsx</code>를 사용해야 함.",
        "<code>styled component</code> 코드를 <code>jsx</code> 파일과 분리해서 구성하면 코드가 더 깔끔해질 것 같음.",
        "⚠️ 리액트에서 반복해서 만들어내는 요소에 붙여주는 <code>key</code> 속성은 반드시 <b>변하지 않는 값</b>을 넣어야 함.",
      ],
    },
  ],
};

export default calendarReactData;
